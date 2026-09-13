import { Page, Locator } from "@playwright/test";

export class CartPage{

    //Member variables
    private readonly page:Page;
    private readonly pageTitle:Locator;
    private readonly selectedItems:Locator;  // //table[@class='cart']/tbody/tr
    private readonly selectedItemNames:Locator; // //table[@class='cart']/tbody/tr/td[3]/a
    private readonly selectedItemPrice: Locator;     // //table[@class='cart']/tbody/tr/td[6]/span[@class='product-subtotal']
    private readonly cartSubTotalValue:Locator;    // table[class='cart-total'] span[class='product-price'] .nth(1)
   // private readonly cartSubTotalPostTaxValue:Locator;    // table[class='cart-total'] span[class='product-price'] .nth(1)
    private readonly termsOfServiceCheckbox:Locator;  // input#termsofservice
    private readonly checkoutButton:Locator; // button#checkout
    private readonly UpdateCartButton:Locator; // button[name='updatecart']
    private readonly emptyCartMessageLocator:Locator; // div.order-summary-content

    //Constructor
     constructor(page:Page){

       this.page = page;
       this.pageTitle = page.locator("div[class='page-title'] h1");
       this.selectedItems=page.locator("//table[@class='cart']/tbody/tr");
       this.selectedItemNames=page.locator("//table[@class='cart']/tbody/tr/td[3]/a");
       this.selectedItemPrice=page.locator("//table[@class='cart']/tbody/tr/td[6]/span[@class='product-subtotal']");
       this.cartSubTotalValue = page.locator("table[class='cart-total'] span[class='product-price']").nth(1);
       this.termsOfServiceCheckbox=page.locator("input#termsofservice");
       this.checkoutButton=page.locator("button#checkout");
       this.UpdateCartButton=page.locator("input[name='updatecart']");
       this.emptyCartMessageLocator = page.locator("div.order-summary-content");
     }

     //Action Methods

     async getPageTitle(){
        return this.pageTitle.innerText();
     }


      async openCartPage(){
        await this.page.goto("https://demowebshop.tricentis.com/cart");
     }


     async getSelectedItems(){
        return this.selectedItems;
     }

     async getSelectedItemNames(){
        return this.selectedItemNames.allInnerTexts();
     }

     async getSelectedItemPrices(){
        return this.selectedItemPrice.allInnerTexts();
     }

     async getCartSubTotalValue(){
        return this.cartSubTotalValue.innerText();
     }

     async approveTermsOfService(){
        return this.termsOfServiceCheckbox.click();
     }

     async proceedToCheckout(){
        return this.checkoutButton.click();
     }

     async getQuantityCount(itemNum:number){
      
     // return this.page.locator('//table/tbody/tr/td[5]/input').getAttribute('value');

    // console.log("ItemNum: ",await this.page.locator("table.cart tbody tr").nth(0).locator("td").nth(4).locator("input").inputValue());
      return this.selectedItems.nth(0).locator("td").nth(4).locator("input").inputValue();                 //   /td[5]/input').getAttribute('value');
     }

     async selectAllCheckboxes(){
          
       const count= await this.selectedItems.count();
       console.log("Count of selected items in cart: ",count);

         for(let i=1; i<=count; i++){   

            console.log("Inside for loop: ",i);
             await this.page.locator("//table[@class='cart']/tbody/tr[" + i + "]/td[1]/input").click();  // click on remove checkbox for first item in the list
         }
     }


     async clickUpdateCart(){
          
        await this.UpdateCartButton.click();

     }

     async isCartEmptyMessageDisplayed(){
        return this.emptyCartMessageLocator.isVisible();
     }

}