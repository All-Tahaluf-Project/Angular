import { Component, OnInit } from '@angular/core';

@Component({
  // Name Selector
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Day0';
  constructor() { }

  ngOnInit(): void {
  }

}
