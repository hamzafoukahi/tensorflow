import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Stop3RoutingModule } from './stop3-routing.module';
import { Stop3Component } from './stop3.component';


@NgModule({
  declarations: [Stop3Component],
  imports: [
    CommonModule,
    Stop3RoutingModule
  ]
})
export class Stop3Module { }
