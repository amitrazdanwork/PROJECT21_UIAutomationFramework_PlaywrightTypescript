import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
    timeout: 30*1000, // Timeout for test = 300000 milli secs.
    testDir: './tests/',
    fullyParallel: true,
 //   retries: 1,                  // retry for failure case = once
    workers: 4,                  // Number of threads = 1

    //Use to specify different types of test reports generated at the very end.
    reporter:[
        ['html'],
        ['allure-playwright']
      //  ['dot'],
      //  ['list']
    ],
  
    use:{
        trace: 'on-first-retry',
        screenshot:"only-on-failure",
       // video: 'retain-on-failure',
        headless: false,
        viewport: {width: 1200, height: 800},
        ignoreHTTPSErrors: true,           // ignore certification related errors for HTTPS
        permissions: ['geolocation'] // Set necessary permissions for geolocation-based tests 
    },

    //grep: /@Regression|@Sanity/,   // for grouping purpose

    projects: [

        // Setting up browsers -> Chrome Browser
     /*   {
            name: 'chromium',
            use: {...devices['Desktop Chrome']}
        }*/

            {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge', // Tells Playwright to open actual Microsoft Edge
      },
    },
    ]

});
