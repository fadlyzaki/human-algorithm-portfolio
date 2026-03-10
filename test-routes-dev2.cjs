const puppeteer = require('puppeteer');

async function run() {
  let browser;
  try {
      browser = await puppeteer.launch({ headless: 'new' });
      const page = await browser.newPage();
      
      const routes = [
        '/',
        '/cv',
        '/work/filterme',
        '/thoughts'
      ];

      for (const route of routes) {
          console.log(`Navigating to ${route}`);
          await page.goto(`http://localhost:5173${route}`, { waitUntil: 'load' });
          await new Promise(r => setTimeout(r, 1000));
          const html = await page.evaluate(() => document.body.innerHTML);
          console.log(`   Length: ${html.length}, Contains 404: ${html.includes('404')}`);
      }
  } catch (e) {
      console.error(e);
  } finally {
      if (browser) await browser.close();
      process.exit(0);
  }
}
run();
