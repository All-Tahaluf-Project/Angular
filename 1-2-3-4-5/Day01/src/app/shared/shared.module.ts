import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        //To Import form-field From Material
        MatFormFieldModule,
        //To Import Table From Material
        MatTableModule,
        //To Import Button From Material
        MatButtonModule,
        //For Two Data Binding
        MatProgressSpinnerModule,
        FormsModule,
        //For Valedation
        ReactiveFormsModule,
        MatInputModule,
        NgxSpinnerModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule
  ],
  exports:[
            MatFormFieldModule,
            MatTableModule,
            MatButtonModule,
            MatProgressSpinnerModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            NgxSpinnerModule,
            MatToolbarModule,
            MatCardModule,
            MatIconModule
  ]
})
export class SharedModule { }
