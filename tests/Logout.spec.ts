import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import {HomePage} from "../pages/HomePage";
import { dataProvider } from "../utils/dataProvider";
import { TestConfig } from "../test.config";
import { CartPage } from "../pages/CartPage";

test.describe('Logout process E2E Regression Suite', () => {

  // Fetch and parse test data once per suite run
  const rawData = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "Login"));
  const testData = JSON.parse(rawData);

  let loginPage: LoginPage;
  let homePage: HomePage;
  let cartPage: CartPage;

  //BeforeEach hook to set up the test environment for each test case
  test.beforeEach(async ({ page }) => {
    // Elevate timeouts globally or suite-wide instead of manual test overrides
    test.setTimeout(90000); 
    
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    cartPage = new CartPage(page);

    await page.goto(TestConfig.getTestURL());
    await loginPage.openLoginPage();
  });


    /*
    TC ID	         E2E Scenario	       Expected Result	                     Priority
     LOGOUT_E2E_001	Login → Logout	       User is successfully logged out	     P0
    */

    test('LOGOUT_E2E_001 - Login → Logout @Regression @Sanity',async ({page})=>{
       
        // Directly target the single record you need from your array
        const record = testData.find((data: any) => data.TestID === "REG_E2E_001");
        expect(record).toBeDefined();

        const { Email, Password, ProductName } = record;

        await loginPage.enterEmail(Email);
        await loginPage.enterPassword(Password);
        await loginPage.clickSignInButton();
   
        homePage = new HomePage(page);

        expect(await homePage.isLogoutLinkVisible()).toBe(true);

        await page.waitForTimeout(3000);
    
        await homePage.performLogout();

        await page.waitForTimeout(3000);

        expect(await homePage.isLogoutLinkVisible()).toBe(false);

        await page.waitForTimeout(3000);
    });

/*
TC ID	         E2E Scenario	            Expected Result	                                                           Priority
LOGOUT_E2E_002	Logout → Open My Account	User is redirected/denied access according to application behavior	       P0
*/
test('LOGOUT_E2E_002 - Logout → Open My Account',async ({page})=>{

    // Directly target the single record you need from your array
    const record = testData.find((data: any) => data.TestID === "REG_E2E_001");
    expect(record).toBeDefined();
    
    const { Email, Password, ProductName } = record;

    await loginPage.enterEmail(Email);
    await loginPage.enterPassword(Password);
    await loginPage.clickSignInButton();
           
    expect(await homePage.isLogoutLinkVisible()).toBe(true);

    await page.waitForTimeout(3000);
    
    await homePage.performLogout();

    await page.waitForTimeout(3000);

    await homePage.clickMyAccountLink();

    expect(await page.url()).not.toContain("https://demowebshop.tricentis.com/customer/info");

    await page.waitForTimeout(3000);

});

/*
TC ID	         E2E Scenario	            Expected Result	                                                           Priority
LOGOUT_E2E_004	 Logout → Login again	      User can authenticate successfully                                        	P0

*/

    test('LOGOUT_E2E_003 - Logout → Login again @Regression ',async ({page})=>{
     // Directly target the single record you need from your array
     const record = testData.find((data: any) => data.TestID === "REG_E2E_001");
     expect(record).toBeDefined();
    
     const { Email, Password, ProductName } = record;

     //Go to Login page for further steps 
     await loginPage.openLoginPage();

     await loginPage.enterEmail(Email);
     await loginPage.enterPassword(Password);
     await loginPage.clickSignInButton();
 
     expect(await homePage.isLogoutLinkVisible()).toBe(true);
    
     await homePage.performLogout();

     await page.waitForTimeout(3000);

    expect(await homePage.isLogoutLinkVisible()).toBe(false);

     await homePage.openLoginPage();
    
     await loginPage.enterEmail(Email);
     await loginPage.enterPassword(Password);
     await loginPage.clickSignInButton();

     await page.waitForTimeout(3000);

     await expect(await page.title()).toEqual("Demo Web Shop");

    });

});