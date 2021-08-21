import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../Shared/service.service';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  constructor(public service : ServiceService,private dialog : MatDialogRef<TeacherRegisterComponent>) { }

  ngOnInit(): void {
    this.service.GetAllCategory();
  }

  Submit()
  {
    if(this.service.FormRegisterTeacher.controls.Id.value == '')
    {
      this.service.CreateTeacher();
    }else
    {
      this.service.UpdateTeacher();
    }
    this.service.FormRegisterTeacher.reset();
    this.dialog.close();
  }
}
