import fs from 'fs';
import {parse} from "csv-parse/sync"

export class dataProvider{

    //Method 1: For reading data from JSON file
    static ReadDataFromJSON(filePath:string){
      
       let data= fs.readFileSync(filePath, 'utf-8');

       return data;
    }

    //Method 2: For reading data from CSV file
    static ReadDataFromCSV(filePath:string){
      
        let data = parse(fs.readFileSync(filePath), {columns: true, skip_empty_lines: true});

        return data;
    }

}
