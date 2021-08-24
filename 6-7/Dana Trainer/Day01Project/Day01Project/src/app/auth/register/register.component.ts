import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    fullName:new FormControl('',Validators.required),
    address:new FormControl(''),
    phoneNumber:new FormControl('') 
  })
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.formRegister.value);
  }

}
