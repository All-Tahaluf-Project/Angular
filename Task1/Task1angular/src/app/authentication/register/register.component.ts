import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm = this.formBuilder.group({
    UserName : new FormControl('',Validators.required),
    Email : new FormControl('',[Validators.required,Validators.email]),
    PhoneNumber : new FormControl('',[Validators.required]),
    Gender : new FormControl('',Validators.required),
    FirstName : new FormControl('',Validators.required),
    LastName : new FormControl('',Validators.required),
    Passwords: this.formBuilder.group({
      Password: ['',Validators.required],
      ConfirmPassword: ['',Validators.required]
    }, {validators : this.ComparePsswords})
  });

  ComparePsswords (fb:any)
  {
    let ComfirmPass = fb.get('ConfirmPassword')

    if (ComfirmPass.errors == null || 'passwordMismatch' in ComfirmPass.errors)
    {
      if (fb.get('Password').value != ComfirmPass.value)
      {
        ComfirmPass.setErrors({passwordMismatch : true});
      }else
      {
        ComfirmPass.setErrors(null);
      }
    }
  }

  

  constructor(
    private formBuilder : FormBuilder,
    private Spinner : NgxSpinnerService
    ,private toastr: ToastrService
    ,private router:Router
    ) { 
      
    }

  ngOnInit(): void {
  }

submit()
{
  this.toastr.info('Please Wait...');    
  localStorage.setItem('UserName',this.RegisterForm.value.UserName);
  this.Spinner.show();
  setTimeout(() => {
    this.Spinner.hide();
    this.toastr.success('Hello ' + this.RegisterForm.value.UserName);
    this.router.navigateByUrl('Private');
  }, 2000);
}

}
