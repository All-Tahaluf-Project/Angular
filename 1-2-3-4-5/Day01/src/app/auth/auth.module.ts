import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

//Goo To Shared
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import {MatTableModule} from '@angular/material/table';
// import {MatButtonModule} from '@angular/material/button';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
    // //To Import form-field From Material
    // MatFormFieldModule,
    // //To Import Table From Material
    // MatTableModule,
    // //To Import Button From Material
    // MatButtonModule,
    // //For Two Data Binding
    // MatProgressSpinnerModule,
    // FormsModule,
    // //For Valedation
    // ReactiveFormsModule,
    // MatInputModule,
    // NgxSpinnerModule
  ],
})
export class AuthModule { }
