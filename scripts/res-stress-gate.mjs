import puppeteer from "puppeteer";
import ogHandler from "../api/og.js";
import { resolveOGMeta } from "../api/_ogRoutes.js";

const BASE_URL = process.env.STRESS_BASE_URL || "http://127.0.0.1:4173/";
const IDLE_WAIT_MS = Number(process.env.STRESS_IDLE_WAIT_MS || 2500);
const MAX_LONG_TASK_MS = Number(process.env.STRESS_MAX_LONG_TASK_MS || 150);
const MAX_TOTAL_LONG_TASK_MS = Number(process.env.STRESS_MAX_TOTAL_LONG_TASK_MS || 500);
const MAX_CLS = Number(process.env.STRESS_MAX_CLS || 0.02);
const MAX_LCP_MS = Number(process.env.STRESS_MAX_LCP_MS || 1800);
const MAX_INTERACTION_MS = Number(process.env.STRESS_MAX_INTERACTION_MS || 120);

const MOBILE_VIEWPORT = {
  width: 390,
  height: 844,
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
};

const DESKTOP_VIEWPORT = {
  width: 1280,
  height: 900,
  deviceScaleFactor: 1,
  isMobile: false,
  hasTouch: false,
};

const INITIAL_MOBILE_BLOCKLIST = [
  /VirtualAssistant/i,
  /sprite-/i,
  /DraggablePhoto/i,
  /HomeFeaturedWork/i,
  /HomeWorkSection/i,
  /HomeSideProjects/i,
  /HomeAbout/i,
  /ChaosCanvas/i,
  /NexusAI/i,
  /SignalAI/i,
  /WorkforceAI/i,
  /CommerceAI/i,
  /EfficiencyAI/i,
];

const RECRUITER_CRITICAL_ROUTES = [
  "/",
  "/about",
  "/cv",
  "/side-projects",
  "/work/commerce",
  "/work/workforce",
  "/work/efficiency",
  "/case-study/stoqo-logistics",
  "/case-study/stoqo-sales",
  "/case-study/design-system-gudangada",
  "/thoughts",
  "/contact",
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

const assertLongTaskBudget = (state, label = "page") => {
  const longTaskSummary = (state.metrics.longTasks || []).join(", ");
  assert(
    state.maxLongTask <= MAX_LONG_TASK_MS,
    `${label}: max long task ${state.maxLongTask}ms exceeded ${MAX_LONG_TASK_MS}ms (tasks: ${longTaskSummary})`,
  );
  assert(
    state.totalLongTask <= MAX_TOTAL_LONG_TASK_MS,
    `${label}: total long tasks ${state.totalLongTask}ms exceeded ${MAX_TOTAL_LONG_TASK_MS}ms (tasks: ${longTaskSummary})`,
  );
};

const assertVitalsBudget = (state, label = "page") => {
  const cls = Number(state.metrics.cls || 0);
  const lcp = Number(state.metrics.lcp || 0);

  assert(cls <= MAX_CLS, `${label}: CLS ${cls.toFixed(4)} exceeded ${MAX_CLS}`);
  if (lcp > 0) {
    assert(lcp <= MAX_LCP_MS, `${label}: LCP ${lcp}ms exceeded ${MAX_LCP_MS}ms`);
  }
  assertLongTaskBudget(state, label);
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

const visitDesktopHome = async (page, path = "/") => {
  await page.setViewport(DESKTOP_VIEWPORT);
  await page.goto(scenarioUrl(path), {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  await page.waitForSelector("main", { timeout: 10000 });
  await delay(IDLE_WAIT_MS);
};

const measureSelectorInteraction = async (page, selector) =>
  page.evaluate((targetSelector) => {
    const target = document.querySelector(targetSelector);
    if (!target) throw new Error(`No element found for selector: ${targetSelector}`);

    const startedAt = performance.now();
    target.click();

    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        resolve(Math.round(performance.now() - startedAt));
      });
    });
  }, selector);

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
      assertVitalsBudget(state, "mobile home cold");

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
    name: "recruiter critical mobile routes stay inside RES budget",
    run: async (page, errors) => {
      const routeStates = [];

      for (const route of RECRUITER_CRITICAL_ROUTES) {
        await visitMobileHome(page, route);
        await assertImagesHealthy(page);

        const state = await collectPageState(page);
        const flagged = matchingAssets(state.resourceUrls, INITIAL_MOBILE_BLOCKLIST);
        const bodyText = await page.evaluate(() => document.body.innerText);

        assert(state.mainRendered, `${route} did not render main content`);
        assert(flagged.length === 0, `${route} loaded cold blocked assets: ${flagged.join(", ")}`);
        assert(!/Data Corrupted|could not be retrieved/i.test(bodyText), `${route} rendered missing-project state`);
        assertVitalsBudget(state, route);

        routeStates.push({
          route,
          scriptCount: state.scriptCount,
          maxLongTask: state.maxLongTask,
          totalLongTask: state.totalLongTask,
          lcp: state.metrics.lcp,
          cls: Number(state.metrics.cls.toFixed(4)),
        });
      }

      assertNoRuntimeErrors(errors);
      return { routeStates };
    },
  },
  {
    name: "mobile nav and primary CTA interactions stay responsive",
    run: async (page, errors) => {
      await visitMobileHome(page);

      const menuDuration = await measureSelectorInteraction(
        page,
        'button[aria-label="Open Menu"]',
      );
      assert(
        menuDuration <= MAX_INTERACTION_MS,
        `Menu interaction ${menuDuration}ms exceeded ${MAX_INTERACTION_MS}ms`,
      );

      const closeButton = await page.$('button[aria-label="Close Menu"]');
      if (closeButton) {
        const closeDuration = await measureSelectorInteraction(
          page,
          'button[aria-label="Close Menu"]',
        );
        assert(
          closeDuration <= MAX_INTERACTION_MS,
          `Menu close interaction ${closeDuration}ms exceeded ${MAX_INTERACTION_MS}ms`,
        );
      }

      const ctaDuration = await measureSelectorInteraction(
        page,
        'a[aria-label="View Featured Work and Portfolio"]',
      );
      assert(
        ctaDuration <= MAX_INTERACTION_MS,
        `Primary CTA interaction ${ctaDuration}ms exceeded ${MAX_INTERACTION_MS}ms`,
      );

      assertNoRuntimeErrors(errors);
      return { menuDuration, ctaDuration };
    },
  },
  {
    name: "assistant stays off mobile cold path",
    run: async (page, errors) => {
      await visitMobileHome(page);
      const state = await collectPageState(page);
      const assistantAssets = matchingAssets(state.resourceUrls, [
        /VirtualAssistant/i,
        /sprite-/i,
      ]);

      assert(assistantAssets.length === 0, `Assistant loaded on mobile cold path: ${assistantAssets.join(", ")}`);
      assert(
        !(await page.$('button[aria-label="Open Echo.Z assistant"]')),
        "Assistant launcher rendered on mobile cold path",
      );
      assertNoRuntimeErrors(errors);

      return {
        assistantAssets,
      };
    },
  },
  {
    name: "desktop assistant loads only after explicit tap",
    run: async (page, errors) => {
      await visitDesktopHome(page);
      await delay(10000);

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
