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
import { defineConfig, devices } from '@playwright/test';

if (fs.existsSync('.proxy-env')) {
  console.log("el file .proxy-wnv existe: ", process.env.SELECTED_PROXY);
} else {
  dotenv.config();
  console.log("El file .proxy-env NO EXISTE: ", process.env.SELECTED_PROXY);
}

console.log("Proxy enviroment version 2: ", process.env.SELECTED_PROXY);

export default defineConfig({
  //globalSetup: require.resolve('./globalSetup'),
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
        proxy: {
          server: 'socks4://187.157.30.202:4153'
        }
      },
    },
  ],
});