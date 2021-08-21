import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  FormRegisterTeacher = new FormGroup({
    Id : new FormControl(''),
    Name : new FormControl('',Validators.required),
    CategoryId : new FormControl('',Validators.required)
  })

  DetailsTeacherObject : any = {};
  TeacherList : any = [];
  CategoryList : any = [];
  URL = 'https://localhost:44372/api/Teacher';

  constructor(private http : HttpClient,private toastr : ToastrService,private Spinner:NgxSpinnerService) { }

  GetAllTeacher()
  {
    this.http.get(this.URL).subscribe(R=>{
      this.TeacherList = R as [];
    });
  }

  CreateTeacher()
  {
    var body ={
      Name : this.FormRegisterTeacher.controls.Name.value,
      CategoryId : Number(this.FormRegisterTeacher.controls.CategoryId.value),
    }
    this.http.post(this.URL,body).subscribe(R=>{
      this.toastr.success('Done');
      this.GetAllTeacher();
    },E=>{
      this.toastr.warning('Mistake');
    })
  }

  UpdateTeacher()
  {
    var body ={
      Id : Number(this.FormRegisterTeacher.controls.Id.value),
      Name : this.FormRegisterTeacher.controls.Name.value,
      CategoryId : Number(this.FormRegisterTeacher.controls.CategoryId.value),
    }
    this.http.put(this.URL,body).subscribe(R=>{
      this.toastr.success('Done');
      this.GetAllTeacher();
    },E=>{
      this.toastr.warning('Mistake');
    })
  }

  DeleteTeacher(Id : number)
  {
    this.http.delete(this.URL+'/'+Id).subscribe(R=>{
      this.toastr.success('Done');
      this.GetAllTeacher();
    },E=>{
      this.toastr.warning('Mistake');
    })
  }

  DetailsTeacher(Id : number)
  {
    this.http.get(this.URL+'/'+Id).subscribe(R=>{
      this.DetailsTeacherObject = R;
      this.Spinner.hide();
      console.log(this.DetailsTeacherObject);

      
    },E=>{
      this.toastr.warning('Mistake');
    })
  }

  //---------------------------------------------------------------Search
  SearchByName(Name : string)
  {
    var body ={
      Name : Name
    }
    this.http.post(this.URL+'/SearchByName',body).subscribe(R=>{
      this.TeacherList = R as [];
    },E=>{
      this.toastr.warning('Mistake');
    })
  }

  SearchByCategoryId(Id : number)
  {
    var body ={
      Id : Id
    }
    this.http.post(this.URL+'/SearchByCategoryId',body).subscribe(R=>{
      this.TeacherList = R as [];
    },E=>{
      this.toastr.warning('Mistake');
    })
  }

  //--------------------------------------------------------------------------------------------------------Category
  GetAllCategory()
  {
    this.http.get(this.URL+'/GetAllCategory').subscribe(R=>{
      this.CategoryList = R as [];      
    });
  }
}
