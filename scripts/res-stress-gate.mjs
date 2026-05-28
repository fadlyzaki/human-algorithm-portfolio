import puppeteer from "puppeteer";
import ogHandler from "../api/og.js";
import { resolveOGMeta } from "../api/_ogRoutes.js";

const BASE_URL = process.env.STRESS_BASE_URL || "http://127.0.0.1:4173/";
const IDLE_WAIT_MS = Number(process.env.STRESS_IDLE_WAIT_MS || 2500);
const MAX_LONG_TASK_MS = Number(process.env.STRESS_MAX_LONG_TASK_MS || 1000);
const MAX_TOTAL_LONG_TASK_MS = Number(process.env.STRESS_MAX_TOTAL_LONG_TASK_MS || 2500);

const MOBILE_VIEWPORT = {
  width: 390,
  height: 844,
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
};

const INITIAL_MOBILE_BLOCKLIST = [
  /VirtualAssistant/i,
  /sprite-/i,
  /DraggablePhoto/i,
  /portfolioData/i,
  /HomeFeaturedWork/i,
  /HomeWorkSection/i,
  /HomeSideProjects/i,
  /HomeAbout/i,
  /Footer/i,
  /NavigationMenu/i,
  /ChaosCanvas/i,
];

const CRITICAL_PROJECT_ROUTES = [
  "/case-study/stoqo-logistics",
  "/case-study/stoqo-sales",
  "/case-study/design-system-gudangada",
  "/side-project/learning-progress-architect",
  "/side-project/muezza",
  "/side-project/competitor-summarizer",
  "/side-project/human-algorithm",
];

const PROJECT_OG_ROUTES = [
  "/case-study/stoqo-logistics",
  "/case-study/stoqo-sales",
  "/case-study/design-system-gudangada",
  "/side-project/learning-progress-architect",
  "/side-project/muezza",
  "/side-project/competitor-summarizer",
  "/side-project/human-algorithm",
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const scenarioUrl = (path = "/") => new URL(path, BASE_URL).toString();

const isLocalUrl = (url) => {
  try {
    return new URL(url).origin === new URL(BASE_URL).origin;
  } catch {
    return false;
  }
};

const assetName = (url) => {
  try {
    return new URL(url).pathname.split("/").pop();
  } catch {
    return url;
  }
};

const unique = (items) => [...new Set(items)];

const matchingAssets = (resources, patterns) =>
  unique(resources.filter((url) => patterns.some((pattern) => pattern.test(url))).map(assetName));

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const installVitalsCollector = async (page) => {
  await page.evaluateOnNewDocument(() => {
    window.__resStressMetrics = {
      cls: 0,
      lcp: 0,
      longTasks: [],
    };

    const observe = (type, callback) => {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach(callback);
        });
        observer.observe({ type, buffered: true });
      } catch {
        // Some metrics are not exposed in every headless/browser build.
      }
    };

    observe("longtask", (entry) => {
      window.__resStressMetrics.longTasks.push(Math.round(entry.duration));
    });

    observe("layout-shift", (entry) => {
      if (!entry.hadRecentInput) {
        window.__resStressMetrics.cls += entry.value;
      }
    });

    observe("largest-contentful-paint", (entry) => {
      window.__resStressMetrics.lcp = Math.round(entry.startTime);
    });
  });
};

const collectPageState = async (page) => {
  const state = await page.evaluate(() => {
    const resources = performance.getEntriesByType("resource").map((entry) => ({
      name: entry.name,
      initiatorType: entry.initiatorType,
      encodedBodySize: entry.encodedBodySize || 0,
      transferSize: entry.transferSize || 0,
    }));

    return {
      title: document.title,
      mainRendered: Boolean(document.querySelector("main")),
      resources,
      scriptCount: resources.filter((entry) => entry.initiatorType === "script").length,
      metrics: window.__resStressMetrics || { cls: 0, lcp: 0, longTasks: [] },
    };
  });

  const longTasks = state.metrics.longTasks || [];
  return {
    ...state,
    resourceUrls: state.resources.map((entry) => entry.name),
    maxLongTask: longTasks.length ? Math.max(...longTasks) : 0,
    totalLongTask: longTasks.reduce((total, value) => total + value, 0),
  };
};

const assertNoRuntimeErrors = (errors) => {
  assert(errors.length === 0, `Runtime errors detected:\n${errors.join("\n")}`);
};

