import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/Authentication/Portal/Login', pathMatch: 'full'},
  {path:'Portal',component:PortalComponent,children:[
    {path: '', redirectTo: '/Authentication/Portal/Login', pathMatch: 'full'},
    {path:'Login',component:LoginComponent},
    {path:'Register',component:RegisterComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
