import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AutheraizationGuard } from './autheraization.guard';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {
    path:'aboutus',
    component:AboutusComponent
    },
    {
      path:'contactus',
      component:ContactComponent
    },
       {
      path:'',
      loadChildren:()=>AuthModule
    },
    {
      path:'admin',
      loadChildren:()=>AdminModule,
      canActivate:[AutheraizationGuard]//To applay the guard of the admin module 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
