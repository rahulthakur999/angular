import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent {
  userData:any={};
  constructor(private _globalServices: GlobalService ){

  }

  loginUserApi(){
    debugger;
    let obj={"username": "emilys",
      "password": "emilyspass",
      "expiresInMins": "30"  
  }
    this._globalServices.loginUser(obj).subscribe((r)=>{
      this.userData=r.data;
    })
  }


  loginUser(){
    //debugger;
    let obj= 

    {
      "UserId": 0,
      "FirstName": null,
      "LastName": null,
      "Name": null,
      "Role": null,
      "Email": "bhimsen6@gmail.com",
      "Mobile": null,
      "Phone": null,
      "CurrentAddress": null,
      "PermanentAddress": null,
      "DistrictId": null,
      "ZipCode": null,
      "StateId": null,
      "CountryId": null,
      "Password": "@dm!n",
      "ConfirmPassword": null,
      "Organisation": null,
      "CreatedBy": null,
      "Created_On": null,
      "UpdatedBy": null,
      "Updated_On": null,
      "Is_Active": false,
      "ddlUser": null,
      "ddlRole": null,
      "Role_Id": 0,
      "Id": 0,
      "Mapping_Id": 0
  }
    this._globalServices.loginUser(obj).subscribe((r)=>{
      this.userData=r.data;
    })
  }



}
