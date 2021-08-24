import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(8)]);

  constructor(private spinner: NgxSpinnerService,private router:Router) { }
  login(){
    console.log(this.email.value);
    console.log(this.password.value);
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
      //because the token will genarate if the user logged in , so I will take this token 

      const responce={
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkRvaW5hIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjI4ODY3MzMwLCJleHAiOjE2Mjg4NzA5MzAsImlhdCI6MTYyODg2NzMzMH0.e37nfw4vBheVGhKIvt7Zu-WosRTfBgyBG77jMkWqOmU"
      };
     //save the token to the local storge using setItem
      localStorage.setItem('token',responce.token);
      //decode the token to extract the role name from the token  
      const data:any=jwtDecode(responce.token);
      //save the decod on the local storge . but you must conver this data to string value using Json.stringify
      localStorage.setItem('user',JSON.stringify({...data,role:'admin'}));
      this.router.navigate(['client']);
    },3000)
  }

}

    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json'
    // }
    // const requestOptions = {                                                                                                                                                                                 
    //   headers: new HttpHeaders(headerDict), 
    // };
    //  this.httpclient.post('http://localhost:5001/api/UserAuth/authenticate',data,
    //  requestOptions).subscribe((data:any)=>{
    //   console.log(data);
    // })

