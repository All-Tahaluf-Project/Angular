import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  UserName : any;
  constructor(private router : Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('UserName') == null)
    {
      this.router.navigateByUrl('Authentication');
      this.toastr.info('LogIn Please ...')
    }
    this.UserName = localStorage.getItem('UserName');
  }

  LogOut()
  {
    localStorage.removeItem('UserName');
    this.router.navigateByUrl('');
  }

}
