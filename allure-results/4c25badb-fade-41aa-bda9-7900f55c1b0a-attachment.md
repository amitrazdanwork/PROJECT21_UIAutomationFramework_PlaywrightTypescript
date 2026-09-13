# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.ts >> Shopping Cart E2E Regression Suite >> REG_E2E_002 - Add multiple products to cart @Sanity
- Location: tests\AddToCart.spec.ts:93:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('input[type=\'submit\']') resolved to 6 elements:
    1) <input type="submit" value="Search" class="button-1 search-box-button"/> aka getByRole('button', { name: 'Search' })
    2) <input type="submit" name="updatecart" value="Update shopping cart" class="button-2 update-cart-button"/> aka getByRole('button', { name: 'Update shopping cart' })
    3) <input type="submit" name="continueshopping" value="Continue shopping" class="button-2 continue-shopping-button"/> aka getByRole('button', { name: 'Continue shopping' })
    4) <input type="submit" value="Apply coupon" name="applydiscountcouponcode" class="button-2 apply-discount-coupon-code-button"/> aka getByRole('button', { name: 'Apply coupon' })
    5) <input type="submit" value="Add gift card" name="applygiftcardcouponcode" class="button-2 apply-gift-card-coupon-code-button"/> aka getByRole('button', { name: 'Add gift card' })
    6) <input type="submit" name="estimateshipping" value="Estimate shipping" class="button-2 estimate-shipping-button"/> aka getByRole('button', { name: 'Estimate shipping' })

Call log:
  - waiting for locator('input[type=\'submit\']')

