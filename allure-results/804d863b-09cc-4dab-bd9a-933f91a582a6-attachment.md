# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login Regression Suite >> LOGIN_E2E_003 - Login with unregistered email @Sanity 
- Location: tests\Login.spec.ts:103:7

# Error details

```
Test timeout of 100000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('div[class=\'validation-summary-errors\'] span')

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
          - link "Shopping cart (3)" [ref=f3e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f3e17]: Shopping cart
            - generic [ref=f3e18]: (3)
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
          - strong [ref=f3e73]: Popular tags
          - generic [ref=f3e74]:
            - list [ref=f3e76]:
              - listitem [ref=f3e77]:
                - link "apparel" [ref=f3e78] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=f3e79]:
                - link "awesome" [ref=f3e80] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=f3e81]:
                - link "book" [ref=f3e82] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=f3e83]:
                - link "camera" [ref=f3e84] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=f3e85]:
                - link "cell" [ref=f3e86] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=f3e87]:
                - link "compact" [ref=f3e88] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=f3e89]:
                - link "computer" [ref=f3e90] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=f3e91]:
                - link "cool" [ref=f3e92] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=f3e93]:
                - link "digital" [ref=f3e94] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=f3e95]:
                - link "jeans" [ref=f3e96] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=f3e97]:
                - link "jewelry" [ref=f3e98] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=f3e99]:
                - link "nice" [ref=f3e100] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=f3e101]:
                - link "shirt" [ref=f3e102] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=f3e103]:
                - link "shoes" [ref=f3e104] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=f3e105]:
                - link "TCP" [ref=f3e106] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=f3e108] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=f3e109]:
        - generic [ref=f3e110]:
          - strong [ref=f3e112]: Newsletter
          - generic [ref=f3e114]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f3e116]
            - button "Subscribe" [ref=f3e118] [cursor=pointer]
        - generic [ref=f3e119]:
          - strong [ref=f3e121]: Community poll
          - generic [ref=f3e123]:
            - strong [ref=f3e124]: Do you like nopCommerce?
            - list [ref=f3e125]:
              - listitem [ref=f3e126]:
                - radio "Excellent" [ref=f3e127]
                - text: Excellent
              - listitem [ref=f3e128]:
                - radio "Good" [ref=f3e129]
                - text: Good
              - listitem [ref=f3e130]:
                - radio "Poor" [ref=f3e131]
                - text: Poor
              - listitem [ref=f3e132]:
                - radio "Very bad" [ref=f3e133]
                - text: Very bad
            - button "Vote" [ref=f3e135] [cursor=pointer]
      - generic [ref=f3e138]:
        - generic [ref=f3e139]:
          - generic [ref=f3e140]:
            - link [ref=f3e141] [cursor=pointer]:
              - /url: https://academy.tricentis.com
            - generic [ref=f3e143]: Tricentis Academy
            - generic:
              - generic [ref=f3e144] [cursor=pointer]: Prev
              - generic [ref=f3e145] [cursor=pointer]: Next
          - generic [ref=f3e210]:
            - generic [ref=f3e211] [cursor=pointer]: "1"
            - generic [ref=f3e212] [cursor=pointer]: "2"
        - generic [ref=f3e213]:
          - heading "Welcome to our store" [level=2] [ref=f3e215]
          - generic [ref=f3e216]:
            - paragraph [ref=f3e217]: Welcome to the new Tricentis store!
            - paragraph [ref=f3e218]: Feel free to shop around and explore everything.
        - generic [ref=f3e219]:
          - strong [ref=f3e221]: Featured products
          - generic [ref=f3e223]:
            - link [ref=f3e225] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=f3e226]
            - generic [ref=f3e227]:
              - heading [level=2] [ref=f3e228]:
                - link "$25 Virtual Gift Card" [ref=f3e229] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "915 review(s)" [ref=f3e230]
              - generic [ref=f3e233]:
                - generic [ref=f3e234]: "25.00"
                - button "Add to cart" [ref=f3e237] [cursor=pointer]
          - generic [ref=f3e239]:
            - link [ref=f3e241] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=f3e242]
            - generic [ref=f3e243]:
              - heading [level=2] [ref=f3e244]:
                - link "14.1-inch Laptop" [ref=f3e245] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1731 review(s)" [ref=f3e246]
              - generic [ref=f3e249]:
                - generic [ref=f3e250]: "1590.00"
                - button "Add to cart" [ref=f3e253] [cursor=pointer]
          - generic [ref=f3e255]:
            - link [ref=f3e257] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=f3e258]
            - generic [ref=f3e259]:
              - heading [level=2] [ref=f3e260]:
                - link "Build your own cheap computer" [ref=f3e261] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "934 review(s)" [ref=f3e262]
              - generic [ref=f3e265]:
                - generic [ref=f3e266]: "800.00"
                - button "Add to cart" [ref=f3e269] [cursor=pointer]
          - generic [ref=f3e271]:
            - link [ref=f3e273] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=f3e274]
            - generic [ref=f3e275]:
              - heading [level=2] [ref=f3e276]:
                - link "Build your own computer" [ref=f3e277] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "437 review(s)" [ref=f3e278]
              - generic [ref=f3e281]:
                - generic [ref=f3e282]: "1200.00"
                - button "Add to cart" [ref=f3e285] [cursor=pointer]
          - generic [ref=f3e287]:
            - link [ref=f3e289] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=f3e290]
            - generic [ref=f3e291]:
              - heading [level=2] [ref=f3e292]:
                - link "Build your own expensive computer" [ref=f3e293] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "527 review(s)" [ref=f3e294]
              - generic [ref=f3e297]:
                - generic [ref=f3e298]: "1800.00"
                - button "Add to cart" [ref=f3e301] [cursor=pointer]
          - generic [ref=f3e303]:
            - link [ref=f3e305] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=f3e306]
            - generic [ref=f3e307]:
              - heading [level=2] [ref=f3e308]:
                - link "Simple Computer" [ref=f3e309] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "410 review(s)" [ref=f3e310]
              - generic [ref=f3e313]:
                - generic [ref=f3e314]: "800.00"
                - button "Add to cart" [ref=f3e317] [cursor=pointer]
  - generic [ref=f3e318]:
    - generic [ref=f3e319]:
      - generic [ref=f3e320]:
        - heading "Information" [level=3] [ref=f3e321]
        - list [ref=f3e322]:
          - listitem [ref=f3e323]:
            - link "Sitemap" [ref=f3e324] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f3e325]:
            - link "Shipping & Returns" [ref=f3e326] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f3e327]:
            - link "Privacy Notice" [ref=f3e328] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f3e329]:
            - link "Conditions of Use" [ref=f3e330] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f3e331]:
            - link "About us" [ref=f3e332] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f3e333]:
            - link "Contact us" [ref=f3e334] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f3e335]:
        - heading "Customer service" [level=3] [ref=f3e336]
        - list [ref=f3e337]:
          - listitem [ref=f3e338]:
            - link "Search" [ref=f3e339] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f3e340]:
            - link "News" [ref=f3e341] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f3e342]:
            - link "Blog" [ref=f3e343] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f3e344]:
            - link "Recently viewed products" [ref=f3e345] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f3e346]:
            - link "Compare products list" [ref=f3e347] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f3e348]:
            - link "New products" [ref=f3e349] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f3e350]:
        - heading "My account" [level=3] [ref=f3e351]
        - list [ref=f3e352]:
          - listitem [ref=f3e353]:
            - link "My account" [ref=f3e354] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f3e355]:
            - link "Orders" [ref=f3e356] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f3e357]:
            - link "Addresses" [ref=f3e358] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f3e359]:
            - link "Shopping cart" [ref=f3e360] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f3e361]:
            - link "Wishlist" [ref=f3e362] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f3e363]:
        - heading "Follow us" [level=3] [ref=f3e364]
        - list [ref=f3e365]:
          - listitem [ref=f3e366]:
            - link "Facebook" [ref=f3e367] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f3e368]:
            - link "Twitter" [ref=f3e369] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f3e370]:
            - link "RSS" [ref=f3e371] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f3e372]:
            - link "YouTube" [ref=f3e373] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f3e374]:
            - link "Google+" [ref=f3e375] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f3e376]:
      - text: Powered by
      - link "nopCommerce" [ref=f3e377] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f3e378]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import {Page, Locator} from "@playwright/test";
  2  | 
  3  | export class LoginPage{
  4  | 
  5  |     /* ------------------------------------------------------------ Page variables ---------------------------------------------------*/
  6  |     private readonly page:Page;
  7  |     private readonly title1:Locator;
  8  |     private readonly emailLabel:Locator;
  9  |     private readonly passwordLabel:Locator;
  10 |     private readonly rememberMeLabel:Locator;    //label[text()='Remember me?']
  11 |     private readonly rememberMeCheckbox:Locator;   //input#RememberMe
  12 |     private readonly forgotPasswordLink:Locator;   //a[text()='Forgot password?']
  13 |     private readonly signInButton:Locator; //     input[value='Log in']
  14 |     private readonly emailTextbox:Locator; //    input#Email
  15 |     private readonly passwordTextbox:Locator; // input#Password
  16 |     private readonly FailedErrorMessage:Locator;
  17 | 
  18 | 
  19 | 
  20 |     /* Constructor : method for assigning default value or instantiation of class variables */
  21 |     constructor(page:Page){
  22 | 
  23 |         this.page = page;
  24 |         this.title1 = page.locator("//div/strong[text()='Returning Customer']");
  25 |         this.emailLabel = page.locator("//label[text()='Email:']");
  26 |         this.passwordLabel = page.locator("//label[text()='Password:']");
  27 |         this.rememberMeLabel = page.locator("//label[text()='Remember me?']");
  28 |         this.rememberMeCheckbox = page.locator("input#RememberMe");
  29 |         this.forgotPasswordLink = page.locator("//a[text()='Forgot password?']");
  30 |         this.signInButton = page.locator("input[value='Log in']");
  31 |         this.emailTextbox = page.locator("input#Email");
  32 |         this.passwordTextbox = page.locator("input#Password");
  33 |         this.forgotPasswordLink = page.locator("//a[text()='Forgot password?']");
  34 |         this.FailedErrorMessage = page.locator("div[class='validation-summary-errors'] span");
  35 |     }
  36 | 
  37 |     /* -------------------------------------------------- Member functions or Action methods -----------------------------------------*/
  38 |     
  39 |     async openLoginPage(){
  40 |         console.log("Opening Login page");
  41 |         await this.page.goto("https://demowebshop.tricentis.com/login");
  42 |     }
  43 | 
  44 |     async getTitle1Label(){
  45 |         return this.title1.innerText();
  46 |     }
  47 |     
  48 |     async getEmailLabel(){
  49 |         return this.emailLabel.innerText();
  50 |     }
  51 | 
  52 |     async getPasswordLabel(){
  53 |         return this.passwordLabel.innerText();
  54 |     }
  55 | 
  56 |     async getRememberMeLabel(){
  57 |         return this.rememberMeLabel.innerText();
  58 |     }
  59 | 
  60 |     async getforgotPasswordLink(){
  61 |         return this.forgotPasswordLink.innerText();
  62 |     }
  63 | 
  64 |     async enterEmail(value:string){
  65 |         await this.emailTextbox.fill(value);
  66 |     }
  67 | 
  68 |     async enterPassword(value:string){
  69 |         await this.passwordTextbox.fill(value);
  70 |     }
  71 | 
  72 |     async selectRememberMeCheckbox(){
  73 |         await this.rememberMeCheckbox.click();
  74 |     }
  75 | 
  76 |     async clickSignInButton(){
  77 |         await this.signInButton.click();
  78 |     }
  79 | 
  80 |     async clickForgotPasswordLink(){
  81 |         await this.forgotPasswordLink.click();
  82 |     }
  83 | 
  84 |     async getFailedLoginError(){
> 85 |         return this.FailedErrorMessage.innerText();
     |                                        ^ Error: locator.innerText: Test timeout of 100000ms exceeded.
  86 |     }
  87 | }
```