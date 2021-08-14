import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PortalComponent } from './portal/portal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PortalComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    NgxSpinnerModule,
    MatSelectModule
  ]
})
export class AuthenticationModule { }
