// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   use: {
//     headless: false,
//     //viewport: { width: 1280, height: 800 },
//     viewport: { width: 1280, height: 1000 },
//     userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
//     locale: 'es-ES',
//     ignoreHTTPSErrors: true,
//     screenshot: 'on',
//     video: 'off',
//     extraHTTPHeaders: {
//       'accept-language': 'es-ES,es;q=0.9',
//     },
//     launchOptions: {
//       args: ['--disable-http2']
//     }
//   },
//   projects: [
//     {
//       name: 'chrome',
//       use: {
//         browserName: 'chromium',
//       },
//     },
//   ],
//   reporter: [['html', { outputFolder: 'reportHTML' }]],
//   timeout: 60000,
//   testDir: './tests',
//   outputDir: 'test-results',
//   snapshotDir: './snapshots'
// });

// pruebas en github actions

import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.proxy-env')) {
  dotenv.config({ path: '.proxy-env' });
} else {
  dotenv.config(); // fallback
}

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./globalSetup'),
  testDir: './tests',
  timeout: 60000,
  reporter: 'html',
  outputDir: 'test-results',
  use: {
    headless: true,
    screenshot: 'on',
    ignoreHTTPSErrors: true,
    launchOptions: {
      args: [
        '--disable-http2',
        '--disable-blink-features=AutomationControlled',
        '--no-sandbox',
        '--disable-infobars',
        '--disable-dev-shm-usage',
        '--disable-extensions',
        '--start-maximized'
      ]
    }
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        channel: 'chrome',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
        viewport: { width: 1700, height: 1400 },
        locale: 'es-ES',
        extraHTTPHeaders: {
          'accept-language': 'es-ES,es;q=0.9',
        },
        video: 'on',
        proxy: process.env.SELECTED_PROXY
          ? { server: process.env.SELECTED_PROXY }
          : undefined,
      },
    },
  ],
});