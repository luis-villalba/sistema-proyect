import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    LoginhomeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
