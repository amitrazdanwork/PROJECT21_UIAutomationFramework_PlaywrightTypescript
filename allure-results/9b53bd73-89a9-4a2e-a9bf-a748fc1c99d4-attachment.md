# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductSearch.spec.ts >> Product Search E2E Regression Suite >> Product Search - Search and open product from results @Sanity
- Location: tests\ProductSearch.spec.ts:185:7

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 90000ms exceeded.
Call log:
  - waiting for locator('div.search-results div.product-item').nth(1).locator('h2 a')

```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - generic [ref=f5e3]:
    - generic [ref=f5e4]:
      - link [ref=f5e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f5e7]
      - list [ref=f5e10]:
        - listitem [ref=f5e11]:
          - link "umeshkumar1@gmail.com" [ref=f5e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f5e13]:
          - link "Log out" [ref=f5e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f5e15]:
          - link "Shopping cart (3)" [ref=f5e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f5e17]: Shopping cart
            - generic [ref=f5e18]: (3)
        - listitem [ref=f5e19]:
          - link "Wishlist (0)" [ref=f5e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f5e21]: Wishlist
            - generic [ref=f5e22]: (0)
      - generic [ref=f5e24]:
        - status [ref=f5e25]
        - textbox [ref=f5e26]: Search store
        - button "Search" [ref=f5e27] [cursor=pointer]
    - list [ref=f5e29]:
      - listitem [ref=f5e30]:
        - link "Books" [ref=f5e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f5e32]:
        - link "Computers" [ref=f5e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f5e34]:
        - link "Electronics" [ref=f5e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f5e36]:
        - link "Apparel & Shoes" [ref=f5e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f5e38]:
        - link "Digital downloads" [ref=f5e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f5e40]:
        - link "Jewelry" [ref=f5e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f5e42]:
        - link "Gift Cards" [ref=f5e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f5e44]:
        - generic [ref=f5e45]:
          - strong [ref=f5e47]: Categories
          - list [ref=f5e49]:
            - listitem [ref=f5e50]:
              - link "Books" [ref=f5e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f5e52]:
              - link "Computers" [ref=f5e53] [cursor=pointer]:
                - /url: /computers
              - list [ref=f5e54]:
                - listitem [ref=f5e55]:
                  - link "Desktops" [ref=f5e56] [cursor=pointer]:
                    - /url: /desktops
                - listitem [ref=f5e57]:
                  - link "Notebooks" [ref=f5e58] [cursor=pointer]:
                    - /url: /notebooks
                - listitem [ref=f5e59]:
                  - link "Accessories" [ref=f5e60] [cursor=pointer]:
                    - /url: /accessories
            - listitem [ref=f5e61]:
              - link "Electronics" [ref=f5e62] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f5e63]:
              - link "Apparel & Shoes" [ref=f5e64] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f5e65]:
              - link "Digital downloads" [ref=f5e66] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f5e67]:
              - link "Jewelry" [ref=f5e68] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f5e69]:
              - link "Gift Cards" [ref=f5e70] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f5e71]:
          - strong [ref=f5e73]: Manufacturers
          - list [ref=f5e75]:
            - listitem [ref=f5e76]:
              - link "Tricentis" [ref=f5e77] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f5e78]:
          - strong [ref=f5e80]: Newsletter
          - generic [ref=f5e82]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f5e84]
            - button "Subscribe" [ref=f5e86] [cursor=pointer]
      - generic [ref=f5e87]:
        - list [ref=f5e89]:
          - listitem [ref=f5e90]:
            - link "Home" [ref=f5e92] [cursor=pointer]:
              - /url: /
            - text: /
          - listitem [ref=f5e93]:
            - link "Computers" [ref=f5e95] [cursor=pointer]:
              - /url: /computers
            - text: /
          - listitem [ref=f5e96]:
            - link "Desktops" [ref=f5e98] [cursor=pointer]:
              - /url: /desktops
            - text: /
          - listitem [ref=f5e99]:
            - strong [ref=f5e100]: Build your own cheap computer
        - generic [ref=f5e104]:
          - generic [ref=f5e105]:
            - generic [ref=f5e106]:
              - img "Picture of Build your own cheap computer" [ref=f5e108]
              - generic [ref=f5e110]:
                - link [ref=f5e111] [cursor=pointer]:
                  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000172_build-your-own-cheap-computer.jpeg
                  - img "Picture of Build your own cheap computer" [ref=f5e112]
                - link [ref=f5e113] [cursor=pointer]:
                  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000173_build-your-own-cheap-computer.jpeg
                  - img "Picture of Build your own cheap computer" [ref=f5e114]
                - link [ref=f5e115] [cursor=pointer]:
                  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000174_build-your-own-cheap-computer.jpeg
                  - img "Picture of Build your own cheap computer" [ref=f5e116]
            - generic [ref=f5e117]:
              - heading "Build your own cheap computer" [level=1] [ref=f5e119]
              - generic [ref=f5e120]: Build it
              - generic [ref=f5e121]: "Availability: In stock"
              - generic [ref=f5e122]: Free shipping
              - generic [ref=f5e127]:
                - link "934 review(s)" [ref=f5e128] [cursor=pointer]:
                  - /url: /productreviews/72
                - text: "|"
                - link "Add your review" [ref=f5e129] [cursor=pointer]:
                  - /url: /productreviews/72
              - generic [ref=f5e131]:
                - term [ref=f5e132]: Processor *
                - definition [ref=f5e133]:
                  - list [ref=f5e134]:
                    - listitem [ref=f5e135]:
                      - radio "Slow" [ref=f5e136]
                      - text: Slow
                    - listitem [ref=f5e137]:
                      - radio "Medium [+15.00]" [checked] [ref=f5e138]
                      - text: Medium [+15.00]
                    - listitem [ref=f5e139]:
                      - radio "Fast [+100.00]" [ref=f5e140]
                      - text: Fast [+100.00]
                - term [ref=f5e141]: RAM *
                - definition [ref=f5e142]:
                  - list [ref=f5e143]:
                    - listitem [ref=f5e144]:
                      - radio "8 GB [+60.00]" [ref=f5e145]
                      - text: 8 GB [+60.00]
                    - listitem [ref=f5e146]:
                      - radio "2 GB" [checked] [ref=f5e147]
                      - text: 2 GB
                    - listitem [ref=f5e148]:
                      - radio "4 GB [+20.00]" [ref=f5e149]
                      - text: 4 GB [+20.00]
                - term [ref=f5e150]: HDD *
                - definition [ref=f5e151]:
                  - list [ref=f5e152]:
                    - listitem [ref=f5e153]:
                      - radio "320 GB" [checked] [ref=f5e154]
                      - text: 320 GB
                    - listitem [ref=f5e155]:
                      - radio "400 GB [+100.00]" [ref=f5e156]
                      - text: 400 GB [+100.00]
                - term [ref=f5e157]: Software
                - definition [ref=f5e158]:
                  - list [ref=f5e159]:
                    - listitem [ref=f5e160]:
                      - checkbox "Image Viever [+5.00]" [ref=f5e161]
                      - text: Image Viever [+5.00]
                    - listitem [ref=f5e162]:
                      - checkbox "Office Suite [+100.00]" [ref=f5e163]
                      - text: Office Suite [+100.00]
                    - listitem [ref=f5e164]:
                      - checkbox "Other Office Suite [+40.00]" [ref=f5e165]
                      - text: Other Office Suite [+40.00]
              - generic [ref=f5e166]: "800.00"
              - generic [ref=f5e169]:
                - text: "Qty:"
                - textbox "Qty:" [ref=f5e170]: "1"
                - button "Add to cart" [ref=f5e171] [cursor=pointer]
              - button "Email a friend" [ref=f5e173] [cursor=pointer]
              - button "Add to compare list" [ref=f5e175] [cursor=pointer]
            - paragraph [ref=f5e177]: Fight back against cluttered workspaces with this stylish All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning HiColor LCD technology. It has a built-in microphone and a camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, it includes an elegantly designed keyboard and a USB mouse.
          - generic [ref=f5e178]:
            - generic [ref=f5e179]:
              - strong [ref=f5e181]: Product tags
              - generic:
                - list:
                  - listitem [ref=f5e182]:
                    - link "computer" [ref=f5e183] [cursor=pointer]:
                      - /url: /producttag/6/computer
                    - text: (10)
                  - listitem [ref=f5e184]: ","
                  - listitem [ref=f5e185]:
                    - link "awesome" [ref=f5e186] [cursor=pointer]:
                      - /url: /producttag/8/awesome
                    - text: (20)
            - generic [ref=f5e187]:
              - strong [ref=f5e189]: Customers who bought this item also bought
              - generic [ref=f5e191]:
                - link [ref=f5e193] [cursor=pointer]:
                  - /url: /simple-computer
                  - img "Picture of Simple Computer" [ref=f5e194]
                - generic [ref=f5e195]:
                  - heading [level=2] [ref=f5e196]:
                    - link "Simple Computer" [ref=f5e197] [cursor=pointer]:
                      - /url: /simple-computer
                  - generic "410 review(s)" [ref=f5e198]
                  - generic [ref=f5e201]:
                    - generic [ref=f5e202]: "800.00"
                    - button "Add to cart" [ref=f5e205] [cursor=pointer]
              - generic [ref=f5e207]:
                - link [ref=f5e209] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
                  - img "Picture of Build your own expensive computer" [ref=f5e210]
                - generic [ref=f5e211]:
                  - heading [level=2] [ref=f5e212]:
                    - link "Build your own expensive computer" [ref=f5e213] [cursor=pointer]:
                      - /url: /build-your-own-expensive-computer-2
                  - generic "527 review(s)" [ref=f5e214]
                  - generic [ref=f5e217]:
                    - generic [ref=f5e218]: "1800.00"
                    - button "Add to cart" [ref=f5e221] [cursor=pointer]
              - generic [ref=f5e223]:
                - link [ref=f5e225] [cursor=pointer]:
                  - /url: /blue-and-green-sneaker
                  - img "Picture of Blue and green Sneaker" [ref=f5e226]
                - generic [ref=f5e227]:
                  - heading [level=2] [ref=f5e228]:
                    - link "Blue and green Sneaker" [ref=f5e229] [cursor=pointer]:
                      - /url: /blue-and-green-sneaker
                  - generic "363 review(s)" [ref=f5e230]
                  - generic [ref=f5e233]:
                    - generic [ref=f5e234]: "11.00"
                    - button "Add to cart" [ref=f5e237] [cursor=pointer]
  - generic [ref=f5e238]:
    - generic [ref=f5e239]:
      - generic [ref=f5e240]:
        - heading "Information" [level=3] [ref=f5e241]
        - list [ref=f5e242]:
          - listitem [ref=f5e243]:
            - link "Sitemap" [ref=f5e244] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f5e245]:
            - link "Shipping & Returns" [ref=f5e246] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f5e247]:
            - link "Privacy Notice" [ref=f5e248] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f5e249]:
            - link "Conditions of Use" [ref=f5e250] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f5e251]:
            - link "About us" [ref=f5e252] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f5e253]:
            - link "Contact us" [ref=f5e254] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f5e255]:
        - heading "Customer service" [level=3] [ref=f5e256]
        - list [ref=f5e257]:
          - listitem [ref=f5e258]:
            - link "Search" [ref=f5e259] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f5e260]:
            - link "News" [ref=f5e261] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f5e262]:
            - link "Blog" [ref=f5e263] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f5e264]:
            - link "Recently viewed products" [ref=f5e265] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f5e266]:
            - link "Compare products list" [ref=f5e267] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f5e268]:
            - link "New products" [ref=f5e269] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f5e270]:
        - heading "My account" [level=3] [ref=f5e271]
        - list [ref=f5e272]:
          - listitem [ref=f5e273]:
            - link "My account" [ref=f5e274] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f5e275]:
            - link "Orders" [ref=f5e276] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f5e277]:
            - link "Addresses" [ref=f5e278] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f5e279]:
            - link "Shopping cart" [ref=f5e280] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f5e281]:
            - link "Wishlist" [ref=f5e282] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f5e283]:
        - heading "Follow us" [level=3] [ref=f5e284]
        - list [ref=f5e285]:
          - listitem [ref=f5e286]:
            - link "Facebook" [ref=f5e287] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f5e288]:
            - link "Twitter" [ref=f5e289] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f5e290]:
            - link "RSS" [ref=f5e291] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f5e292]:
            - link "YouTube" [ref=f5e293] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f5e294]:
            - link "Google+" [ref=f5e295] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f5e296]:
      - text: Powered by
      - link "nopCommerce" [ref=f5e297] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f5e298]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  120 |     }
  121 | 
  122 |            // NOTE: The above condition is used to check if all of the search results contain the partial product name "Health".
  123 | 
  124 |         //    Why this works.
  125 |         //    every() loops through each item in the array.
  126 |         //    result.includes("Health") checks if the current item (e.g., "Health Book") contains the substring "Health".
  127 | 
  128 |    await expect.soft(flag).toBeTruthy();
  129 | 
  130 | })
  131 | 
  132 | 
  133 | /* TEST 3:
  134 | 
  135 | TC ID	            E2E Scenario	                                     Expected Result	                    Priority
  136 | SEARCH_E2E_003	     Search using non-existing product	                No-result state/message is displayed	P1
  137 | 
  138 | */
  139 | test('Product Search - Search using non-existing product @Sanity',async ({page})=>{
  140 | 
  141 |      // Directly target the single record you need from your array
  142 |      const record = testData.find((data: any) => data.TestID === "REG_E2E_003");
  143 |      expect(record).toBeDefined();
  144 | 
  145 |      const { TestID,  Email, Password, ProductName } = record;
  146 | 
  147 |      await loginPage.openLoginPage();
  148 | 
  149 |      let flag=false;
  150 | 
  151 |      await loginPage.enterEmail(Email);
  152 | 
  153 |      await loginPage.enterPassword(Password);
  154 |     
  155 |      await loginPage.clickSignInButton(); 
  156 |            
  157 |      await page.waitForTimeout(5000); 
  158 |            
  159 |      await expect.soft(await page.title()).toEqual("Demo Web Shop");
  160 |            
  161 |      await homePage.EnterItemInSearchBox(ProductName);
  162 |            
  163 |      await homePage.clickSearchSubmitButton();
  164 |            
  165 |      const searchResults = await (await homePage.getAllSearchResults()).allInnerTexts();
  166 | 
  167 |      console.log("Search Results are : "+searchResults);
  168 |            
  169 |      if (searchResults.length === 0 && (await (await homePage.getNoProductFoundMsg()).innerText()) === "No products were found that matched your criteria.") {
  170 |           console.log("No products were found that matched your criteria.");
  171 |           flag = true;
  172 |      }
  173 | 
  174 |    await expect.soft(flag).toBeTruthy();
  175 | 
  176 | })
  177 | 
  178 | 
  179 | /* TEST 4:
  180 | 
  181 | TC ID	             E2E Scenario	                                     Expected Result	                       Priority
  182 | SEARCH_E2E_004	        Search and open product from results             Correct product details page opens	   P0
  183 | */
  184 | 
  185 |   test('Product Search - Search and open product from results @Sanity',async ({page})=>{
  186 |    
  187 |     // Directly target the single record you need from your array
  188 |     const record = testData.find((data: any) => data.TestID === "REG_E2E_004");
  189 |     expect(record).toBeDefined();
  190 | 
  191 |     const { TestID,  Email, Password, ProductName } = record;
  192 | 
  193 |     //Go to Login page for further steps 
  194 |     await loginPage.openLoginPage();
  195 | 
  196 |     let flag=false;
  197 | 
  198 |     await loginPage.enterEmail(Email);
  199 | 
  200 |     await loginPage.enterPassword(Password);
  201 |     
  202 |     await loginPage.clickSignInButton(); 
  203 |            
  204 |     await page.waitForTimeout(5000); 
  205 |            
  206 |     await expect.soft(await page.title()).toEqual("Demo Web Shop");
  207 |            
  208 |     await page.waitForTimeout(3000);
  209 | 
  210 |     await homePage.EnterItemInSearchBox(ProductName);
  211 |            
  212 |     await homePage.clickSearchSubmitButton();
  213 |            
  214 |     const searchResults = await (await homePage.getAllSearchResults()).all();
  215 | 
  216 |     await page.waitForTimeout(3000);
  217 | 
  218 |     for (const result of searchResults) {   
  219 | 
> 220 |      const resultText = await result.locator("h2 a").innerText();
      |                                                      ^ Error: locator.innerText: Test timeout of 90000ms exceeded.
  221 | 
  222 |      const productPrice = await result.locator("div.details div.add-info span").innerText();
  223 |                      
  224 |      await result.click();  //Opens product details page
  225 | 
  226 |      await page.waitForTimeout(2000);
  227 | 
  228 |      const productDetailsPageItemName = await page.locator("div.product-name h1").innerText();
  229 | 
  230 |      const productDetailsPageItemPrice = await page.locator("div.product-price span").innerText();
  231 | 
  232 |      if (resultText === productDetailsPageItemName && productPrice === productDetailsPageItemPrice) {
  233 |           console.log("Product details page opened correctly for product: " + resultText);
  234 |           flag = true;
  235 |      }else
  236 |           break;
  237 |    }
  238 |    
  239 |    await page.waitForTimeout(3000);
  240 | 
  241 |    await page.goBack();  //Go back to search results page
  242 | 
  243 |    await page.waitForTimeout(3000);
  244 | 
  245 |    console.log("Flag = "+flag);  
  246 |          
  247 |    await expect(flag).toBeTruthy();
  248 | 
  249 |  }) 
  250 | 
  251 | 
  252 | /* TEST 5:
  253 | TC ID	             E2E Scenario	                                     Expected Result	                       Priority
  254 | SEARCH_E2E_005	        Search product and add it to cart from results	       Correct product is added to cart	        P0
  255 | */
  256 | 
  257 | test('Product Search - Search and open product from results',async ({page})=>{
  258 |      
  259 |     // Directly target the single record you need from your array
  260 |     const record = testData.find((data: any) => data.TestID === "REG_E2E_005");
  261 |     expect(record).toBeDefined();
  262 | 
  263 |     const { TestID,  Email, Password, ProductName } = record;
  264 | 
  265 |     //Go to Login page for further steps 
  266 |     await loginPage.openLoginPage();
  267 | 
  268 |     let flag=false;
  269 | 
  270 |     await loginPage.enterEmail(Email);
  271 | 
  272 |     await loginPage.enterPassword(Password);
  273 |     
  274 |     await loginPage.clickSignInButton(); 
  275 |            
  276 |     await page.waitForTimeout(5000); 
  277 |            
  278 |     await expect.soft(await page.title()).toEqual("Demo Web Shop");
  279 |            
  280 |     await page.waitForTimeout(3000);
  281 | 
  282 |     const homePage = new HomePage(page);
  283 |            
  284 |     await homePage.EnterItemInSearchBox(ProductName);
  285 |            
  286 |     await homePage.clickSearchSubmitButton();
  287 |            
  288 |     const searchResults = await (await homePage.getAllSearchResults()).all();
  289 | 
  290 |      await page.waitForTimeout(3000);
  291 | 
  292 |      for (const result of searchResults) {   
  293 | 
  294 |           const resultText = await result.locator("h2 a").innerText();
  295 | 
  296 |           const productPrice = await result.locator("div.details div.add-info span").innerText();
  297 |                      
  298 |           await result.click();  //Opens product details page
  299 | 
  300 |           await page.waitForTimeout(2000);
  301 | 
  302 |           await page.locator("div.add-to-cart input[value='Add to cart']").click();  //Click on Add to Cart button
  303 | 
  304 |           await page.waitForTimeout(3000);
  305 | 
  306 |           await page.locator("div.header-links a.ico-cart").click(); //Click on Shopping Cart link
  307 | 
  308 |           await page.waitForTimeout(3000);
  309 | 
  310 |           const cartItems = await (await cartPage.getSelectedItems()).allInnerTexts();
  311 | 
  312 |           if (cartItems.some(item => item.includes(resultText))) {
  313 |                console.log("Product added to cart correctly for product: " + resultText);
  314 |                flag = true;
  315 |           }else{
  316 |                flag=false;
  317 |                break;
  318 |           }
  319 |                        
  320 | 
```