const assertLongTaskBudget = (state) => {
  assert(
    state.maxLongTask <= MAX_LONG_TASK_MS,
    `Max long task ${state.maxLongTask}ms exceeded ${MAX_LONG_TASK_MS}ms`,
  );
  assert(
    state.totalLongTask <= MAX_TOTAL_LONG_TASK_MS,
    `Total long tasks ${state.totalLongTask}ms exceeded ${MAX_TOTAL_LONG_TASK_MS}ms`,
  );
};

const assertImagesHealthy = async (page) => {
  const brokenImages = await page.evaluate(() => {
    return Array.from(document.images)
      .filter((image) => image.currentSrc && image.complete && image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.src || image.alt || "unknown image");
  });

  assert(
    brokenImages.length === 0,
    `Broken rendered images detected:\n${brokenImages.join("\n")}`,
  );
};

const renderOgPreview = async (route) => {
  const request = new Request(`https://local.test/api/og?page=${encodeURIComponent(route)}`);
  const response = await ogHandler(request);
  const body = Buffer.from(await response.arrayBuffer());

  assert(response.status === 200, `OG ${route} returned status ${response.status}`);
  assert(body.length > 30000, `OG ${route} rendered suspiciously small output: ${body.length} bytes`);

  return {
    route,
    bytes: body.length,
    contentType: response.headers.get("content-type"),
  };
};

const createPage = async (browser) => {
  const page = await browser.newPage();
  const errors = [];

  await installVitalsCollector(page);
  await page.setCacheEnabled(false);
  await page.setViewport(MOBILE_VIEWPORT);

  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text());
    }
  });
  page.on("requestfailed", (request) => {
    if (isLocalUrl(request.url())) {
      errors.push(`Request failed: ${request.url()} - ${request.failure()?.errorText || "unknown"}`);
    }
  });
  page.on("response", (response) => {
    if (isLocalUrl(response.url()) && response.status() >= 400) {
      errors.push(`HTTP ${response.status()}: ${response.url()}`);
    }
  });

  return { page, errors };
};

