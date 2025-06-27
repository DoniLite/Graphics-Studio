import puppeteer from 'puppeteer';
import fs from 'node:fs';

export const downloadImage = async (htmlContent: string, logo: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const html = fs.readFileSync(htmlContent, {encoding: 'utf-8'});
  await page.setContent(html);
  const screenshot = await page.screenshot({
    encoding: 'base64',
    type: 'png',
    path: `../public/${logo}.png`,
  });
  await browser.close();
  return screenshot;
};
