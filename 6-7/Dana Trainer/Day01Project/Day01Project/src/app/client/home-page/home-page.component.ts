import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';
import { CreateCourceComponent } from '../create-cource/create-cource.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(private router:Router,public homeService:HomeService,private toastr:ToastrService,
    private spiner:NgxSpinnerService,private dialog:MatDialog) { }
  CurrentCourse:number=0;
  ngOnInit(): void {
    this.getAll()
    //0
    // this.toastr.success('Success');
    // this.toastr.info('Infoooo');
    // this.toastr.warning('Warning');
    // this.toastr.error('Error ');
    // this.AlertActiveCourse();
    // setInterval(()=>{
    //   //1
    //  this.homeService.numberOfActiveCourse.next(this.homeService.numberOfActiveCourse.value+1)
    // },2000)
    //this.homeService.message="My name is Dana";
  }
  goToProfile()
{
  this.router.navigate(['client/profile']);
}
AlertActiveCourse(){
 this.homeService.numberOfActiveCourse.subscribe((value)=>{
   // alert('The new value is '+this.homeService.numberOfActiveCourse.value);
   this.CurrentCourse=value;
  })
}
//show spiner
//api
//hide spiner
//show toastr

getAll(){
  this.spiner.show();
  this.homeService.getAll().subscribe((res:any)=>{
    this.homeService.data=res;
    this.spiner.hide();
    this.toastr.success('Data Retrived');
  } , err=>{
    this.spiner.hide();
    console.log(err);
    this.toastr.error('something want worring');
  }
  )

}
create(){
  const data={
    CourseName:'TypeScript',
    CoursePrice:5
  }
  this.homeService.create(data);
}
createCourse(){
  //to create the mat dialog --> first , you must imports create an object of MatDialog 
  this.dialog.open(CreateCourceComponent);
}
logout(){
  localStorage.clear();
  this.router.navigate(['']);
}
Admin(){
  this.router.navigate(['admin/admin']);
}
}
