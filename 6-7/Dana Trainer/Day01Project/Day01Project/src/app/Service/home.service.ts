import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  message:string="This message from home Services";
  numberOfActiveCourse=new BehaviorSubject(0);
  number2:number=0;
  selectedCourse:any={};
  data:any[]=[];
  constructor(private http:HttpClient , private toaster:ToastrService, private spiner:NgxSpinnerService,private routr:Router) { }

  getAll(){
    return this.http.get('https://localhost:44334/api/Course');
  }

  getById(id:number){
    this.spiner.show();
    debugger
    this.http.get('https://localhost:44334/api/Course/'+id).subscribe((data:any)=>{
      if(data){
        debugger
        this.selectedCourse=data;
        this.routr.navigate(['client/profile']);
      }
      this.spiner.hide();
    },err=>{
      this.spiner.hide();
      this.toaster.error('Something went worng ,please login again');
      this.routr.navigate(['']);
    }
    
    )
  }
  DeleteItem(id:number){
    //from home service 
    this.spiner.show();
    this.http.delete('https://localhost:44334/api/Course/delete/'+id).subscribe((data:any)=>{
      this.toaster.success('Deleted');
      this.spiner.hide();
    },err=>{
      this.spiner.hide();
    }
    );    
  }
  create(data:any)
  {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.spiner.show();
    this.http.post('https://localhost:44334/api/Course/create',data,requestOptions).subscribe((res:any)=>{
    this.toaster.success('Created');
    this.spiner.hide();
    },err=>{
      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }
}
