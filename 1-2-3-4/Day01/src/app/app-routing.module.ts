import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthModule } from './auth/auth.module';
import { ContactusComponent } from './contactus/contactus.component';
// import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'',component:ContactusComponent},
  {path:'Aboutus',component:AboutusComponent},

  //Redirect To AuthModel
  {path:'Auth',loadChildren:()=>AuthModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
