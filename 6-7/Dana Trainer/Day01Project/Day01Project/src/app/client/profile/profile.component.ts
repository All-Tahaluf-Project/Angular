import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  CurrentCourse1:number=0;
  constructor(public home :HomeService) { }

  ngOnInit(): void {
    this.home.numberOfActiveCourse.subscribe(value=>{
      this.CurrentCourse1=value;
    })
  }

}