const visitMobileHome = async (page, path = "/") => {
  await page.goto(scenarioUrl(path), {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  await page.waitForSelector("main", { timeout: 10000 });
  await delay(IDLE_WAIT_MS);
};

const runScenario = async (browser, name, run) => {
  const { page, errors } = await createPage(browser);

  try {
    const details = await run(page, errors);
    await page.close();
    return { name, status: "PASS", details };
  } catch (error) {
    await page.close().catch(() => {});
    return { name, status: "FAIL", error: error.message };
  }
};

const scenarios = [
  {
    name: "mobile cold idle keeps heavy chunks out",
    run: async (page, errors) => {
      await visitMobileHome(page);
      const state = await collectPageState(page);
      const flagged = matchingAssets(state.resourceUrls, INITIAL_MOBILE_BLOCKLIST);

      assert(state.mainRendered, "Main content did not render");
      assert(flagged.length === 0, `Initial mobile loaded blocked assets: ${flagged.join(", ")}`);
      assertNoRuntimeErrors(errors);
      assertLongTaskBudget(state);

      return {
        blockedAssets: flagged,
        scriptCount: state.scriptCount,
        maxLongTask: state.maxLongTask,
        totalLongTask: state.totalLongTask,
        lcp: state.metrics.lcp,
        cls: Number(state.metrics.cls.toFixed(4)),
      };
    },
  },
  {
    name: "assistant loads only after explicit tap",
    run: async (page, errors) => {
      await visitMobileHome(page);
      const before = await collectPageState(page);
      const flaggedBefore = matchingAssets(before.resourceUrls, [
        /VirtualAssistant/i,
        /sprite-/i,
      ]);

      assert(flaggedBefore.length === 0, `Assistant loaded before tap: ${flaggedBefore.join(", ")}`);

      await page.click('button[aria-label="Open Echo.Z assistant"]');
      await page.waitForFunction(
        () => performance.getEntriesByType("resource").some((entry) => /VirtualAssistant|sprite-/i.test(entry.name)),
        { timeout: 10000 },
      );
      await page.waitForSelector('img[alt="Virtual Assistant Sprite"]', { timeout: 10000 });

      const after = await collectPageState(page);
      const loadedAfterTap = matchingAssets(after.resourceUrls, [
        /VirtualAssistant/i,
        /sprite-/i,
      ]);

      assert(
        loadedAfterTap.some((name) => /VirtualAssistant/i.test(name)),
        "Assistant chunk did not load after tap",
      );
      assert(
        loadedAfterTap.some((name) => /sprite-/i.test(name)),
        "Assistant sprite did not load after tap",
      );
      assertNoRuntimeErrors(errors);

      return {
        beforeTap: flaggedBefore,
        afterTap: loadedAfterTap,
      };
    },
  },
  {
    name: "hash navigation renders work without assistant",
    run: async (page, errors) => {
      await visitMobileHome(page, "/#work");
      await page.waitForSelector("#work", { timeout: 10000 });

      const state = await collectPageState(page);
      const assistantAssets = matchingAssets(state.resourceUrls, [
        /VirtualAssistant/i,
        /sprite-/i,
      ]);
      const workAssets = matchingAssets(state.resourceUrls, [
        /HomeWorkSection/i,
        /portfolioData/i,
      ]);

      assert(workAssets.length > 0, "Hash navigation did not unlock the work section assets");
      assert(assistantAssets.length === 0, `Assistant loaded during hash navigation: ${assistantAssets.join(", ")}`);
      assertNoRuntimeErrors(errors);

      return {
        workAssets,
        assistantAssets,
      };
    },
  },
  {
    name: "scroll intent unlocks deferred homepage content",
    run: async (page, errors) => {
      await visitMobileHome(page);
      const before = await collectPageState(page);
      const flaggedBefore = matchingAssets(before.resourceUrls, INITIAL_MOBILE_BLOCKLIST);

      assert(flaggedBefore.length === 0, `Before scroll loaded blocked assets: ${flaggedBefore.join(", ")}`);

      await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 2, behavior: "instant" }));
      await page.waitForFunction(
        () => performance.getEntriesByType("resource").some((entry) => /HomeFeaturedWork|HomeWorkSection|portfolioData/i.test(entry.name)),
        { timeout: 10000 },
      );

      const after = await collectPageState(page);
      const unlockedAssets = matchingAssets(after.resourceUrls, [
        /HomeFeaturedWork/i,
        /HomeWorkSection/i,
        /portfolioData/i,
      ]);
      const assistantAssets = matchingAssets(after.resourceUrls, [
        /VirtualAssistant/i,
        /sprite-/i,
      ]);

      assert(unlockedAssets.length > 0, "Scroll did not unlock deferred homepage assets");
      assert(assistantAssets.length === 0, `Assistant loaded during scroll: ${assistantAssets.join(", ")}`);
      assertNoRuntimeErrors(errors);

      return {
        unlockedAssets,
        assistantAssets,
      };
    },
  },
  {
    name: "project detail routes survive repeated navigation",
    run: async (page, errors) => {
      const visited = [];

      for (let cycle = 0; cycle < 2; cycle += 1) {
        for (const path of CRITICAL_PROJECT_ROUTES) {
          await page.goto(scenarioUrl(path), {
            waitUntil: "networkidle2",
            timeout: 30000,
          });
          await page.waitForSelector("main", { timeout: 10000 });
          await delay(900);
          await assertImagesHealthy(page);

          const state = await collectPageState(page);
          const pageText = await page.evaluate(() => document.body.innerText);
          assert(state.mainRendered, `${path} did not render main content`);
          assert(!/Data Corrupted|could not be retrieved/i.test(pageText), `${path} rendered missing-project state`);
          visited.push(path);
        }
      }

      assertNoRuntimeErrors(errors);

      return {
        visits: visited.length,
        uniqueRoutes: unique(visited).length,
      };
    },
  },
  {
    name: "project OG cards render uniquely",
    run: async (_page, errors) => {
      const metas = PROJECT_OG_ROUTES.map((route) => resolveOGMeta(route));
      const signatures = metas.map((meta) => meta.signature);
      const colors = metas.map((meta) => meta.color);
      const rendered = [];

      assert(new Set(signatures).size === PROJECT_OG_ROUTES.length, "Project OG signatures are not unique");
      assert(colors.every((color) => /^#[0-9a-f]{6}$/i.test(color)), "Project OG colors must be concrete hex values");

      for (const route of PROJECT_OG_ROUTES) {
        rendered.push(await renderOgPreview(route));
      }

      assertNoRuntimeErrors(errors);

      return {
        rendered,
        signatures,
      };
    },
  },
];

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const results = [];

  try {
    for (const scenario of scenarios) {
      results.push(await runScenario(browser, scenario.name, scenario.run));
    }
  } finally {
    await browser.close().catch(() => {});
  }

  const failures = results.filter((result) => result.status === "FAIL");
  console.log(JSON.stringify({ baseUrl: BASE_URL, results }, null, 2));

  if (failures.length > 0) {
    process.exitCode = 1;
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
