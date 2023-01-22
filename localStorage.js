const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, userDataDir: 'chrome-data-dir'});
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});

  await page.goto('https:/example.com/');

  await page.waitForTimeout(10000);

  const localStorage = await page.evaluate(() => localStorage.getItem("keyToGet"));
  console.log(localStorage);

  await browser.close();
})();
