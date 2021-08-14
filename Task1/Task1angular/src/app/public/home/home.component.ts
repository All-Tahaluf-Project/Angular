import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ImageURL = [
    'pexels-artem-podrez-5726693.jpg',
    'pexels-karolina-grabowska-4021801.jpg',
    'pexels-pixabay-248152.jpg'
  ];
  CountForImage = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>
      {
        if(this.CountForImage < 2){this.CountForImage++;} else {this.CountForImage = 0}
      },4000)
  }

}
