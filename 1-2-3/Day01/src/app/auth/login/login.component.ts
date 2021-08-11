import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(){
    if(this.email.hasError('required')){return 'Please Enter Value.'}
    
    if(this.email.hasError('email')){return 'Please Enter Email.'}else{return ''}
  }
}
