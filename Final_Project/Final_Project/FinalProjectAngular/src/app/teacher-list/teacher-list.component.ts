import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceService } from '../Shared/service.service';
import { TeacherDetailsComponent } from '../teacher-details/teacher-details.component';
import { TeacherRegisterComponent } from '../teacher-register/teacher-register.component';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  SearchName = new FormControl('',Validators.required);
  SearchCategory = new FormControl('',Validators.required);

  constructor(public service : ServiceService,private dialog : MatDialog,private Spinner:NgxSpinnerService ) { }

  ngOnInit(): void {
    this.service.GetAllCategory();
    this.service.GetAllTeacher();
  }

  Update(Teacher : any)
  {
    this.service.FormRegisterTeacher.patchValue({
      Id : Teacher.id,
      Name : Teacher.name,
      CategoryId : String(Teacher.categoryId),
    })

    this.dialog.open(TeacherRegisterComponent);
  }

  Create()
  {
    this.dialog.open(TeacherRegisterComponent);
  }

  Delete(Id : number){
  if(confirm('Are You Sure'))
  {
        this.service.DeleteTeacher(Id);
  }
  }

  Details(Id : number){
    this.Spinner.show();
    this.service.DetailsTeacher(Id);
    this.dialog.open(TeacherDetailsComponent);
  }

  SearchByName(){
    this.service.SearchByName(this.SearchName.value);
  }

  SearchByCategoryId(){
    this.service.SearchByCategoryId(Number(this.SearchCategory.value));
  }

}
