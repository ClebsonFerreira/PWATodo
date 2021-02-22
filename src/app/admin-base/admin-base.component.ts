import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.css']
})
export class AdminBaseComponent implements OnInit {
public base:string = "https://parseapi.back4app.com/";
  constructor() {
    Parse.initialize("AuF3IuJ1Tu1w6Z4w4h30ZzKU3P9qEcB4coTTEVe9","2EqwY3COopXubZeeQ4OdVQQAE9Z4xcrYNH06aKsq");
    Parse.serverURL = 'https://parseapi.back4app.com/'   
   }

  async ngOnInit(): Promise<void> {
    const MyCustomClass = Parse.Object.extend('MyCustomClassName');
    // const myNewObject = new MyCustomClass();
    
    // myNewObject.set('myCustomKey1Name', 'myCustomKey1Value');
    // myNewObject.set('myCustomKey2Name', 'myCustomKey2Value');
    
    // const result = await myNewObject.save();
    // console.log(result);

const query = new Parse.Query(MyCustomClass);
 const result  = await query.find();
 var json = JSON.stringify(result);
 const obj = JSON.parse(json);
console.log(JSON.stringify(result));
console.log(obj);

  }

}
