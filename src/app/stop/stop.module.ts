import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopRoutingModule } from './stop-routing.module';
import { StopComponent } from './stop.component';


@NgModule({
  declarations: [StopComponent],
  imports: [
    CommonModule,
    StopRoutingModule
  ]
})
export class StopModule { }
