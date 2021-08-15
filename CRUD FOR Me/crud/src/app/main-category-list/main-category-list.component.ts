import { Component, OnInit } from '@angular/core';
import { Category } from '../Shared/Category';
import { MyServiceService } from '../Shared/my-service.service';

@Component({
  selector: 'app-main-category-list',
  templateUrl: './main-category-list.component.html',
  styleUrls: ['./main-category-list.component.css']
})
export class MainCategoryListComponent implements OnInit {

  constructor(public Service : MyServiceService) { }

  ngOnInit(): void {
    this.Service.GetAll();

    setTimeout(() => {
      console.log(this.Service.MyList);      
    }, 1000);
    
  }

  Edit(V : Category){

    this.Service.MyForm.setValue({
      Id: V.id,
      Name : V.name,
      Description:V.description
    });
        
  }

  Delete(id : number)
  {
    if(confirm('Are You Sure'))
    {
      this.Service.DeleteCategory(id);
    }
  }

}
