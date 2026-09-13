import {test, expect} from "@playwright/test"
import {RegisterPage} from "../pages/RegisterPage";
import {HomePage} from "../pages/HomePage";
import {InfoPage} from "../pages/InfoPage";
import {CartPage} from "../pages/CartPage";
import { dataProvider } from "../utils/dataProvider";
import { TestConfig } from "../test.config";
import { RegistrationResultsPage } from "../pages/RegistrationResultsPage";
import { generateRandomUserData } from "../utils/generateRandomUserData";
import { LoginPage } from "../pages/LoginPage";


/* This file contains tests related to Registration module or feature of AUT */


test.describe('Login Regression Suite', () => {

       // Fetch and parse test data once per suite run
  const rawData = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "Login"));
  const testData = JSON.parse(rawData);

  let loginPage: LoginPage;
  let homePage: HomePage;
  let cartPage: CartPage;


  //BeforeEach hook to set up the test environment for each test case
  test.beforeEach(async ({ page }) => {

    // Elevate timeouts globally or suite-wide instead of manual test overrides
    test.setTimeout(100000); 
    
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    cartPage = new CartPage(page);

    await page.goto(TestConfig.getTestURL());
    await loginPage.openLoginPage();
  });



  /* TEST 1:
      TC ID	            E2E Scenario	                                Expected Result	               Priority
      LOGIN_E2E_001	    Login using valid registered credentials	    User successfully logs in	     P0
  */
  test('LOGIN_E2E_001 - Login using valid registered credentials @Regression ',async ({page})=>{

      // Directly target the single record you need from your array
      const record = testData.find((data: any) => data.TestID === "REG_E2E_001");
       expect(record).toBeDefined();

       const { Email, Password, ProductName } = record;

       await loginPage.enterEmail(Email);
     
       await loginPage.enterPassword(Password);
    
       await loginPage.clickSignInButton();

       await page.waitForTimeout(5000);

       await expect.soft(await page.title()).toEqual("Demo Web Shop");

  })


  /* TEST 2:
     TC ID	            E2E Scenario	                Expected Result	                          Priority
     LOGIN_E2E_002	Login with incorrect password	    Login fails with appropriate error	      P0
  */
  test('LOGIN_E2E_002 - Login with incorrect password  @Regression ',async ({page})=>{
    
    await loginPage.openLoginPage();

    // Directly target the single record you need from your array
    const record = testData.find((data: any) => data.TestID === "REG_E2E_002");
    expect(record).toBeDefined();

    loginPage = new LoginPage(page);

    const { Email, Password, ProductName } = record;
    await loginPage.enterEmail(Email);
  
    await loginPage.enterPassword(Password);
    
    await loginPage.clickSignInButton();

    await page.waitForTimeout(5000);

    console.log("Login failed with error message: " + await loginPage.getFailedLoginError());

    await expect(await loginPage.getFailedLoginError()).toEqual("Login was unsuccessful. Please correct the errors and try again.");

  })



  /* TEST 3:
      TC ID	            E2E Scenario	                  Expected Result	                     Priority
      LOGIN_E2E_003	    Login with unregistered email	  Login fails with appropriate error	  P1
  */
  test('LOGIN_E2E_003 - Login with unregistered email @Sanity ',async ({page})=>{
    
    //Go to Login page for further steps 
    await loginPage.openLoginPage();

    // Directly target the single record you need from your array
    const record = testData.find((data: any) => data.TestID === "REG_E2E_003");
    expect(record).toBeDefined();

    const { Email, Password, ProductName } = record;

    await loginPage.enterEmail(Email);

    await loginPage.enterPassword(Password);
    
    await loginPage.clickSignInButton();

    await page.waitForTimeout(3000);

    console.log("Login failed with error message: " + await loginPage.getFailedLoginError());

    await expect(await loginPage.getFailedLoginError()).toEqual("Login was unsuccessful. Please correct the errors and try again.");

  })

  /* TEST 4:
     TC ID	            E2E Scenario	                                Expected Result	                    Priority
     LOGIN_E2E_004	Login with blank credentials	Required-field validation is displayed	P1
  */
  test('LOGIN_E2E_004 - Login with blank credentials',async ({page})=>{
  
    await loginPage.openLoginPage();
       
    await loginPage.clickSignInButton();

    await page.waitForTimeout(3000);

    console.log("Login failed with error message: " + await loginPage.getFailedLoginError());

    await expect(await loginPage.getFailedLoginError()).toEqual("Login was unsuccessful. Please correct the errors and try again.");

  })



  /* TEST 5
    TC ID	            E2E Scenario	                                Expected Result	                        Priority
    LOGIN_E2E_005    	Login and navigate to account page	                Account page opens for logged-in user	P0
  */

  test('LOGIN_E2E_005 - Login and navigate to account page @Sanity',async ({page})=>{
    
    //Go to Login page for further steps 
    await loginPage.openLoginPage();

    // Directly target the single record you need from your array
    const record = testData.find((data: any) => data.TestID === "REG_E2E_005");
    expect(record).toBeDefined();
    
    const { Email, Password, ProductName } = record;

    await loginPage.enterEmail(Email);

    await loginPage.enterPassword(Password);
    
    await loginPage.clickSignInButton();

    await page.waitForTimeout(3000);

    const homePage = new HomePage(page);

    await homePage.openUserInfo();

    await page.waitForTimeout(3000);

    const infoPage = new InfoPage(page);

    await expect(await page.title()).toEqual(await infoPage.getPageTitle());

  })


  /* TEST 6
   TC ID	            E2E Scenario	         Expected Result	                        Priority
   LOGIN_E2E_006	    Login and logout	     User is logged out successfully         	P0
  */
  test('LOGIN_E2E_006 - Login and logout',async ({page})=>{
    
    //Go to Login page for further steps 
    await loginPage.openLoginPage();

    // Directly target the single record you need from your array
    const record = testData.find((data: any) => data.TestID === "REG_E2E_006");
    expect(record).toBeDefined();
    
    const { Email, Password, ProductName } = record;

    await loginPage.enterEmail(Email);

    await loginPage.enterPassword(Password);
    
    await loginPage.clickSignInButton();

    await page.waitForTimeout(3000);

    const homePage = new HomePage(page);

    await homePage.performLogout();
 
    await page.waitForTimeout(3000);

    await expect(await page.title()).toEqual("Demo Web Shop");

  })

});