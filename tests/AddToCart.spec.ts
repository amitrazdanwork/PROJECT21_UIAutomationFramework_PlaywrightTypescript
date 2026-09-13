import {test, expect} from "@playwright/test"
import {RegisterPage} from "../pages/RegisterPage";
import {HomePage} from "../pages/HomePage";
import {InfoPage} from "../pages/InfoPage";
import {CartPage} from "../pages/CartPage";
import {LoginPage} from "../pages/LoginPage";
import { dataProvider } from "../utils/dataProvider";
import { TestConfig } from "../test.config";
import { RegistrationResultsPage } from "../pages/RegistrationResultsPage";
import { generateRandomUserData } from "../utils/generateRandomUserData";

test.describe('Shopping Cart E2E Regression Suite', () => {

       // Fetch and parse test data once per suite run
  const rawData = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "AddToCart"));
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
TC ID	        E2E Scenario	           Expected Result	        Priority
CART_E2E_001	Add one product to cart	   Product appears in cart	P0

*/


  test('REG_E2E_001 - Add one product to cart @Regression', async ({ page }) => {
    // Directly target the single record you need from your array
    const record = testData.find((data: any) => data.TestID === "REG_E2E_001");
    expect(record).toBeDefined();

    const { Email, Password, ProductName } = record;

    // Login workflow
    await loginPage.enterEmail(Email);
    await loginPage.enterPassword(Password);
    await loginPage.clickSignInButton(); 
    
    // Web-first expectation automatically waits for title match
    await expect(page).toHaveTitle("Demo Web Shop");

    // Search operational steps
    await homePage.EnterItemInSearchBox(ProductName);
    await homePage.clickSearchSubmitButton();
    
    // Handle structural UI listings cleanly
    const searchResults = await page.locator("div.product-item").all();
    
    for (const result of searchResults) {   
      const productLink = result.locator("h2 a");
      const resultText = await productLink.innerText();
       
      await productLink.click(); // Opens item profile details page
      
      // Target elements reliably using attributes or exact names
      await page.locator("div.add-to-cart input[value='Add to cart']").click();
      
      // Go directly to the designated workflow link
      await page.locator("div.header-links a.ico-cart").click(); 
      
      // Target the container column elements inside your Cart POM
      const cartItems = await (await cartPage.getSelectedItems()).allInnerTexts();
      
      // Check if our freshly added item exists inside the cart array
      expect(cartItems.some(item => item.includes(resultText))).toBeTruthy();
      
      // Instead of brittle page.goBack() executions, return directly via search query URL
      await homePage.EnterItemInSearchBox(ProductName);
      await homePage.clickSearchSubmitButton();
    }

  });


/*
TC ID	        E2E Scenario	                     Expected Result	                      Priority
CART_E2E_002	   Add multiple different products	      All selected products appear in cart	   P0
*/

test('REG_E2E_002 - Add multiple products to cart @Sanity', async ({ page }) => {
    
     const record = testData.find((data: any) => data.TestID === "REG_E2E_002");
    expect(record).toBeDefined();

    const { Email, Password, ProductName } = record;

    await loginPage.enterEmail(Email);
    await loginPage.enterPassword(Password);
    await loginPage.clickSignInButton(); 
    
    await expect(page).toHaveTitle("Demo Web Shop");

    await homePage.EnterItemInSearchBox(ProductName);
    await homePage.clickSearchSubmitButton();
    
    const searchResults = await page.locator("div.product-item").all();

    for (const result of searchResults) {   
      const productLink = result.locator("h2 a");
      const resultText = await productLink.innerText();

      await productLink.click();  
      await page.locator("div.add-to-cart input[value='Add to cart']").click();
      
      await page.locator("div.header-links a.ico-cart").click();
      
      const cartItems = await (await cartPage.getSelectedItems()).allInnerTexts();
      expect(cartItems.some(item => item.includes(resultText))).toBeTruthy();

      // Return to search results smoothly without relying on navigation history cascades
      await homePage.EnterItemInSearchBox(ProductName);
      await homePage.clickSearchSubmitButton();
    }
  });




