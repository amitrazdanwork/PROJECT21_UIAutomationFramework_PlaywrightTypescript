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


test.describe('Product Search E2E Regression Suite', () => {

  // Fetch and parse test data once per suite run
  const rawData = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "ProductSearch"));
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



/* This file contains tests related to Search Product or Product Search module or feature of AUT */


  /* TEST 1:
    TC ID	            E2E Scenario	                                Expected Result	                Priority
    SEARCH_E2E_001	    Search for an existing product                	Matching product is displayed	P0
  */
  test('Product Search - Search for an existing product @Regression',async ({page})=>{
     
     //Go to Login page for further steps 
     await loginPage.openLoginPage();

     let flag=false;

     // Directly target the single record you need from your array
     const record = testData.find((data: any) => data.TestID === "REG_E2E_001");
     expect(record).toBeDefined();

     const { TestID,  Email, Password, ProductName } = record;
      
     await loginPage.enterEmail(Email);
     await loginPage.enterPassword(Password);
    
     await loginPage.clickSignInButton(); 
           
     await page.waitForTimeout(5000); 
           
     await expect.soft(await page.title()).toEqual("Demo Web Shop");
     
     await homePage.EnterItemInSearchBox(ProductName);
           
     await homePage.clickSearchSubmitButton();
           
     const searchResults = await (await homePage.getAllSearchResults()).allInnerTexts();

     if(searchResults.includes(ProductName)) {
                  flag=true;
     }

   await expect.soft(flag).toBeTruthy();

  })

/* TEST 2:

TC ID	            E2E Scenario	                                     Expected Result	                   Priority
SEARCH_E2E_002	    Search using partial product name	                 Relevant products are displayed    	P1

*/

test('Product Search - Search using partial product name',async ({page})=>{

    // Directly target the single record you need from your array
    const record = testData.find((data: any) => data.TestID === "REG_E2E_002");
    expect(record).toBeDefined();

    const { TestID,  Email, Password, ProductName } = record;
     
    await loginPage.openLoginPage();

    let flag=false;

    await loginPage.enterEmail(Email);

    await loginPage.enterPassword(Password);
    
    await loginPage.clickSignInButton(); 
           
    await page.waitForTimeout(5000); 
           
    await expect.soft(await page.title()).toEqual("Demo Web Shop");
           
    await homePage.EnterItemInSearchBox(ProductName);
           
    await homePage.clickSearchSubmitButton();
           
    const searchResults = await (await homePage.getAllSearchResults()).allInnerTexts();

    console.log("Search Results are : "+searchResults);
           
    if (searchResults.every(result => result.includes("Health"))) {
        flag = true;
    }

           // NOTE: The above condition is used to check if all of the search results contain the partial product name "Health".

        //    Why this works.
        //    every() loops through each item in the array.
        //    result.includes("Health") checks if the current item (e.g., "Health Book") contains the substring "Health".

   await expect.soft(flag).toBeTruthy();

})


/* TEST 3:

TC ID	            E2E Scenario	                                     Expected Result	                    Priority
SEARCH_E2E_003	     Search using non-existing product	                No-result state/message is displayed	P1

*/
test('Product Search - Search using non-existing product @Sanity',async ({page})=>{

     // Directly target the single record you need from your array
     const record = testData.find((data: any) => data.TestID === "REG_E2E_003");
     expect(record).toBeDefined();

     const { TestID,  Email, Password, ProductName } = record;

     await loginPage.openLoginPage();

     let flag=false;

     await loginPage.enterEmail(Email);

     await loginPage.enterPassword(Password);
    
     await loginPage.clickSignInButton(); 
           
     await page.waitForTimeout(5000); 
           
     await expect.soft(await page.title()).toEqual("Demo Web Shop");
           
     await homePage.EnterItemInSearchBox(ProductName);
           
     await homePage.clickSearchSubmitButton();
           
     const searchResults = await (await homePage.getAllSearchResults()).allInnerTexts();

     console.log("Search Results are : "+searchResults);
           
     if (searchResults.length === 0 && (await (await homePage.getNoProductFoundMsg()).innerText()) === "No products were found that matched your criteria.") {
          console.log("No products were found that matched your criteria.");
          flag = true;
     }

   await expect.soft(flag).toBeTruthy();

})


