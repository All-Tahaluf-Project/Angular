import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { PortalCardComponent } from './portal-card/portal-card.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateCourceComponent } from './create-cource/create-cource.component';


@NgModule({
  declarations: [
    HomePageComponent,
    PortalCardComponent,
    ProfileComponent,
    CreateCourceComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
