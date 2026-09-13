import {Page, Locator} from "@playwright/test";

export class RegisterPage{

    /* --------------------------------------------    Member variables or Page objects ---------------------------------------*/
    private readonly page:Page; 
    private readonly genderMaleRadio: Locator;
    private readonly genderMaleLabel:Locator;
    private readonly genderFemaleRadio: Locator;
    private readonly genderFemaleLabel:Locator;
    private readonly genderLabel: Locator;
    private readonly firstNameLabel:Locator;
    private readonly lastNameLabel: Locator;
    private readonly firstNameTextbox:Locator;
    private readonly lastNameTextbox: Locator;
    private readonly emailTextbox:Locator;
    private readonly emailLabel: Locator;
    private readonly passwordTextbox:Locator;
    private readonly passwordLabel: Locator;
    private readonly confirmPasswordTextbox:Locator;
    private readonly confirmPasswordLabel: Locator;
    private readonly registerButton: Locator;
    private readonly registerErrorAlreadyExists: Locator;
    private readonly passwordMismatchError: Locator;
    private readonly emailFieldValidationError: Locator;


    /*----------------------------------------------------------   Constructor   ---------------------------------------------------*/
    constructor(page:Page){
       this.page = page;
       this.genderLabel=page.locator("//label[text()='Gender:']");
       this.genderMaleRadio = page.locator("input#gender-male");
       this.genderMaleLabel = page.locator("//label[text()='Male']");
       this.genderFemaleRadio = page.locator("input#gender-female");
       this.genderFemaleLabel = page.locator("//label[text()='Female']");
       this.firstNameLabel = page.locator("//label[text()='First name:']");
       this.firstNameTextbox = page.locator("input#FirstName");
       this.lastNameLabel = page.locator("//label[text()='Last name:']");
       this.lastNameTextbox = page.locator("input#LastName");
       this.emailLabel = page.locator("//label[text()='Email:']");
       this.emailTextbox = page.locator("input#Email");
       this.passwordLabel = page.locator("//label[text()='Password:']");
       this.passwordTextbox= page.locator("input#Password");
       this.confirmPasswordLabel = page.locator("//label[text()='Confirm password:']");
       this.confirmPasswordTextbox= page.locator("input#ConfirmPassword");
       this.registerButton= page.locator("input#register-button");
       this.registerErrorAlreadyExists = page.locator("//div[@class='message-error']/div/ul/li[contains(text(),'The specified email already exists')]");
       this.passwordMismatchError = page.locator("span.field-validation-error span");    
       this.emailFieldValidationError = page.locator("//span[contains(@class, 'validation-error')]/span[@for='Email']");


    }

    /*----------------------------------------------------- Member functions --------------------------------------------------*/

    //Method1: Open register page
    async openRegisterPage(page:Page){
        try {
             await page.goto("https://demowebshop.tricentis.com/register");
        } catch (error) {
            console.log("Error occurred while opening Register page");
            throw error;
        }
    }

    //Method2: Select gender
    async selectGender(value:string){
        try {
             // Added await to click actions
             if(value === "male"){
                 await this.genderMaleRadio.click();
                 return true;
             } else if(value === "female"){
                 await this.genderFemaleRadio.click();
                 return true;
             } else {
                console.log("Invalid gender used : "+value);
                return false;  
             }
        } catch (error) {
            console.log("Error occurred while selecting gender");
            throw error;
        }
    }

    //Method3: Enter firstName
    async enterFirstName(value:string){
        try {
             // Added await to fill action
             await this.firstNameTextbox.fill(value);
        } catch (error) {
              throw error;
        }
    }

    async enterLastName(value:string){
        try {
             // Added await to fill action
             await this.lastNameTextbox.fill(value);
        } catch (error) {
            throw error;
        }
    }

    async enterEmail(value:string){
        try {
             // Added await to fill action
             await this.emailTextbox.fill(value);
        } catch (error) {
            throw error;
        }
    }

    async enterPassword(value:string){
        try {
             // Added await to fill action
             await this.passwordTextbox.fill(value);
        } catch (error) {
             throw error;
        }
    }

    async enterConfirmPassword(value:string){
        try {
             // Added await to fill action
             await this.confirmPasswordTextbox.fill(value);
        } catch (error) {
             throw error;
        }
    }

    async SubmitRegistration(){
        try {
             // Added await to click action
             await this.registerButton.click();
        } catch (error) {
            throw error;
        }
    }

    // Added await to innerText actions
    async getGenderLabel(){
       return await this.genderLabel.innerText();
    }

    async getGenderMaleLabel(){
       return await this.genderMaleLabel.innerText();
    }

    async getGenderFemaleLabel(){
       return await this.genderFemaleLabel.innerText();
    }

    async getFirstNameLabel(){
       return await this.firstNameLabel.innerText();
    }

    async getLastNameLabel(){
       return await this.lastNameLabel.innerText();
    }

    async getEmailLabel(){
       return await this.emailLabel.innerText();
    }

    async getConfirmEmailLabel(){
       return await this.confirmPasswordLabel.innerText();
    }

    async getRegisterErrorAlreadyExists(){
       return await this.registerErrorAlreadyExists.innerText();
    }

    async getPasswordMismatchError(){
       return await this.passwordMismatchError.innerText();
    }

    async getInvalidEmailError(){
      return await this.emailFieldValidationError.innerText();
    }
}