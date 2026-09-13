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


test.describe('Registration E2E Regression Suite', () => {

  // Fetch and parse test data once per suite run
  const rawData = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "Register"));
  const testData = JSON.parse(rawData);

  let loginPage: LoginPage;
  let homePage: HomePage;
  let cartPage: CartPage;
  let registerPage: RegisterPage;
  let registerresultpg: RegistrationResultsPage;

  //BeforeEach hook to set up the test environment for each test case
  test.beforeEach(async ({ page }) => {
    
     // Elevate timeouts globally or suite-wide instead of manual test overrides
    test.setTimeout(100000); 
    
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    registerPage = new RegisterPage(page);
    registerresultpg = new RegistrationResultsPage(page);

    await page.goto(TestConfig.getTestURL());
  });



/* TEST 1:
TC ID	    E2E Scenario	                                Expected Result	                                            Priority
REG_E2E_001	Register a new user with valid details	User account is created successfully and confirmation is displayed	  P0
*/
test('REG_E2E_001 - Register a new user with valid details @Regression',async ({page})=>{

   //Go to Registration page for further steps 
    await homePage.openRegistrationPage();

    await registerPage.selectGender(generateRandomUserData.getGender());

    await registerPage.enterFirstName(generateRandomUserData.getFirstName());
    await registerPage.enterLastName(generateRandomUserData.getLastName());

    await registerPage.enterEmail(generateRandomUserData.getEmail());

    await registerPage.enterPassword("password1");

    await registerPage.enterConfirmPassword("password1");

    await registerPage.SubmitRegistration();
         
    await expect.soft(await registerresultpg.getPageTitle(page)).toEqual("Demo Web Shop. Register");
         
    await expect.soft(await registerresultpg.getSuccessMessage()).toBeVisible();
})

/* TEST 2:
TC ID	    E2E Scenario	                                           Expected Result	                                            Priority
REG_E2E_002	Register with valid details and then navigate to Login    	User can navigate to Login after registration	P0

*/
test('REG_E2E_002 - Register with valid details and then navigate to Login @Sanity',async ({page})=>{
     
    await homePage.openRegistrationPage();

    // Read test data from JSON file

         await registerPage.selectGender(generateRandomUserData.getGender());

         await registerPage.enterFirstName(generateRandomUserData.getFirstName());
         await registerPage.enterLastName(generateRandomUserData.getLastName());

         await registerPage.enterEmail(generateRandomUserData.getEmail());

         await registerPage.enterPassword("password1");

         await registerPage.enterConfirmPassword("password1");

         await registerPage.SubmitRegistration();

    await expect.soft(await registerresultpg.getPageTitle(page)).toEqual("Demo Web Shop. Register");

    await expect.soft(await registerresultpg.getSuccessMessage()).toBeVisible();

    //Navigate to Login page after successful registration 
    await registerresultpg.clickLogout();
     
    await homePage.openLoginPage();

    await expect.soft(page).toHaveTitle("Demo Web Shop. Login");
})



/* Test 3:  
TC ID	    E2E Scenario	                                Expected Result	                                            Priority
REG_E2E_003	Register and verify user is logged in after registration	User account/session is available as expected	P0


*/
test('REG_E2E_003 - Register and verify user is logged in after registration',async ({page})=>{
       
    await homePage.openRegistrationPage();
    
     let emailValue;

     await registerPage.selectGender(generateRandomUserData.getGender());

     await registerPage.enterFirstName(generateRandomUserData.getFirstName());
     await registerPage.enterLastName(generateRandomUserData.getLastName());

     emailValue=generateRandomUserData.getEmail();

     await registerPage.enterEmail(emailValue);

     await registerPage.enterPassword("password1");

     await registerPage.enterConfirmPassword("password1");

     await registerPage.SubmitRegistration();

     await expect.soft(await registerresultpg.getPageTitle(page)).toEqual("Demo Web Shop. Register");

     await expect.soft(await registerresultpg.getSuccessMessage()).toBeVisible();

     // Verify user is logged in after registration 
     const loggedInUserName = await registerresultpg.getLoggedInUserName();

     await expect.soft(loggedInUserName).toEqual(emailValue);
     
})

/* Test 4:  
TC ID	       E2E Scenario	                                Expected Result	                                            Priority
REG_E2E_004	  Register with existing email address    Error message for duplicate email is displayed	                      P0

*/

test('REG_E2E_004 - Register with existing email address',async ({page})=>{
       
    await homePage.openRegistrationPage();

     // Directly target the single record you need from your array
     const record = testData.find((data: any) => data.TestID === "REG_E2E_004");
     expect(record).toBeDefined();

     const { TestID, gender, FirstName, LastName, Email, Password, ConfirmPassword } = record;
     
     await registerPage.selectGender(gender);

     await registerPage.enterFirstName(FirstName);
     await registerPage.enterLastName(LastName);

     await registerPage.enterEmail(Email);

     await registerPage.enterPassword(Password);

     await registerPage.enterConfirmPassword(ConfirmPassword);

     await registerPage.SubmitRegistration();
       
     await expect.soft(await registerPage.getRegisterErrorAlreadyExists()).toEqual("The specified email already exists");

})



/* Test 5:  
REG_E2E_005	Register with mismatched passwords	Registration is prevented	P1

*/
test('REG_E2E_005 - Register with mismatched passwords',async ({page})=>{
       
        
    await homePage.openRegistrationPage();

     // Directly target the single record you need from your array
     const record = testData.find((data: any) => data.TestID === "REG_E2E_005");
     expect(record).toBeDefined();

     const { TestID, gender, FirstName, LastName, Email, Password, ConfirmPassword } = record; 
         await registerPage.selectGender(gender);

         await registerPage.enterFirstName(FirstName);
         await registerPage.enterLastName(LastName);

         await registerPage.enterEmail(Email);

         await registerPage.enterPassword(Password);

         await registerPage.enterConfirmPassword(ConfirmPassword);

         await registerPage.SubmitRegistration();

    
    await expect.soft(await registerPage.getPasswordMismatchError()).toEqual("The password and confirmation password do not match.");
 
})


/* Test 6:  
REG_E2E_006	Register with invalid email	Registration is prevented with validation message	P1
*/
test('REG_E2E_006 - Register with invalid email',async ({page})=>{
       
         
    await homePage.openRegistrationPage();

     // Directly target the single record you need from your array
     const record = testData.find((data: any) => data.TestID === "REG_E2E_006");
     expect(record).toBeDefined();

     const { TestID, gender, FirstName, LastName, Email, Password, ConfirmPassword } = record; 
            await registerPage.selectGender(gender);

            await registerPage.enterFirstName(FirstName);
            await registerPage.enterLastName(LastName);

            await registerPage.enterEmail(Email);

            await registerPage.enterPassword(Password);

            await registerPage.enterConfirmPassword(ConfirmPassword);

            await registerPage.SubmitRegistration();

    console.log("Invalid email error message is : "+await registerPage.getInvalidEmailError());

    await expect.soft(await registerPage.getInvalidEmailError()).toEqual("Wrong email");

})

})