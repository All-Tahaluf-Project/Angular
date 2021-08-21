import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Shared/service.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  constructor(public service : ServiceService) { }

  ngOnInit(): void {
  }

}
