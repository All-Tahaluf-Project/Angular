import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

import { NgxSpinnerModule } from "ngx-spinner";
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    TeacherRegisterComponent,
    TeacherDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-left',
     // preventDuplicates: true,
    }),
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,

    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
