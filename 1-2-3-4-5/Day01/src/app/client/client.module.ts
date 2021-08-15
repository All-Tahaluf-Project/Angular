import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PortalcardComponent } from './portalcard/portalcard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    HomePageComponent,
    PortalcardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
