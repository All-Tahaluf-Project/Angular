import { Component, OnInit } from '@angular/core';
import { Category } from '../Shared/Category';
import { MyServiceService } from '../Shared/my-service.service';

@Component({
  selector: 'app-main-category-register',
  templateUrl: './main-category-register.component.html',
  styleUrls: ['./main-category-register.component.css']
})
export class MainCategoryRegisterComponent implements OnInit {

  
  constructor(public Service : MyServiceService) {
   }

  ngOnInit(): void {
  }

  submit()
  {
    console.log(this.Service.MyForm.value);
    
    if(this.Service.MyForm.controls.Id.value == 0)
    {
      var category = new Category();
      
      category.Name = this.Service.MyForm.controls.Name.value;
      category.Description = this.Service.MyForm.controls.Description.value;

      this.Service.AddCategory(category);
    }else{
      var category = new Category();
      
      category.Id = this.Service.MyForm.controls.Id.value;
      category.Name = this.Service.MyForm.controls.Name.value;
      category.Description = this.Service.MyForm.controls.Description.value;

      this.Service.UpdateCategory(category);
    }
  }

  Clear()
  {
    this.Service.MyForm.setValue({
      Id : 0,
      Name : '',
      Description : ''
    })
  }



}