/*
TC ID	        E2E Scenario	                     Expected Result	                      Priority
CART_E2E_003	   Add same product multiple times	      Quantity/line items behave correctly	   P0
*/

test('REG_E2E_003 - Add same product multiple times',async ({page})=>{
        
     cartPage = new CartPage(page);
     loginPage = new LoginPage(page);

     let flag=false;

     let count=0;
  
     const record = testData.find((data: any) => data.TestID === "REG_E2E_002");
     expect(record).toBeDefined();

     const { Email, Password, ProductName } = record;
  
     await loginPage.enterEmail(Email);
     await loginPage.enterPassword(Password);
     await loginPage.clickSignInButton(); 

     await page.waitForTimeout(5000); 
             
     await expect.soft(await page.title()).toEqual("Demo Web Shop");
             
     await page.waitForTimeout(3000);
  
     homePage = new HomePage(page);
             
     await homePage.EnterItemInSearchBox(ProductName);
             
     await homePage.clickSearchSubmitButton();
             
     const searchResults = await (await homePage.getAllSearchResults()).all();

     await page.waitForTimeout(3000);
  
     for (const result of searchResults) {   
                         
          for(let i=0; i<=1; i++){
                    
              console.log("Inside for loop for search results");
               
              const resultText = await result.locator("h2 a").innerText();
  
               // const productPrice = await result.locator("div.details div.add-info span[class='price actual-price']").innerText();

               await result.locator("h2 a").click();  //Opens product details page
                        
               console.log("Clicked on product link for product: "+resultText);
               await page.locator("div.add-to-cart input[value='Add to cart']").click();  //Click on Add to Cart button
  
               await page.waitForTimeout(3000);
  
               await page.locator("div.header-links a.ico-cart").click(); //Click on Shopping Cart link
  
               await page.waitForTimeout(3000);
  
               const cartItems = await (await cartPage.getSelectedItems()).allInnerTexts();
  
               if (cartItems.some(item => item.includes(resultText))) {
                    console.log("Product added to cart correctly for product: " + resultText);
                    
                    flag = true;
                    count++;

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
  
     }
  
     await page.waitForTimeout(3000);
     
     await cartPage.openCartPage();

     await page.waitForTimeout(3000);
     
     await expect(flag).toBeTruthy();

     await page.waitForTimeout(3000);        
     
     await expect(count).toEqual(Number(await cartPage.getQuantityCount(1)));

})




  /*
   TC ID	        E2E Scenario	                     Expected Result	                      Priority
   CART_E2E_008	   Remove all products	                Empty-cart state is displayed	       P1

 */

 test('CART_E2E_008 - Remove all products',async ({page})=>{
     
     cartPage = new CartPage(page);

     let flag=false;

     let count=0;
  
     const record = testData.find((data: any) => data.TestID === "REG_E2E_008");
     expect(record).toBeDefined();

     const { Email, Password, ProductName } = record;
  
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

          await result.locator("h2 a").click();  //Opens product details page
                        
          console.log("Clicked on product link for product: "+resultText);
          await page.locator("div.add-to-cart input[value='Add to cart']").click();  //Click on Add to Cart button
  
          await page.waitForTimeout(3000);
  
          await page.locator("div.header-links a.ico-cart").click(); //Click on Shopping Cart link
  
          await page.waitForTimeout(3000);
  
          const cartItems = await (await cartPage.getSelectedItems()).allInnerTexts();
  
          if (cartItems.some(item => item.includes(resultText))) {
               console.log("Product added to cart correctly for product: " + resultText);
                             
               flag = true;
               count++;

          }else{
               flag=false;
               break;
          }
          await page.goBack();  //Go back to search results page
  
          await page.goBack();
       
     } 
      
     await cartPage.openCartPage();

     await cartPage.selectAllCheckboxes();

     await cartPage.clickUpdateCart();

     await page.waitForTimeout(3000);

     expect(await cartPage.isCartEmptyMessageDisplayed()).toBeTruthy();

 })

});