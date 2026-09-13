# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> LOGIN_E2E_002 - Login with incorrect password  @Regression 
- Location: tests\Login.spec.ts:61:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - generic [ref=f2e4]:
      - link [ref=f2e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f2e7]
      - list [ref=f2e10]:
        - listitem [ref=f2e11]:
          - link "Register" [ref=f2e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f2e13]:
          - link "Log in" [ref=f2e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f2e15]:
          - link "Shopping cart (0)" [ref=f2e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f2e17]: Shopping cart
            - generic [ref=f2e18]: (0)
        - listitem [ref=f2e19]:
          - link "Wishlist (0)" [ref=f2e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f2e21]: Wishlist
            - generic [ref=f2e22]: (0)
      - generic [ref=f2e24]:
        - status [ref=f2e25]
        - textbox [ref=f2e26]: Search store
        - button "Search" [ref=f2e27] [cursor=pointer]
    - list [ref=f2e29]:
      - listitem [ref=f2e30]:
        - link "Books" [ref=f2e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f2e32]:
        - link "Computers" [ref=f2e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f2e34]:
        - link "Electronics" [ref=f2e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f2e36]:
        - link "Apparel & Shoes" [ref=f2e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f2e38]:
        - link "Digital downloads" [ref=f2e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f2e40]:
        - link "Jewelry" [ref=f2e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f2e42]:
        - link "Gift Cards" [ref=f2e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f2e44]:
        - generic [ref=f2e45]:
          - strong [ref=f2e47]: Categories
          - list [ref=f2e49]:
            - listitem [ref=f2e50]:
              - link "Books" [ref=f2e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f2e52]:
              - link "Computers" [ref=f2e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f2e54]:
              - link "Electronics" [ref=f2e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f2e56]:
              - link "Apparel & Shoes" [ref=f2e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f2e58]:
              - link "Digital downloads" [ref=f2e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f2e60]:
              - link "Jewelry" [ref=f2e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f2e62]:
              - link "Gift Cards" [ref=f2e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f2e64]:
          - strong [ref=f2e66]: Manufacturers
          - list [ref=f2e68]:
            - listitem [ref=f2e69]:
              - link "Tricentis" [ref=f2e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f2e71]:
          - strong [ref=f2e73]: Newsletter
          - generic [ref=f2e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f2e77]
            - button "Subscribe" [ref=f2e79] [cursor=pointer]
      - generic [ref=f2e81]:
        - heading "Welcome, Please Sign In!" [level=1] [ref=f2e83]
        - generic [ref=f2e84]:
          - generic [ref=f2e85]:
            - generic [ref=f2e86]:
              - strong [ref=f2e88]: New Customer
              - generic [ref=f2e89]: By creating an account on our website you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.
              - button "Register" [ref=f2e91] [cursor=pointer]
            - generic [ref=f2e92]:
              - strong [ref=f2e94]: Returning Customer
              - generic [ref=f2e96]:
                - generic [ref=f2e98]:
                  - text: Login was unsuccessful. Please correct the errors and try again.
                  - list [ref=f2e99]:
                    - listitem [ref=f2e100]: The credentials provided are incorrect
                - generic [ref=f2e101]:
                  - generic [ref=f2e102]: "Email:"
                  - textbox "Email:" [active] [ref=f2e103]: umeshkumar1@gmail.com
                - generic [ref=f2e104]:
                  - generic [ref=f2e105]: "Password:"
                  - textbox "Password:" [ref=f2e106]
                - generic [ref=f2e107]:
                  - checkbox "Remember me?" [ref=f2e108]
                  - generic [ref=f2e109]: Remember me?
                  - link "Forgot password?" [ref=f2e111] [cursor=pointer]:
                    - /url: /passwordrecovery
                - button "Log in" [ref=f2e113] [cursor=pointer]
          - generic [ref=f2e114]:
            - heading "About login / registration" [level=2] [ref=f2e116]
            - paragraph [ref=f2e118]: Put your login / registration information here. You can edit this in the admin site.
  - generic [ref=f2e119]:
    - generic [ref=f2e120]:
      - generic [ref=f2e121]:
        - heading "Information" [level=3] [ref=f2e122]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - link "Sitemap" [ref=f2e125] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f2e126]:
            - link "Shipping & Returns" [ref=f2e127] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f2e128]:
            - link "Privacy Notice" [ref=f2e129] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f2e130]:
            - link "Conditions of Use" [ref=f2e131] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f2e132]:
            - link "About us" [ref=f2e133] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f2e134]:
            - link "Contact us" [ref=f2e135] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f2e136]:
        - heading "Customer service" [level=3] [ref=f2e137]
        - list [ref=f2e138]:
          - listitem [ref=f2e139]:
            - link "Search" [ref=f2e140] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f2e141]:
            - link "News" [ref=f2e142] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f2e143]:
            - link "Blog" [ref=f2e144] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f2e145]:
            - link "Recently viewed products" [ref=f2e146] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f2e147]:
            - link "Compare products list" [ref=f2e148] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f2e149]:
            - link "New products" [ref=f2e150] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f2e151]:
        - heading "My account" [level=3] [ref=f2e152]
        - list [ref=f2e153]:
          - listitem [ref=f2e154]:
            - link "My account" [ref=f2e155] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f2e156]:
            - link "Orders" [ref=f2e157] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f2e158]:
            - link "Addresses" [ref=f2e159] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f2e160]:
            - link "Shopping cart" [ref=f2e161] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f2e162]:
            - link "Wishlist" [ref=f2e163] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f2e164]:
        - heading "Follow us" [level=3] [ref=f2e165]
        - list [ref=f2e166]:
          - listitem [ref=f2e167]:
            - link "Facebook" [ref=f2e168] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f2e169]:
            - link "Twitter" [ref=f2e170] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f2e171]:
            - link "RSS" [ref=f2e172] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f2e173]:
            - link "YouTube" [ref=f2e174] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f2e175]:
            - link "Google+" [ref=f2e176] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f2e177]:
      - text: Powered by
      - link "nopCommerce" [ref=f2e178] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f2e179]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import {test, expect} from "@playwright/test"
  2   | import {RegisterPage} from "../pages/RegisterPage";
  3   | import {HomePage} from "../pages/HomePage";
  4   | import {InfoPage} from "../pages/InfoPage";
  5   | import {CartPage} from "../pages/CartPage";
  6   | import { dataProvider } from "../utils/dataProvider";
  7   | import { TestConfig } from "../test.config";
  8   | import { RegistrationResultsPage } from "../pages/RegistrationResultsPage";
  9   | import { generateRandomUserData } from "../utils/generateRandomUserData";
  10  | import { LoginPage } from "../pages/LoginPage";
  11  | 
  12  | 
  13  | /* This file contains tests related to Registration module or feature of AUT */
  14  | 
  15  | 
  16  | /* TEST 1:
  17  | TC ID	            E2E Scenario	                                Expected Result	               Priority
  18  | LOGIN_E2E_001	    Login using valid registered credentials	    User successfully logs in	   P0
  19  | 
  20  | */
  21  | 
  22  | test('LOGIN_E2E_001 - Login using valid registered credentials @Regression ',async ({page})=>{
  23  |        
  24  |     await page.goto(TestConfig.getTestURL());
  25  | 
  26  |     const rawData:any = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "Login"));
  27  |     const testData= JSON.parse(rawData);
  28  |     
  29  |    //Go to Login page for further steps 
  30  |     const loginpage = new LoginPage(page);
  31  |     await loginpage.openLoginPage();
  32  | 
  33  |     for (const { TestID, Email, Password } of testData) { 
  34  |          
  35  |          console.log( TestID,  Email, Password); 
  36  | 
  37  |          if(TestID === "REG_E2E_001")   {
  38  | 
  39  |            await loginpage.enterEmail(Email);
  40  | 
  41  |            await loginpage.enterPassword(Password);
  42  |     
  43  |            await loginpage.clickSignInButton();
  44  | 
  45  |          }
  46  | 
  47  |     } 
  48  |  
  49  |     await page.waitForTimeout(5000);
  50  | 
  51  |     await expect.soft(await page.title()).toEqual("Demo Web Shop");
  52  | 
  53  | 
  54  | })
  55  | 
  56  | /* TEST 2:
  57  | TC ID	            E2E Scenario	                                Expected Result	               Priority
  58  | LOGIN_E2E_002	Login with incorrect password	Login fails with appropriate error	            P0
  59  | 
  60  | */
  61  | test('LOGIN_E2E_002 - Login with incorrect password  @Regression ',async ({page})=>{
  62  |        
  63  |     await page.goto(TestConfig.getTestURL());
  64  | 
  65  |     const rawData:any = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "Login"));
  66  |     const testData= JSON.parse(rawData);
  67  |     
  68  |    //Go to Login page for further steps 
  69  |     const loginpage = new LoginPage(page);
  70  |     await loginpage.openLoginPage();
  71  | 
  72  |     for (const { TestID, Email, Password } of testData) { 
  73  |          
  74  |          console.log( TestID,  Email, Password); 
  75  | 
  76  |          if(TestID === "REG_E2E_002")   {
  77  | 
  78  |            await loginpage.enterEmail(Email);
  79  | 
  80  |            await loginpage.enterPassword(Password);
  81  |     
  82  |            await loginpage.clickSignInButton();
  83  | 
  84  |          }
  85  | 
  86  |     } 
  87  |  
