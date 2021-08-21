import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day01';
  Name = 'Osama';

  MyName: string = '';
  MyEmail: string = '';
  MySalary: number = 0;


  constructor() {
    setTimeout(() => {
      this.title = 'Welcome Day 01'
    }, 10000);

  }

  Print(e: any) {
    console.log(e.target.value);
  }

  PrintName() {
    console.log(this.Name);
  }

  PrintAllForm() {
    console.log('MyName : ' + this.MyName);
    console.log('MyEmail : ' + this.MyEmail);
    console.log('MySalary : ' + this.MySalary);
  }

  Clear() {
    this.MyName = '';
    this.MyEmail = '';
    this.MySalary = 0;
  }

  PrintMyName(e: any) {
    if (e.length > 10) { alert('Length Should Less Than 10 .'); }
  }

  PrintMyNameChangeFun(e: any) {
    if (e.target.value.length > 10) { alert('Length Should Less Than 10 .'); }
  }
}
