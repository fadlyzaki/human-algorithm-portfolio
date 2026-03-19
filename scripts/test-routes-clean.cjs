const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const routes = [
    '/',
    '/cv',
    '/work/filterme',
    '/thoughts',
    '/thoughts/system-manifesto'
  ];

  for (const route of routes) {
    try {
      await page.goto(`http://localhost:5173${route}`, { waitUntil: 'load', timeout: 5000 });
      const text = await page.evaluate(() => document.body.innerText);
      if (text.includes('404') && text.includes('System Offline')) {
         console.log(`❌ BROKEN: ${route}`);
      } else {
         console.log(`✅ OK: ${route}`);
      }
    } catch (e) {
      console.log(`⚠️ TIMEOUT OR ERR: ${route}`);
    }
  }
  
  await browser.close();
  process.exit(0);
}
run();
