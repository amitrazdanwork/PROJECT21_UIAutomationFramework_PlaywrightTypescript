# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.ts >> REG_E2E_001 - Add one product to cart @Regression
- Location: tests\AddToCart.spec.ts:20:5

# Error details

```
Error: locator.innerText: Error: strict mode violation: locator('div.search-results div.product-item').first().locator('div.details div.add-info span') resolved to 2 elements:
    1) <span class="price old-price">27.00</span> aka getByText('27.00')
    2) <span class="price actual-price">10.00</span> aka getByText('10.00').nth(2)

Call log:
  - waiting for locator('div.search-results div.product-item').first().locator('div.details div.add-info span')

```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - generic [ref=f3e3]:
    - generic [ref=f3e4]:
      - link [ref=f3e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f3e7]
      - list [ref=f3e10]:
        - listitem [ref=f3e11]:
          - link "umeshkumar1@gmail.com" [ref=f3e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f3e13]:
          - link "Log out" [ref=f3e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f3e15]:
          - link "Shopping cart (1)" [ref=f3e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f3e17]: Shopping cart
            - generic [ref=f3e18]: (1)
        - listitem [ref=f3e19]:
          - link "Wishlist (0)" [ref=f3e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f3e21]: Wishlist
            - generic [ref=f3e22]: (0)
      - generic [ref=f3e24]:
        - status [ref=f3e25]
        - textbox [ref=f3e26]: Search store
        - button "Search" [ref=f3e27] [cursor=pointer]
    - list [ref=f3e29]:
      - listitem [ref=f3e30]:
        - link "Books" [ref=f3e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f3e32]:
        - link "Computers" [ref=f3e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f3e34]:
        - link "Electronics" [ref=f3e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f3e36]:
        - link "Apparel & Shoes" [ref=f3e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f3e38]:
        - link "Digital downloads" [ref=f3e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f3e40]:
        - link "Jewelry" [ref=f3e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f3e42]:
        - link "Gift Cards" [ref=f3e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f3e44]:
        - generic [ref=f3e45]:
          - strong [ref=f3e47]: Categories
          - list [ref=f3e49]:
            - listitem [ref=f3e50]:
              - link "Books" [ref=f3e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f3e52]:
              - link "Computers" [ref=f3e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f3e54]:
              - link "Electronics" [ref=f3e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f3e56]:
              - link "Apparel & Shoes" [ref=f3e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f3e58]:
              - link "Digital downloads" [ref=f3e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f3e60]:
              - link "Jewelry" [ref=f3e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f3e62]:
              - link "Gift Cards" [ref=f3e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f3e64]:
          - strong [ref=f3e66]: Manufacturers
          - list [ref=f3e68]:
            - listitem [ref=f3e69]:
              - link "Tricentis" [ref=f3e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f3e71]:
          - strong [ref=f3e73]: Newsletter
          - generic [ref=f3e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f3e77]
            - button "Subscribe" [ref=f3e79] [cursor=pointer]
      - generic [ref=f3e81]:
        - heading "Search" [level=1] [ref=f3e83]
        - generic [ref=f3e84]:
          - generic [ref=f3e86]:
            - generic [ref=f3e87]:
              - generic [ref=f3e88]:
                - generic [ref=f3e89]: "Search keyword:"
                - textbox "Search keyword:" [ref=f3e90]: Health Book
              - generic [ref=f3e91]:
                - checkbox "Advanced search" [ref=f3e92]
                - generic [ref=f3e93]: Advanced search
            - button "Search" [ref=f3e95] [cursor=pointer]
          - generic [ref=f3e96]:
            - generic [ref=f3e97]:
              - text: View as
              - combobox [ref=f3e98]:
                - option "Grid" [selected]
                - option "List"
            - generic [ref=f3e99]:
              - text: Sort by
              - combobox [ref=f3e100]:
                - option "Position" [selected]
                - 'option "Name: A to Z"'
                - 'option "Name: Z to A"'
                - 'option "Price: Low to High"'
                - 'option "Price: High to Low"'
                - option "Created on"
            - generic [ref=f3e101]:
              - text: Display
              - combobox [ref=f3e102]:
                - option "4"
                - option "8" [selected]
                - option "12"
              - text: per page
          - generic [ref=f3e106]:
            - link [ref=f3e108] [cursor=pointer]:
              - /url: /health
              - img "Picture of Health Book" [ref=f3e109]
            - generic [ref=f3e110]:
              - heading [level=2] [ref=f3e111]:
                - link "Health Book" [ref=f3e112] [cursor=pointer]:
                  - /url: /health
              - generic "551 review(s)" [ref=f3e113]
              - generic [ref=f3e116]:
                - generic [ref=f3e117]:
                  - generic [ref=f3e118]: "27.00"
                  - generic [ref=f3e119]: "10.00"
                - button "Add to cart" [ref=f3e121] [cursor=pointer]
  - generic [ref=f3e122]:
    - generic [ref=f3e123]:
      - generic [ref=f3e124]:
        - heading "Information" [level=3] [ref=f3e125]
        - list [ref=f3e126]:
          - listitem [ref=f3e127]:
            - link "Sitemap" [ref=f3e128] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f3e129]:
            - link "Shipping & Returns" [ref=f3e130] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f3e131]:
            - link "Privacy Notice" [ref=f3e132] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f3e133]:
            - link "Conditions of Use" [ref=f3e134] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f3e135]:
            - link "About us" [ref=f3e136] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f3e137]:
            - link "Contact us" [ref=f3e138] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f3e139]:
        - heading "Customer service" [level=3] [ref=f3e140]
        - list [ref=f3e141]:
          - listitem [ref=f3e142]:
            - link "Search" [ref=f3e143] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f3e144]:
            - link "News" [ref=f3e145] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f3e146]:
            - link "Blog" [ref=f3e147] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f3e148]:
            - link "Recently viewed products" [ref=f3e149] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f3e150]:
            - link "Compare products list" [ref=f3e151] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f3e152]:
            - link "New products" [ref=f3e153] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f3e154]:
        - heading "My account" [level=3] [ref=f3e155]
        - list [ref=f3e156]:
          - listitem [ref=f3e157]:
            - link "My account" [ref=f3e158] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f3e159]:
            - link "Orders" [ref=f3e160] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f3e161]:
            - link "Addresses" [ref=f3e162] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f3e163]:
            - link "Shopping cart" [ref=f3e164] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f3e165]:
            - link "Wishlist" [ref=f3e166] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f3e167]:
        - heading "Follow us" [level=3] [ref=f3e168]
        - list [ref=f3e169]:
          - listitem [ref=f3e170]:
            - link "Facebook" [ref=f3e171] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f3e172]:
            - link "Twitter" [ref=f3e173] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f3e174]:
            - link "RSS" [ref=f3e175] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f3e176]:
            - link "YouTube" [ref=f3e177] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f3e178]:
            - link "Google+" [ref=f3e179] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f3e180]:
      - text: Powered by
      - link "nopCommerce" [ref=f3e181] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f3e182]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import {test, expect} from "@playwright/test"
  2   | import {RegisterPage} from "../pages/RegisterPage";
  3   | import {HomePage} from "../pages/HomePage";
  4   | import {InfoPage} from "../pages/InfoPage";
  5   | import {CartPage} from "../pages/CartPage";
  6   | import {LoginPage} from "../pages/LoginPage";
  7   | import { dataProvider } from "../utils/dataProvider";
  8   | import { TestConfig } from "../test.config";
  9   | import { RegistrationResultsPage } from "../pages/RegistrationResultsPage";
  10  | import { generateRandomUserData } from "../utils/generateRandomUserData";
  11  | 
  12  | 
  13  | /*
  14  | TC ID	        E2E Scenario	           Expected Result	        Priority
  15  | CART_E2E_001	Add one product to cart	   Product appears in cart	P0
  16  | 
  17  | */
  18  | 
  19  | 
  20  | test('REG_E2E_001 - Add one product to cart @Regression',async ({page})=>{
  21  |        
  22  |     test.setTimeout(90000);  //Set timeout to 60 seconds for this test case
  23  |   
  24  |       await page.goto(TestConfig.getTestURL());
  25  |   
  26  |       const rawData:any = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "AddToCart"));
  27  |       const testData= JSON.parse(rawData);
  28  |       
  29  |       //Go to Login page for further steps 
  30  |       const loginpage = new LoginPage(page);
  31  |       await loginpage.openLoginPage();
  32  |   
  33  |       let flag=false;
  34  |   
  35  |       for (const { TestID, Email, Password, ProductName } of testData) { 
  36  |            
  37  |            console.log( TestID,  Email, Password, ProductName); 
  38  |   
  39  |            if(TestID === "REG_E2E_001")   {
  40  |   
  41  |              await loginpage.enterEmail(Email);
  42  |   
  43  |              await loginpage.enterPassword(Password);
  44  |       
  45  |              await loginpage.clickSignInButton(); 
  46  |              
  47  |              await page.waitForTimeout(5000); 
  48  |              
  49  |              await expect.soft(await page.title()).toEqual("Demo Web Shop");
  50  |              
  51  |              await page.waitForTimeout(3000);
  52  |   
  53  |              const homePage = new HomePage(page);
  54  |              
  55  |              await homePage.EnterItemInSearchBox(ProductName);
  56  |              
  57  |              await homePage.clickSearchSubmitButton();
  58  |              
  59  |              const searchResults = await (await homePage.getAllSearchResults()).all();
  60  |   
  61  |              await page.waitForTimeout(3000);
  62  |   
  63  |                  for (const result of searchResults) {   
  64  |   
  65  |                       const resultText = await result.locator("h2 a").innerText();
  66  |   
> 67  |                       const productPrice = await result.locator("div.details div.add-info span").innerText();
      |                                                                                                  ^ Error: locator.innerText: Error: strict mode violation: locator('div.search-results div.product-item').first().locator('div.details div.add-info span') resolved to 2 elements:
  68  |                        
  69  |                       await result.click();  //Opens product details page
  70  |   
  71  |                       await page.waitForTimeout(2000);
  72  |   
  73  |                       await page.locator("div.add-to-cart input[value='Add to cart']").click();  //Click on Add to Cart button
  74  |   
  75  |                       await page.waitForTimeout(3000);
  76  |   
  77  |                       await page.locator("div.header-links a.ico-cart").click(); //Click on Shopping Cart link
  78  |   
  79  |                       await page.waitForTimeout(3000);
  80  |   
  81  |                       const cartPage = new CartPage(page);
  82  |   
  83  |                       const cartItems = await (await cartPage.getSelectedItems()).allInnerTexts();
  84  |   
  85  |                       if (cartItems.every(item => item.includes(resultText))) {
  86  |                           console.log("Product added to cart correctly for product: " + resultText);
  87  |                           flag = true;
  88  |                       }else{
  89  |                           flag=false;
  90  |                           break;
  91  |                       }
  92  |                          
  93  |   
  94  |                       await page.waitForTimeout(3000);
  95  |   
  96  |                       await page.goBack();  //Go back to search results page
  97  |   
  98  |                       await page.waitForTimeout(3000);
  99  |   
  100 |                       await page.goBack();
  101 |   
  102 |                       await page.waitForTimeout(3000);
  103 |   
  104 |                       console.log("Flag = "+flag);  
  105 |   
  106 |   
  107 |   
  108 |                  }
  109 |   
  110 |   
  111 |            }
  112 |   
  113 |       } 
  114 |       
  115 |      await expect(flag).toBeTruthy();
  116 | 
  117 | 
  118 | })
  119 | 
  120 | /*
  121 | TC ID	        E2E Scenario	                     Expected Result	                      Priority
  122 | CART_E2E_002	Add multiple different products	     All selected products appear in cart	  P0
  123 | 
  124 | 
  125 | */
  126 | 
  127 | 
  128 | 
  129 | test('REG_E2E_002 - Add multiple products to cart @Sanity',async ({page})=>{
  130 |        
  131 |       test.setTimeout(100000);  //Set timeout to 60 seconds for this test case
  132 |   
  133 |       await page.goto(TestConfig.getTestURL());
  134 |   
  135 |       const rawData:any = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "AddToCart"));
  136 |       const testData= JSON.parse(rawData);
  137 |       
  138 |       //Go to Login page for further steps 
  139 |       const loginpage = new LoginPage(page);
  140 |       await loginpage.openLoginPage();
  141 |         
  142 |       const cartPage = new CartPage(page);
  143 | 
  144 |       let flag=false;
  145 | 
  146 |       let count=0;
  147 |   
  148 |       for (const { TestID, Email, Password, ProductName } of testData) { 
  149 |            
  150 |            console.log( TestID,  Email, Password, ProductName); 
  151 |   
  152 |            if(TestID === "REG_E2E_002")   {
  153 |   
  154 |              await loginpage.enterEmail(Email);
  155 |   
  156 |              await loginpage.enterPassword(Password);
  157 |       
  158 |              await loginpage.clickSignInButton(); 
  159 |              
  160 |              await page.waitForTimeout(5000); 
  161 |              
  162 |              await expect.soft(await page.title()).toEqual("Demo Web Shop");
  163 |              
  164 |              await page.waitForTimeout(3000);
  165 |   
  166 |              const homePage = new HomePage(page);
  167 |              
```