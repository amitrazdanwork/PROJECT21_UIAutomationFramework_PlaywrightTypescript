import {Page,Locator} from "@playwright/test";

export class InfoPage{

    //Member variables
    private readonly page:Page;
    private readonly pageHeader:Locator; // div>h1
    private readonly personalDetailsTitle:Locator; // div>strong
    private readonly genderLabel:Locator;         // div>label .nth(1)
    private readonly maleLabel:Locator;         // div>label .nth(2)
    private readonly femaleLabel:Locator;         // div>label .nth(3)
    private readonly firstNameLabel:Locator;         // div>label .nth(4)
    private readonly lastNameLabel:Locator;         // div>label .nth(5)
    private readonly emailLabel:Locator;         // div>label .nth(6)
    private readonly saveButton:Locator;        // input[value='Save']
    private readonly firstNameTextbox:Locator;  // input#FirstName
    private readonly lastNameTextbox:Locator;  // input#LastName
    private readonly emailTextbox:Locator;     //  input#Email
    private readonly maleCheckbox:Locator;
    private readonly femaleCheckbox:Locator;

    //Constructor 
    constructor(page: Page){

        this.page=page;
        this.pageHeader = page.locator("div>h1");
        this.personalDetailsTitle=page.locator("div>strong").nth(2);
        this.genderLabel=page.locator("div>label").nth(1);
        this.maleLabel=page.locator("div>label").nth(2);
        this.femaleLabel=page.locator("div>label").nth(3);
        this.firstNameLabel=page.locator("div>label").nth(4);
        this.lastNameLabel=page.locator("div>label").nth(5);
        this.emailLabel=page.locator("div>label").nth(6);
        this.saveButton=page.locator("input[value='Save']");
        this.firstNameTextbox=page.locator("input#FirstName");
        this.lastNameTextbox=page.locator("input#LastName");
        this.emailTextbox=page.locator("input#Email");
        this.maleCheckbox=page.locator("input#gender-male");
        this.femaleCheckbox=page.locator("input#gender-female");
    }

    //Action methods

    async getPageHeader(){
        return this.pageHeader;
    }

    async getPersonalDetailsTitle(){
        return this.personalDetailsTitle;
    }

    async getGenderLabel(){
        return this.genderLabel;
    }

    async getGenderMaleLabel(){
        return this.maleLabel;
    }

    async getGenderFemaleLabel(){
        return this.femaleLabel;
    }

    async getFirstNameLabel(){
        return this.firstNameLabel;
    }

    async getLastNameLabel(){
        return this.lastNameLabel;
    }

    async getEmailLabel(){
        return this.emailLabel;
    }

    async saveChanges(){
        return this.saveButton.click();
    }

    async updateEmailValue(value:string){
        return this.emailTextbox.fill(value);
    }

    async updateFirstNameValue(value:string){
        return this.firstNameTextbox.fill(value);
    }

    async updateLastNameValue(value:string){
        return this.lastNameTextbox.fill(value);
    }

    async selectGender(value:string){
        if(value==='M'){
            this.maleCheckbox.click();
            return true;
        }  
        else if(value==='F'){
            this.femaleCheckbox.click();
            return true;
        } 
        else
            return false;
    }

    async getPageTitle(){
        return this.page.title();
    }

}