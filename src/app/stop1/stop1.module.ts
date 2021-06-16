import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Stop1RoutingModule } from './stop1-routing.module';
import { Stop1Component } from './stop1.component';


@NgModule({
  declarations: [Stop1Component],
  imports: [
    CommonModule,
    Stop1RoutingModule
  ]
})
export class Stop1Module { }
