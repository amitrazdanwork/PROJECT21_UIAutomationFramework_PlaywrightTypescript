import {Page, Locator} from "@playwright/test";

export class LoginPage{

    /* ------------------------------------------------------------ Page variables ---------------------------------------------------*/
    private readonly page:Page;
    private readonly title1:Locator;
    private readonly emailLabel:Locator;
    private readonly passwordLabel:Locator;
    private readonly rememberMeLabel:Locator;    //label[text()='Remember me?']
    private readonly rememberMeCheckbox:Locator;   //input#RememberMe
    private readonly forgotPasswordLink:Locator;   //a[text()='Forgot password?']
    private readonly signInButton:Locator; //     input[value='Log in']
    private readonly emailTextbox:Locator; //    input#Email
    private readonly passwordTextbox:Locator; // input#Password
    private readonly FailedErrorMessage:Locator;



    /* Constructor : method for assigning default value or instantiation of class variables */
    constructor(page:Page){

        this.page = page;
        this.title1 = page.locator("//div/strong[text()='Returning Customer']");
        this.emailLabel = page.locator("//label[text()='Email:']");
        this.passwordLabel = page.locator("//label[text()='Password:']");
        this.rememberMeLabel = page.locator("//label[text()='Remember me?']");
        this.rememberMeCheckbox = page.locator("input#RememberMe");
        this.forgotPasswordLink = page.locator("//a[text()='Forgot password?']");
        this.signInButton = page.locator("input[value='Log in']");
        this.emailTextbox = page.locator("input#Email");
        this.passwordTextbox = page.locator("input#Password");
        this.forgotPasswordLink = page.locator("//a[text()='Forgot password?']");
        this.FailedErrorMessage = page.locator("div[class='validation-summary-errors'] span");
    }

    /* -------------------------------------------------- Member functions or Action methods -----------------------------------------*/
    
    async openLoginPage(){
        console.log("Opening Login page");
        await this.page.goto("https://demowebshop.tricentis.com/login");
    }

    async getTitle1Label(){
        return this.title1.innerText();
    }
    
    async getEmailLabel(){
        return this.emailLabel.innerText();
    }

    async getPasswordLabel(){
        return this.passwordLabel.innerText();
    }

    async getRememberMeLabel(){
        return this.rememberMeLabel.innerText();
    }

    async getforgotPasswordLink(){
        return this.forgotPasswordLink.innerText();
    }

    async enterEmail(value:string){
        await this.emailTextbox.fill(value);
    }

    async enterPassword(value:string){
        await this.passwordTextbox.fill(value);
    }

    async selectRememberMeCheckbox(){
        await this.rememberMeCheckbox.click();
    }

    async clickSignInButton(){
        await this.signInButton.click();
    }

    async clickForgotPasswordLink(){
        await this.forgotPasswordLink.click();
    }

    async getFailedLoginError(){
        return this.FailedErrorMessage.innerText();
    }
}