import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-create-cource',
  templateUrl: './create-cource.component.html',
  styleUrls: ['./create-cource.component.css']
})
export class CreateCourceComponent implements OnInit {
  formGroup=new FormGroup({
    CourseName:new FormControl('',[Validators.required]),
    CoursePrice:new FormControl('',Validators.required)
  })
  constructor(private home:HomeService,private toastr:ToastrService,
    private dialog:MatDialogRef<CreateCourceComponent>, @Inject (MAT_DIALOG_DATA) public data:any )  { }
  ngOnInit(): void {
    //MAT_DIALOG_DATA  data is an object  ==> to set the data that the user entered into dialog to form group 
      this.formGroup.controls.CourseName.setValue(this.data.CourseName);
      this.formGroup.controls.CoursePrice.setValue(this.data.CoursePrice);
  }
  saveItem(){
    //get the data from form group then check if there is data (from the user I named it data in constructor)
    //after that send this data to the functions in homeservices that hits to the apis 
    const value=this.formGroup.value;
    if(this.data){
      this.dialog.close({
        ...value,
      })
    }
    else{
      this.dialog.close(value);
    }
    this.home.create(value);
  }

}
