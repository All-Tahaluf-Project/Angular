import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day01Project';
  name:string='';
  email:string='';
  salary:number=0;
  constructor(){
    setTimeout(()=>{
      this.title='Welcome Day 01';
    },3000);
  }
  handleInput(ev:any){
   if(ev.target.value.length>15)
    alert('Stop writting !!')
  }
  Clear()
{
  this.name='';
  this.email='';
  this.salary=0;
}  
}
