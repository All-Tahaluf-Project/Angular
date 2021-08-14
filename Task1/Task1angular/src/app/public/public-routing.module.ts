import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  {path: '', redirectTo: '/Portal', pathMatch: 'full'},
  {path:'Portal',component:PortalComponent,children:[
    {path:'Aboutus',component:AboutusComponent},
    {path:'Contactus',component:ContactusComponent},
    {path:'Home',component:HomeComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
