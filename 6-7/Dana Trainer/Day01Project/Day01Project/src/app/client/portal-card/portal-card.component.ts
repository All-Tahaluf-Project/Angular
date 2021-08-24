import { Component,  EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-portal-card',
  templateUrl: './portal-card.component.html',
  styleUrls: ['./portal-card.component.css']
})
export class PortalCardComponent implements OnInit {
 @Input() courseId:number|undefined
 @Input() courseName:string|undefined
 @Input() coursePrice:number|undefined
//  @Input () price:string|undefined
 @Output() goProfile=new EventEmitter();
 
  constructor(public home:HomeService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
showprofile(){
  if(this.courseId){
    this.toastr.success('You are Welcome');
    debugger
    this.home.getById(this.courseId);
  }else{
    this.toastr.warning('This item connot be loded');
  }
  }
  DeleteItem(){
    //from portal.ts
    if(this.courseId){
      
      debugger
      this.home.DeleteItem(this.courseId);
      this.toastr.success('Deleted Item');
    }else{
      this.toastr.warning('This item connot be deleted');
    }
  }
}

