import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(private Spinner : NgxSpinnerService) { }

  ngOnInit(): void {

    this.Spinner.show();

    setTimeout(() => {
      this.Spinner.hide();
    }, 2000);
  }

}
