import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientModule } from '../client/client.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  //Redirect To LogIn
  {path:'',component:HomeComponent,children:[
    {path:'Register',component:RegisterComponent},
    {path:'Login',component:LoginComponent},
    {path:'Client',loadChildren:()=>ClientModule}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
