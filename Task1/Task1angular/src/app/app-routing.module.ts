import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';

const routes: Routes = [
  {path:'',loadChildren:()=>PublicModule},
  {path:'Authentication',loadChildren:()=>AuthenticationModule},
  {path:'Private',loadChildren:()=>PrivateModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
