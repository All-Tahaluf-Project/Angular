import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    FullName : new FormControl('',Validators.required),
    Email : new FormControl('',[Validators.required,Validators.email]),
    Password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    Address : new FormControl(''),
    PhoneNumber : new FormControl('')
  })

  constructor(private spinner : NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
  }

  StartNgxSpinner()
  {
    this.spinner.show();

    setTimeout(() => {
      
      this.spinner.hide();
    }, 5000);
  }

  submit(){
    console.log(this.registerForm);
    
  }

  GoToLogin()
  {
    // this.router.navigateByUrl('/Auth/Login');
    this.router.navigate(['Login']);
  }

}
