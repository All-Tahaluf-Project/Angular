import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Data =[
    {type:'type1',subText:'subText1',description:'description1'},
    {type:'type2',subText:'subText2',description:'description2'},
    {type:'type3',subText:'subText3',description:'description3'},
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  GoToProfile()
  {
    this.router.navigate(['../Client/Profile'])
  }
}