> 88  |     await page.waitForTimeout(5000);
      |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  89  | 
  90  |     console.log("Login failed with error message: " + await loginpage.getFailedLoginError());
  91  | 
  92  |     await expect(await loginpage.getFailedLoginError()).toEqual("Login was unsuccessful. Please correct the errors and try again.");
  93  | 
  94  | })
  95  | 
  96  | 
  97  | /* TEST 3:
  98  | TC ID	            E2E Scenario	                                Expected Result	                    Priority
  99  | LOGIN_E2E_003	Login with unregistered email	                    Login fails with appropriate error	 P1
  100 | 
  101 | 
  102 | */
  103 | test('LOGIN_E2E_003 - Login with unregistered email @Sanity',async ({page})=>{
  104 |        
  105 |     await page.goto(TestConfig.getTestURL());
  106 | 
  107 |     const rawData:any = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "Login"));
  108 |     const testData= JSON.parse(rawData);
  109 |     
  110 |    //Go to Login page for further steps 
  111 |     const loginpage = new LoginPage(page);
  112 |     await loginpage.openLoginPage();
  113 | 
  114 |     for (const { TestID, Email, Password } of testData) { 
  115 |          
  116 |          console.log( TestID,  Email, Password); 
  117 | 
  118 |          if(TestID === "REG_E2E_003")   {
  119 | 
  120 |            await loginpage.enterEmail(Email);
  121 | 
  122 |            await loginpage.enterPassword(Password);
  123 |     
  124 |            await loginpage.clickSignInButton();
  125 | 
  126 |          }
  127 | 
  128 |     } 
  129 |  
  130 |     await page.waitForTimeout(3000);
  131 | 
  132 |     console.log("Login failed with error message: " + await loginpage.getFailedLoginError());
  133 | 
  134 |     await expect(await loginpage.getFailedLoginError()).toEqual("Login was unsuccessful. Please correct the errors and try again.");
  135 | 
  136 | })
  137 | 
  138 | /* TEST 4:
  139 | TC ID	            E2E Scenario	                                Expected Result	                    Priority
  140 | LOGIN_E2E_004	Login with blank credentials	Required-field validation is displayed	P1
  141 | 
  142 | */
  143 | 
  144 | test('LOGIN_E2E_004 - Login with blank credentials',async ({page})=>{
  145 |        
  146 |     await page.goto(TestConfig.getTestURL());
  147 | 
  148 |     const rawData:any = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "Login"));
  149 |     const testData= JSON.parse(rawData);
  150 |     
  151 |     //Go to Login page for further steps 
  152 |     const loginpage = new LoginPage(page);
  153 | 
  154 |     await loginpage.openLoginPage();
  155 |        
  156 |     await loginpage.clickSignInButton();
  157 | 
  158 |     await page.waitForTimeout(3000);
  159 | 
  160 |     console.log("Login failed with error message: " + await loginpage.getFailedLoginError());
  161 | 
  162 |     await expect(await loginpage.getFailedLoginError()).toEqual("Login was unsuccessful. Please correct the errors and try again.");
  163 | 
  164 | })
  165 | /* TEST 5
  166 | TC ID	            E2E Scenario	                                Expected Result	                        Priority
  167 | LOGIN_E2E_005    	Login and navigate to account page	                Account page opens for logged-in user	P0
  168 | */
  169 | 
  170 | test('LOGIN_E2E_005 - Login and navigate to account page @Sanity',async ({page})=>{
  171 |        
  172 |     await page.goto(TestConfig.getTestURL());
  173 | 
  174 |     const rawData:any = dataProvider.ReadDataFromJSON(TestConfig.getTestDataFilePath("json", "Login"));
  175 |     const testData= JSON.parse(rawData);
  176 |     
  177 |     //Go to Login page for further steps 
  178 |     const loginpage = new LoginPage(page);
  179 | 
  180 |     await loginpage.openLoginPage();
  181 |        
  182 |     for (const { TestID, Email, Password } of testData) { 
  183 |          
  184 |          console.log( TestID,  Email, Password); 
  185 | 
  186 |          if(TestID === "REG_E2E_005")   {
  187 | 
  188 |            await loginpage.enterEmail(Email);
```