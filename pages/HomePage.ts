import {Page, Locator} from "@playwright/test"

export class HomePage{

    /* ------------------- Member variables -------------------*/
    private readonly page:Page;
    private readonly userNameLink: Locator;     // a[class='account'])     .nth-child()
    private readonly logoutLink: Locator;
    private readonly shoppingCartLink: Locator;
    private readonly wishlistLink: Locator;
    private readonly searchBox:Locator;       // input#small-searchterms
    private readonly searchSubmitButton:Locator; //  input[type='submit']
    private readonly searchResults:Locator;   //  //div[@class='search-results']//div/h2/a
    private readonly registerLink:Locator;
    private readonly loginLink:Locator;
    private readonly NoProductFoundMsg:Locator;
    private readonly myaccountLink:Locator;

    /* ------------------- Contructors -------------------*/
    constructor(page:Page){

        this.page = page;
        this.userNameLink=page.locator("a[class='account']").nth(1);
        this.logoutLink=page.locator("//a[text()='Log out']");
        this.shoppingCartLink=page.locator("//a[@class='ico-cart']").nth(1);
        this.wishlistLink = page.locator("//a[@class='ico-wishlist']").nth(1);
        this.searchBox = page.locator("input#small-searchterms");
        this.searchSubmitButton = page.locator("input[type='submit']");
        this.searchResults=page.locator("div.search-results div.product-item");
        this.registerLink=page.locator("//a[text()='Register']");
        this.loginLink=page.locator("//a[text()='Log in']");
        this.NoProductFoundMsg=page.locator("div.search-results strong");
        this.myaccountLink=page.locator(".footer a:text('My account')");

    }
    
    /* ----------------------  Action methods  -----------------*/

    async openRegistrationPage(){
      await this.registerLink.click();
    } 

    async openLoginPage(){
      await this.loginLink.click();
    } 

    async getUserNameValue(){
        return this.userNameLink;
    }

    async getlogoutLink(){
        return this.logoutLink;
    }

    async getShoppingCartLink(){
        return this.shoppingCartLink;
    }

    async getWishlistLink(){
        return this.wishlistLink;
    }

    async EnterItemInSearchBox(value:string){
          await this.searchBox.fill(value);
    }

    async clickSearchSubmitButton(){
          await this.searchSubmitButton.click();
    }

    async openUserInfo(){
       await this.userNameLink.click();
    }

    async performLogout(){
       await this.logoutLink.click();
    }

    async openShoppingCart(){
       await this.logoutLink.click();
    }

    async openWishlist(){
        await this.wishlistLink.click();
    }

    async getAllSearchResults(){
        return this.searchResults;
    }

    async selectAllSearchResults(){
      
        const allItems=await this.searchResults.all();

        for (const element of allItems) {
           await element.click();
        }
    }

    async getPageTitle(page:Page){
        return page.title();
    }
    
      async getNoProductFoundMsg(){
        return this.NoProductFoundMsg;
    }

    async isLogoutLinkVisible(){
        return this.logoutLink.isVisible();
    }


    async clickMyAccountLink(){
        await this.myaccountLink.click();
    }

}