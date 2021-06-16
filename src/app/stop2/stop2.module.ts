import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Stop2RoutingModule } from './stop2-routing.module';
import { Stop2Component } from './stop2.component';


@NgModule({
  declarations: [Stop2Component],
  imports: [
    CommonModule,
    Stop2RoutingModule
  ]
})
export class Stop2Module { }
