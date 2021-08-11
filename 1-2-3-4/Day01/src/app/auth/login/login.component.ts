import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);

  color: ThemePalette = 'accent';
  //determinate To Stop
  //indeterminate To Start 
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  ShowLoader = false;

//  ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
// displayedColumns :string [] = [];

  constructor(private spinner: NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
    // this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
  }

  getErrorMessage(){
    if(this.email.hasError('required')){return 'Please Enter Value.'}
    
    if(this.email.hasError('email')){return 'Please Enter Email.'}else{return ''}
  }

  submit(){
    console.log(this.email.value + '  ' + this.password.value);
    this.ShowLoader = true;
    setTimeout(() => {
      this.mode = 'determinate';
      this.ShowLoader = false;
    }, 5000);
  }

  StartNgxSpinner()
  {
    this.spinner.show();

    setTimeout(() => {
      
      this.spinner.hide();
    }, 5000);
  }

  NevigateToRister()
  {
    this.router.navigateByUrl('/Auth/Register');
    this.router.navigate(['Register']);
  }
}



// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