```

# Page snapshot

```yaml
- generic [ref=f5e1]:
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
            - link "Shopping cart (2)" [ref=f5e16] [cursor=pointer]:
              - /url: /cart
              - generic [ref=f5e17]: Shopping cart
              - generic [ref=f5e18]: (2)
          - listitem [ref=f5e19]:
            - link "Wishlist (0)" [ref=f5e20] [cursor=pointer]:
              - /url: /wishlist
              - generic [ref=f5e21]: Wishlist
              - generic [ref=f5e22]: (0)
        - generic [ref=f5e24]:
          - status [ref=f5e25]: 2 results are available, use up and down arrow keys to navigate.
          - textbox [active] [ref=f5e26]: Jeans
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
      - generic [ref=f5e45]:
        - heading "Shopping cart" [level=1] [ref=f5e47]
        - generic [ref=f5e50]:
          - table [ref=f5e51]:
            - rowgroup [ref=f5e59]:
              - row [ref=f5e60]:
                - columnheader "Remove" [ref=f5e61]
                - columnheader [ref=f5e62]
                - columnheader "Product(s)" [ref=f5e63]
                - columnheader "Price" [ref=f5e64]
                - columnheader "Qty." [ref=f5e65]
                - columnheader "Total" [ref=f5e66]
            - rowgroup [ref=f5e67]:
              - row [ref=f5e68]:
                - cell [ref=f5e69]:
                  - checkbox [ref=f5e70]
                - cell [ref=f5e71]:
                  - img "Picture of Computing and Internet" [ref=f5e72]
                - cell [ref=f5e73]:
                  - link "Computing and Internet" [ref=f5e74] [cursor=pointer]:
                    - /url: /computing-and-internet
                - cell "10.00" [ref=f5e75]
                - cell [ref=f5e76]:
                  - textbox [ref=f5e77]: "1"
                - cell "10.00" [ref=f5e78]
              - row [ref=f5e79]:
                - cell [ref=f5e80]:
                  - checkbox [ref=f5e81]
                - cell [ref=f5e82]:
                  - img "Picture of Blue Jeans" [ref=f5e83]
                - cell [ref=f5e84]:
                  - link "Blue Jeans" [ref=f5e85] [cursor=pointer]:
                    - /url: /blue-jeans
                - cell "1.00" [ref=f5e86]
                - cell [ref=f5e87]:
                  - textbox [ref=f5e88]: "1"
                - cell "1.00" [ref=f5e89]
          - generic [ref=f5e91]:
            - button "Update shopping cart" [ref=f5e92] [cursor=pointer]
            - button "Continue shopping" [ref=f5e93] [cursor=pointer]
          - generic [ref=f5e94]:
            - generic [ref=f5e95]:
              - generic [ref=f5e96]:
                - generic [ref=f5e97]:
                  - strong [ref=f5e99]: Discount Code
                  - generic [ref=f5e100]: Enter your coupon here
                  - generic [ref=f5e101]:
                    - textbox [ref=f5e102]
                    - button "Apply coupon" [ref=f5e103] [cursor=pointer]
                - generic [ref=f5e104]:
                  - strong [ref=f5e106]: Gift Cards
                  - generic [ref=f5e107]: Enter gift card code
                  - generic [ref=f5e108]:
                    - textbox [ref=f5e109]
                    - button "Add gift card" [ref=f5e110] [cursor=pointer]
              - generic [ref=f5e112]:
                - strong [ref=f5e114]: Estimate shipping
                - generic [ref=f5e115]: Enter your destination to get a shipping estimate
                - generic [ref=f5e116]:
                  - generic [ref=f5e117]:
                    - generic [ref=f5e118]: "Country:"
                    - combobox "Country:" [ref=f5e119]:
                      - option "Select country" [selected]
                      - option "United States"
                      - option "Canada"
                      - option "Afghanistan"
                      - option "Albania"
                      - option "Algeria"
                      - option "American Samoa"
                      - option "Andorra"
                      - option "Angola"
                      - option "Anguilla"
                      - option "Antarctica"
                      - option "Antigua and Barbuda"
                      - option "Argentina"
                      - option "Armenia"
                      - option "Aruba"
                      - option "Australia"
                      - option "Austria"
                      - option "Azerbaijan"
                      - option "Bahamas"
                      - option "Bahrain"
                      - option "Bangladesh"
                      - option "Barbados"
                      - option "Belarus"
                      - option "Belgium"
                      - option "Belize"
                      - option "Benin"
                      - option "Bermuda"
                      - option "Bhutan"
                      - option "Bolivia"
                      - option "Bosnia and Herzegowina"
                      - option "Botswana"
                      - option "Bouvet Island"
                      - option "Brazil"
                      - option "British Indian Ocean Territory"
                      - option "Brunei Darussalam"
                      - option "Bulgaria"
                      - option "Burkina Faso"
                      - option "Burundi"
                      - option "Cambodia"
                      - option "Cameroon"
                      - option "Cape Verde"
                      - option "Cayman Islands"
                      - option "Central African Republic"
                      - option "Chad"
                      - option "Chile"
                      - option "China"
                      - option "Christmas Island"
                      - option "Cocos (Keeling) Islands"
                      - option "Colombia"
                      - option "Comoros"
                      - option "Congo"
                      - option "Cook Islands"
                      - option "Costa Rica"
                      - option "Cote D'Ivoire"
                      - option "Croatia"
                      - option "Cuba"
                      - option "Cyprus"
                      - option "Czech Republic"
                      - option "Denmark"
                      - option "Djibouti"
                      - option "Dominica"
                      - option "Dominican Republic"
                      - option "Ecuador"
                      - option "Egypt"
                      - option "El Salvador"
                      - option "Equatorial Guinea"
                      - option "Eritrea"
                      - option "Estonia"
                      - option "Ethiopia"
                      - option "Falkland Islands (Malvinas)"
                      - option "Faroe Islands"
                      - option "Fiji"
                      - option "Finland"
                      - option "France"
                      - option "French Guiana"
                      - option "French Polynesia"
                      - option "French Southern Territories"
                      - option "Gabon"
                      - option "Gambia"
                      - option "Georgia"
                      - option "Germany"
                      - option "Ghana"
                      - option "Gibraltar"
                      - option "Greece"
                      - option "Greenland"
                      - option "Grenada"
                      - option "Guadeloupe"
                      - option "Guam"
                      - option "Guatemala"
                      - option "Guinea"
                      - option "Guinea-bissau"
                      - option "Guyana"
                      - option "Haiti"
                      - option "Heard and Mc Donald Islands"
                      - option "Honduras"
                      - option "Hong Kong"
                      - option "Hungary"
                      - option "Iceland"
                      - option "India"
                      - option "Indonesia"
                      - option "Iran (Islamic Republic of)"
                      - option "Iraq"
                      - option "Ireland"
                      - option "Israel"
                      - option "Italy"
                      - option "Jamaica"
                      - option "Japan"
                      - option "Jordan"
                      - option "Kazakhstan"
                      - option "Kenya"
                      - option "Kiribati"
                      - option "Korea"
                      - option "Korea, Democratic People's Republic of"
                      - option "Kuwait"
                      - option "Kyrgyzstan"
                      - option "Lao People's Democratic Republic"
                      - option "Latvia"
                      - option "Lebanon"
                      - option "Lesotho"
                      - option "Liberia"
                      - option "Libyan Arab Jamahiriya"
                      - option "Liechtenstein"
                      - option "Lithuania"
                      - option "Luxembourg"
                      - option "Macau"
                      - option "Macedonia"
                      - option "Madagascar"
                      - option "Malawi"
                      - option "Malaysia"
                      - option "Maldives"
                      - option "Mali"
                      - option "Malta"
                      - option "Marshall Islands"
                      - option "Martinique"
                      - option "Mauritania"
                      - option "Mauritius"
                      - option "Mayotte"
                      - option "Mexico"
                      - option "Micronesia"
                      - option "Moldova"
                      - option "Monaco"
                      - option "Mongolia"
                      - option "Montenegro"
                      - option "Montserrat"
                      - option "Morocco"
                      - option "Mozambique"
                      - option "Myanmar"
                      - option "Namibia"
                      - option "Nauru"
                      - option "Nepal"
                      - option "Netherlands"
                      - option "Netherlands Antilles"
                      - option "New Caledonia"
                      - option "New Zealand"
                      - option "Nicaragua"
                      - option "Niger"
                      - option "Nigeria"
                      - option "Niue"
                      - option "Norfolk Island"
                      - option "Northern Mariana Islands"
                      - option "Norway"
                      - option "Oman"
                      - option "Pakistan"
                      - option "Palau"
                      - option "Panama"
                      - option "Papua New Guinea"
                      - option "Paraguay"
                      - option "Peru"
                      - option "Philippines"
                      - option "Pitcairn"
                      - option "Poland"
                      - option "Portugal"
                      - option "Puerto Rico"
                      - option "Qatar"
                      - option "Reunion"
                      - option "Romania"
                      - option "Russia"
                      - option "Rwanda"
                      - option "Saint Kitts and Nevis"
                      - option "Saint Lucia"
                      - option "Saint Vincent and the Grenadines"
                      - option "Samoa"
                      - option "San Marino"
                      - option "Sao Tome and Principe"
                      - option "Saudi Arabia"
                      - option "Senegal"
                      - option "Serbia"
                      - option "Seychelles"
                      - option "Sierra Leone"
                      - option "Singapore"
                      - option "Slovakia (Slovak Republic)"
                      - option "Slovenia"
                      - option "Solomon Islands"
                      - option "Somalia"
                      - option "South Africa"
                      - option "South Georgia & South Sandwich Islands"
                      - option "Spain"
                      - option "Sri Lanka"
                      - option "St. Helena"
                      - option "St. Pierre and Miquelon"
                      - option "Sudan"
                      - option "Suriname"
                      - option "Svalbard and Jan Mayen Islands"
                      - option "Swaziland"
                      - option "Sweden"
                      - option "Switzerland"
                      - option "Syrian Arab Republic"
                      - option "Taiwan"
                      - option "Tajikistan"
                      - option "Tanzania"
                      - option "Thailand"
                      - option "Togo"
                      - option "Tokelau"
                      - option "Tonga"
                      - option "Trinidad and Tobago"
                      - option "Tunisia"
                      - option "Turkey"
                      - option "Turkmenistan"
                      - option "Turks and Caicos Islands"
                      - option "Tuvalu"
                      - option "Uganda"
                      - option "Ukraine"
                      - option "United Arab Emirates"
                      - option "United Kingdom"
                      - option "United States minor outlying islands"
                      - option "Uruguay"
                      - option "Uzbekistan"
                      - option "Vanuatu"
                      - option "Vatican City State (Holy See)"
                      - option "Venezuela"
                      - option "Viet Nam"
                      - option "Virgin Islands (British)"
                      - option "Virgin Islands (U.S.)"
                      - option "Wallis and Futuna Islands"
                      - option "Western Sahara"
                      - option "Yemen"
                      - option "Zambia"
                      - option "Zimbabwe"
                    - text: "*"
                  - generic [ref=f5e120]:
                    - generic [ref=f5e121]: "State / province:"
                    - combobox "State / province:" [ref=f5e122]:
                      - option "Other (Non US)" [selected]
                  - generic [ref=f5e123]:
                    - generic [ref=f5e124]: "Zip / postal code:"
                    - textbox "Zip / postal code:" [ref=f5e125]
                  - button "Estimate shipping" [ref=f5e127] [cursor=pointer]
            - generic [ref=f5e128]:
              - table [ref=f5e130]:
                - rowgroup [ref=f5e131]:
                  - row [ref=f5e132]:
                    - cell "Sub-Total:" [ref=f5e133]
                    - cell "11.00" [ref=f5e134]
                  - row [ref=f5e136]:
                    - cell "Shipping:" [ref=f5e137]
                    - cell "Calculated during checkout" [ref=f5e138]
                  - row [ref=f5e140]:
                    - cell "Tax:" [ref=f5e141]
                    - cell "0.00" [ref=f5e142]
                  - row [ref=f5e144]:
                    - cell "Total:" [ref=f5e145]
                    - cell "Calculated during checkout" [ref=f5e146]
              - generic [ref=f5e148]:
                - checkbox [ref=f5e149]
                - text: I agree with the terms of service and I adhere to them unconditionally (read)
              - button "Checkout" [ref=f5e151] [cursor=pointer]
    - generic [ref=f5e153]:
      - generic [ref=f5e154]:
        - generic [ref=f5e155]:
          - heading "Information" [level=3] [ref=f5e156]
          - list [ref=f5e157]:
            - listitem [ref=f5e158]:
              - link "Sitemap" [ref=f5e159] [cursor=pointer]:
                - /url: /sitemap
            - listitem [ref=f5e160]:
              - link "Shipping & Returns" [ref=f5e161] [cursor=pointer]:
                - /url: /shipping-returns
            - listitem [ref=f5e162]:
              - link "Privacy Notice" [ref=f5e163] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=f5e164]:
              - link "Conditions of Use" [ref=f5e165] [cursor=pointer]:
                - /url: /conditions-of-use
            - listitem [ref=f5e166]:
              - link "About us" [ref=f5e167] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=f5e168]:
              - link "Contact us" [ref=f5e169] [cursor=pointer]:
                - /url: /contactus
        - generic [ref=f5e170]:
          - heading "Customer service" [level=3] [ref=f5e171]
          - list [ref=f5e172]:
            - listitem [ref=f5e173]:
              - link "Search" [ref=f5e174] [cursor=pointer]:
                - /url: /search
            - listitem [ref=f5e175]:
              - link "News" [ref=f5e176] [cursor=pointer]:
                - /url: /news
            - listitem [ref=f5e177]:
              - link "Blog" [ref=f5e178] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=f5e179]:
              - link "Recently viewed products" [ref=f5e180] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - listitem [ref=f5e181]:
              - link "Compare products list" [ref=f5e182] [cursor=pointer]:
                - /url: /compareproducts
            - listitem [ref=f5e183]:
              - link "New products" [ref=f5e184] [cursor=pointer]:
                - /url: /newproducts
        - generic [ref=f5e185]:
          - heading "My account" [level=3] [ref=f5e186]
          - list [ref=f5e187]:
            - listitem [ref=f5e188]:
              - link "My account" [ref=f5e189] [cursor=pointer]:
                - /url: /customer/info
            - listitem [ref=f5e190]:
              - link "Orders" [ref=f5e191] [cursor=pointer]:
                - /url: /customer/orders
            - listitem [ref=f5e192]:
              - link "Addresses" [ref=f5e193] [cursor=pointer]:
                - /url: /customer/addresses
            - listitem [ref=f5e194]:
              - link "Shopping cart" [ref=f5e195] [cursor=pointer]:
                - /url: /cart
            - listitem [ref=f5e196]:
              - link "Wishlist" [ref=f5e197] [cursor=pointer]:
                - /url: /wishlist
        - generic [ref=f5e198]:
          - heading "Follow us" [level=3] [ref=f5e199]
          - list [ref=f5e200]:
            - listitem [ref=f5e201]:
              - link "Facebook" [ref=f5e202] [cursor=pointer]:
                - /url: http://www.facebook.com/nopCommerce
            - listitem [ref=f5e203]:
              - link "Twitter" [ref=f5e204] [cursor=pointer]:
                - /url: https://twitter.com/nopCommerce
            - listitem [ref=f5e205]:
              - link "RSS" [ref=f5e206] [cursor=pointer]:
                - /url: /news/rss/1
            - listitem [ref=f5e207]:
              - link "YouTube" [ref=f5e208] [cursor=pointer]:
                - /url: http://www.youtube.com/user/nopCommerce
            - listitem [ref=f5e209]:
              - link "Google+" [ref=f5e210] [cursor=pointer]:
                - /url: https://plus.google.com/+nopcommerce
      - generic [ref=f5e211]:
        - text: Powered by
        - link "nopCommerce" [ref=f5e212] [cursor=pointer]:
          - /url: http://www.nopcommerce.com/
      - generic [ref=f5e213]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
  - list [ref=f5e214]:
    - generic [ref=f5e215]: Blue Jeans
    - generic [ref=f5e216]: TBlue Jeans
