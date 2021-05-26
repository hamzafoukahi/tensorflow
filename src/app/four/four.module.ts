import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourRoutingModule } from './four-routing.module';
import { FourComponent } from './four.component';


@NgModule({
  declarations: [FourComponent],
  imports: [
    CommonModule,
    FourRoutingModule
  ]
})
export class FourModule { }
