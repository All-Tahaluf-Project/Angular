import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { AutheraizationGuard } from '../autheraization.guard';
import { ClientModule } from '../client/client.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },{
    path:'register',
    component:RegisterComponent
  },{
    path:'client',
    loadChildren:()=>ClientModule,
    canActivate:[AutheraizationGuard] //To applay the guard of the client module 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