```

# Test source

```ts
  1   | import {Page, Locator} from "@playwright/test"
  2   | 
  3   | export class HomePage{
  4   | 
  5   |     /* ------------------- Member variables -------------------*/
  6   |     private readonly page:Page;
  7   |     private readonly userNameLink: Locator;     // a[class='account'])     .nth-child()
  8   |     private readonly logoutLink: Locator;
  9   |     private readonly shoppingCartLink: Locator;
  10  |     private readonly wishlistLink: Locator;
  11  |     private readonly searchBox:Locator;       // input#small-searchterms
  12  |     private readonly searchSubmitButton:Locator; //  input[type='submit']
  13  |     private readonly searchResults:Locator;   //  //div[@class='search-results']//div/h2/a
  14  |     private readonly registerLink:Locator;
  15  |     private readonly loginLink:Locator;
  16  |     private readonly NoProductFoundMsg:Locator;
  17  |     private readonly myaccountLink:Locator;
  18  | 
  19  |     /* ------------------- Contructors -------------------*/
  20  |     constructor(page:Page){
  21  | 
  22  |         this.page = page;
  23  |         this.userNameLink=page.locator("a[class='account']").nth(1);
  24  |         this.logoutLink=page.locator("//a[text()='Log out']");
  25  |         this.shoppingCartLink=page.locator("//a[@class='ico-cart']").nth(1);
  26  |         this.wishlistLink = page.locator("//a[@class='ico-wishlist']").nth(1);
  27  |         this.searchBox = page.locator("input#small-searchterms");
  28  |         this.searchSubmitButton = page.locator("input[type='submit']");
  29  |         this.searchResults=page.locator("div.search-results div.product-item");
  30  |         this.registerLink=page.locator("//a[text()='Register']");
  31  |         this.loginLink=page.locator("//a[text()='Log in']");
  32  |         this.NoProductFoundMsg=page.locator("div.search-results strong");
  33  |         this.myaccountLink=page.locator(".footer a:text('My account')");
  34  | 
  35  |     }
  36  |     
  37  |     /* ----------------------  Action methods  -----------------*/
  38  | 
  39  |     async openRegistrationPage(){
  40  |       await this.registerLink.click();
  41  |     } 
  42  | 
  43  |     async openLoginPage(){
  44  |       await this.loginLink.click();
  45  |     } 
  46  | 
  47  |     async getUserNameValue(){
  48  |         return this.userNameLink;
  49  |     }
  50  | 
  51  |     async getlogoutLink(){
  52  |         return this.logoutLink;
  53  |     }
  54  | 
  55  |     async getShoppingCartLink(){
  56  |         return this.shoppingCartLink;
  57  |     }
  58  | 
  59  |     async getWishlistLink(){
  60  |         return this.wishlistLink;
  61  |     }
  62  | 
  63  |     async EnterItemInSearchBox(value:string){
  64  |           await this.searchBox.fill(value);
  65  |     }
  66  | 
  67  |     async clickSearchSubmitButton(){
> 68  |           await this.searchSubmitButton.click();
      |                                         ^ Error: locator.click: Error: strict mode violation: locator('input[type=\'submit\']') resolved to 6 elements:
  69  |     }
  70  | 
  71  |     async openUserInfo(){
  72  |        await this.userNameLink.click();
  73  |     }
  74  | 
  75  |     async performLogout(){
  76  |        await this.logoutLink.click();
  77  |     }
  78  | 
  79  |     async openShoppingCart(){
  80  |        await this.logoutLink.click();
  81  |     }
  82  | 
  83  |     async openWishlist(){
  84  |         await this.wishlistLink.click();
  85  |     }
  86  | 
  87  |     async getAllSearchResults(){
  88  |         return this.searchResults;
  89  |     }
  90  | 
  91  |     async selectAllSearchResults(){
  92  |       
  93  |         const allItems=await this.searchResults.all();
  94  | 
  95  |         for (const element of allItems) {
  96  |            await element.click();
  97  |         }
  98  |     }
  99  | 
  100 |     async getPageTitle(page:Page){
  101 |         return page.title();
  102 |     }
  103 |     
  104 |       async getNoProductFoundMsg(){
  105 |         return this.NoProductFoundMsg;
  106 |     }
  107 | 
  108 |     async isLogoutLinkVisible(){
  109 |         return this.logoutLink.isVisible();
  110 |     }
  111 | 
  112 | 
  113 |     async clickMyAccountLink(){
  114 |         await this.myaccountLink.click();
  115 |     }
  116 | 
  117 | }
```