import puppeteer from 'puppeteer';

export const downloadImage = async (url: string, logo: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const screenshot = await page.screenshot({
    encoding: 'base64',
    type: 'png',
    path: `../public/${logo}.png`,
  });
  await browser.close();
  return screenshot;
};
