import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PortalComponent } from './portal/portal.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PortalComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
