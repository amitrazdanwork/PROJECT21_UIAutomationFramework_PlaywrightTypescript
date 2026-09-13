import { faker, Sex } from '@faker-js/faker';

export class generateRandomUserData {
    
    //Method 1: For reading data from JSON file
    static getFirstName(){
          
       return faker.person.firstName('male');
    }

     //Method 2: For reading data from JSON file
     static getLastName(){
          
       return faker.person.lastName('male');
     }

     //Method 2: For reading data from JSON file
     static getEmail(){
          
       return faker.internet.email();
     }

         //Method 2: For reading data from JSON file
     static getGender(){
          
       return faker.person.sex();
     }

}