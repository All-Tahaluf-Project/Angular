import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  MyForm :FormGroup = new FormGroup({
    Id : new FormControl(''),
    Name : new FormControl('',Validators.required),
    Description : new FormControl('',Validators.required)
  });

  MyList : Category[] = [];

  //My URL Server
  URL = 'https://localhost:44315/api/';

  constructor(private http : HttpClient ) { }

  GetAll()
  {
    this.http.get(this.URL + 'Category/GetAll').subscribe(R=>{
      this.MyList = R as Category[];
    },E=>{
      alert('Error');
    })
  }

  AddCategory(Category : Category)
  {
    var body = {
      Name : Category.Name,
      Description : Category.Description
    }

    this.http.post(this.URL + 'Category/AddCategory',body).subscribe(R=>{
      this.GetAll();
      alert('Success');
    },E=>{
      alert('Error');
    })
  }

  UpdateCategory(Category : Category)
  {
    var body = {
      Id : Category.Id,
      Name : Category.Name,
      Description : Category.Description
    }

    console.log(body);
    
    this.http.put(this.URL + 'Category/UpdateCategory',body).subscribe(R=>{
      this.GetAll();
      alert('Success');
    },E=>{
      alert('Error');
    })
  }

  DeleteCategory(Id : number)
  {
    this.http.delete(this.URL + 'Category/DeleteCategory/' +Id).subscribe(R=>{
      this.GetAll();
      alert('Success');
    },E=>{
      alert('Error');
    })
  }
}