/* TEST 4:

TC ID	             E2E Scenario	                                     Expected Result	                       Priority
SEARCH_E2E_004	        Search and open product from results             Correct product details page opens	   P0
*/

  test('Product Search - Search and open product from results @Sanity',async ({page})=>{
   
    // Directly target the single record you need from your array
    const record = testData.find((data: any) => data.TestID === "REG_E2E_004");
    expect(record).toBeDefined();

    const { TestID,  Email, Password, ProductName } = record;

    //Go to Login page for further steps 
    await loginPage.openLoginPage();

    let flag=false;

    await loginPage.enterEmail(Email);

    await loginPage.enterPassword(Password);
    
    await loginPage.clickSignInButton(); 
           
    await page.waitForTimeout(5000); 
           
    await expect.soft(await page.title()).toEqual("Demo Web Shop");
           
    await page.waitForTimeout(3000);

    await homePage.EnterItemInSearchBox(ProductName);
           
    await homePage.clickSearchSubmitButton();
           
    const searchResults = await (await homePage.getAllSearchResults()).all();

    await page.waitForTimeout(3000);

    for (const result of searchResults) {   

     const resultText = await result.locator("h2 a").innerText();

     const productPrice = await result.locator("div.details div.add-info span").innerText();
                     
     await result.click();  //Opens product details page

     await page.waitForTimeout(2000);

     const productDetailsPageItemName = await page.locator("div.product-name h1").innerText();

     const productDetailsPageItemPrice = await page.locator("div.product-price span").innerText();

     if (resultText === productDetailsPageItemName && productPrice === productDetailsPageItemPrice) {
          console.log("Product details page opened correctly for product: " + resultText);
          flag = true;
     }else
          break;
   }
   
   await page.waitForTimeout(3000);

   await page.goBack();  //Go back to search results page

   await page.waitForTimeout(3000);

   console.log("Flag = "+flag);  
         
   await expect(flag).toBeTruthy();

 }) 


/* TEST 5:
TC ID	             E2E Scenario	                                     Expected Result	                       Priority
SEARCH_E2E_005	        Search product and add it to cart from results	       Correct product is added to cart	        P0
*/

test('Product Search - Search and open product from results',async ({page})=>{
     
    // Directly target the single record you need from your array
    const record = testData.find((data: any) => data.TestID === "REG_E2E_005");
    expect(record).toBeDefined();

    const { TestID,  Email, Password, ProductName } = record;

    //Go to Login page for further steps 
    await loginPage.openLoginPage();

    let flag=false;

    await loginPage.enterEmail(Email);

    await loginPage.enterPassword(Password);
    
    await loginPage.clickSignInButton(); 
           
    await page.waitForTimeout(5000); 
           
    await expect.soft(await page.title()).toEqual("Demo Web Shop");
           
    await page.waitForTimeout(3000);

    const homePage = new HomePage(page);
           
    await homePage.EnterItemInSearchBox(ProductName);
           
    await homePage.clickSearchSubmitButton();
           
    const searchResults = await (await homePage.getAllSearchResults()).all();

     await page.waitForTimeout(3000);

     for (const result of searchResults) {   

          const resultText = await result.locator("h2 a").innerText();

          const productPrice = await result.locator("div.details div.add-info span").innerText();
                     
          await result.click();  //Opens product details page

          await page.waitForTimeout(2000);

          await page.locator("div.add-to-cart input[value='Add to cart']").click();  //Click on Add to Cart button

          await page.waitForTimeout(3000);

          await page.locator("div.header-links a.ico-cart").click(); //Click on Shopping Cart link

          await page.waitForTimeout(3000);

          const cartItems = await (await cartPage.getSelectedItems()).allInnerTexts();

          if (cartItems.some(item => item.includes(resultText))) {
               console.log("Product added to cart correctly for product: " + resultText);
               flag = true;
          }else{
               flag=false;
               break;
          }
                       

          await page.waitForTimeout(3000);

          await page.goBack();  //Go back to search results page

          await page.waitForTimeout(3000);

          await page.goBack();

          await page.waitForTimeout(3000);

          console.log("Flag = "+flag);  

    } 
    
   await expect(flag).toBeTruthy();

})

});