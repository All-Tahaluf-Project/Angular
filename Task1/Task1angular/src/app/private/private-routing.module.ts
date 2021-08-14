import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  {path: '', redirectTo: '/Private/Portal/Home', pathMatch: 'full'},
  {path:'Portal',component:PortalComponent,children:[
    {path:'Home',component:HomeComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
