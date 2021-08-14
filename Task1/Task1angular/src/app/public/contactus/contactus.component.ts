import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  ContactUsForm:FormGroup = new FormGroup({
    Name : new FormControl('',Validators.required),
    Email : new FormControl('',[Validators.required,Validators.email]),
    PhoneNumber : new FormControl('',[Validators.required,Validators.minLength(10)]),
    Message : new FormControl('',[Validators.required]),
  })
  
  constructor(private Spinner : NgxSpinnerService
    ,private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  submit()
  {
    this.toastr.info('Please Wait...');
    console.log(this.ContactUsForm.value);
    this.Spinner.show();
    setTimeout(() => {
      this.Spinner.hide();
      this.toastr.success('success');
    }, 2000);
  }

}
