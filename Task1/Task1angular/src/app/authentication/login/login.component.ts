import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LogInForm:FormGroup = new FormGroup({
    UserName : new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required),
    RememberMe : new FormControl('')
  });

  ImageURL = [
    'pexels-artem-podrez-5726693.jpg',
    'pexels-karolina-grabowska-4021801.jpg',
    'pexels-pixabay-248152.jpg'
  ];
  CountForImage = 0;
  constructor(private Spinner : NgxSpinnerService
    ,private toastr: ToastrService
    ,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('RememberMeUserName') != null){
      this.LogInForm.setValue({
        UserName : localStorage.getItem('RememberMeUserName'),
        Password : localStorage.getItem('RememberMePassword'),
        RememberMe:true
      });
    }
    setInterval(()=>
    {
      if(this.CountForImage < 2){this.CountForImage++;} else {this.CountForImage = 0}
    },4000)
  }

  submit()
  {
 
    this.toastr.info('Please Wait...');    
    if(this.LogInForm.value.RememberMe){
      localStorage.setItem('RememberMeUserName',this.LogInForm.value.UserName);
      localStorage.setItem('RememberMePassword',this.LogInForm.value.Password);
    }else{
      localStorage.removeItem('RememberMeUserName') ;
      localStorage.removeItem('RememberMePassword')  ; 
    }
    localStorage.setItem('UserName',this.LogInForm.value.UserName);
    this.Spinner.show();
    setTimeout(() => {
      this.Spinner.hide();
      this.toastr.success('Hello ' + this.LogInForm.value.UserName);
      this.router.navigateByUrl('Private');
    }, 2000);
  }

}
