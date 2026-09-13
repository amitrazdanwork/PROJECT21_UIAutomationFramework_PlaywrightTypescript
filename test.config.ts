
import {Page, Locator} from "@playwright/test";

export class TestConfig{
    
    /* Different application URLs based on test envs */
    static readonly appURL:string = "https://demowebshop.tricentis.com/";
    static readonly csvFilePath:string = "./data/TestData.csv";
    static readonly jsonFilePath:string = "./data/TestData.json";

    /* Test data filePath */
    static getTestDataFilePath(option:string, moduleName:string){
        
       switch(moduleName){
            
             case "Register":
                  console.log("Test module is : "+moduleName);
                  switch(option){

                        case "csv": console.log("test wants data from .csv file");
                                 return "./data/"+moduleName+"/TestData.csv"
                                 break;
                         case "json":
                                console.log("test wants data from .json file");
                                return "./data/"+moduleName+"/TestData.json";
                                break;  
                        default:
                            console.log("Invalid filetype :"+option)
                            return "";
                            break;
                    }
                break;
             
            case "Login":
                  console.log("Test module is : "+moduleName);
                  switch(option){

                        case "csv": console.log("test wants data from .csv file");
                                 return "./data/"+moduleName+"/TestData.csv"        
                                 break;
                         case "json":
                                console.log("test wants data from .json file");
                                return "./data/"+moduleName+"/TestData.json";
                                break;  
                        default:
                            console.log("Invalid filetype :"+option)
                            return "";
                            break;
                    }
                break;
            case "ProductSearch":
                  console.log("Test module is : "+moduleName);
                  switch(option){

                        case "csv": console.log("test wants data from .csv file");
                                 return "./data/"+moduleName+"/TestData.csv"        
                                 break;
                         case "json":
                                console.log("test wants data from .json file");
                                return "./data/"+moduleName+"/TestData.json";
                                break;  
                        default:
                            console.log("Invalid filetype :"+option)
                            return "";
                            break;
                    }
                break;

            case "AddToCart":
                  console.log("Test module is : "+moduleName);
                  switch(option){

                        case "csv": console.log("test wants data from .csv file");
                                 return "./data/"+moduleName+"/TestData.csv"        
                                 break;
                         case "json":
                                console.log("test wants data from .json file");
                                return "./data/"+moduleName+"/TestData.json";
                                break;  
                        default:
                            console.log("Invalid filetype :"+option)
                            return "";
                            break;
                    }
                break;

            case "Logout":
                  console.log("Test module is : "+moduleName);
                  switch(option){

                        case "csv": console.log("test wants data from .csv file");
                                 return "./data/"+moduleName+"/TestData.csv"
                                 break;
                         case "json":
                                console.log("test wants data from .json file");
                                return "./data/"+moduleName+"/TestData.json";
                                break;  
                        default:
                            console.log("Invalid filetype :"+option)
                            return "";
                            break;
                    }
                break;
            default:
                console.log("Invalid module name :"+moduleName)
                return "";
                break;
       }


        
    }

    static getTestURL(){
        return TestConfig.appURL;
    }

    static getTestData(moduleName:string){



    }
}