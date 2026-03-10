const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const routes = [
    '/',
    '/cv',
    '/work/filterme'
  ];

  for (const route of routes) {
    try {
      await page.goto(`http://localhost:5173${route}`, { waitUntil: 'domcontentloaded', timeout: 5000 });
      // Wait briefly for React to mount App.jsx over root
      await new Promise(r => setTimeout(r, 2000));
      const html = await page.evaluate(() => document.body.innerHTML);
      
      if (html.includes('404') && html.includes('Not Found')) {
         console.log(`❌ 404 DETECTED: ${route}`);
      } else {
         console.log(`✅ LOADED: ${route} (Length: ${html.length})`);
      }
    } catch (e) {
      console.log(`⚠️ TIMEOUT OR ERR: ${route}`);
    }
  }
  
  await browser.close();
  process.exit(0);
}
run();
