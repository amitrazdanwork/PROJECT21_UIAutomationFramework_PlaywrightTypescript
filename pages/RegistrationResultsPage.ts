import {Page, Locator} from "@playwright/test";

export class RegistrationResultsPage{

    /* --------------------------------------------    Member variables or Page objects ---------------------------------------*/
    private readonly page:Page; 
    private readonly successMessage: Locator;
    private readonly continueButton: Locator;
    private readonly logoutButton: Locator;
    private readonly loggedInUser: Locator;


    /*----------------------------------------------------------   Constructor   ---------------------------------------------------*/
    constructor(page:Page){
       this.page = page;
       this.successMessage = page.locator("//div[contains(text(), 'Your registration completed')]");
       this.continueButton = page.locator("input[value='Continue']");
       this.logoutButton = page.locator("//a[contains(text(),'Log out')]");
       this.loggedInUser = page.locator("//a[@class='account']").nth(0);
    }

    /*----------------------------------------------------- Member functions --------------------------------------------------*/

    //Method1: Open register page
    async getPageTitle(page:Page){
        return page.title();
    }

    //method2: get Success message
    async getSuccessMessage(){
        return this.successMessage;
    }

    //method3: Click continue 
    async clickContinue(){
        return this.continueButton.click();
    }

    //method4: Click logout
    async clickLogout(){
        return this.logoutButton.click();
    }

    //method5: Get logged in user name
    async getLoggedInUserName(){
        return this.loggedInUser.innerText();
    }
}
