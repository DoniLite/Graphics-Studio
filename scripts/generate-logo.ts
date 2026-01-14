import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import puppeteer from 'puppeteer';

const LOGO_DIR = path.resolve('src/logo');
const OUTPUT_DIR = path.resolve('dist/logos');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function run() {
  const files = fs.readdirSync(LOGO_DIR).filter((f) => f.endsWith('.tsx'));

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const file of files) {
    const name = path.basename(file, '.tsx');

    const Logo = (await import(path.join(LOGO_DIR, file))).default;

    // 1. Render React → SVG string
    const svgMarkup = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Logo)
    );


    const css = fs.readFileSync('dist/chunk-z0re4m9m.css', 'utf8');

    // 2. Render PNG via Puppeteer
    await page.setContent(`
      <html>
      <head>
        <style>${css}</style>
      </head>
        <body>
          ${svgMarkup}
        </body>
      </html>
    `);

    const svgElement = await page.$('svg');
    if (!svgElement) continue;

    const box = await svgElement.boundingBox();
    if (!box) continue;

    await page.setViewport({
      width: Math.ceil(box.width),
      height: Math.ceil(box.height),
      deviceScaleFactor: 2,
    });

    const pngPath = path.join(OUTPUT_DIR, `${name}.png`);

    await svgElement.screenshot({
      path: pngPath,
      omitBackground: true,
    });

    console.log(`✔ Generated ${name}.svg & ${name}.png`);
  }

  await browser.close();
}

run();
