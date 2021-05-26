import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownRoutingModule } from './down-routing.module';
import { DownComponent } from './down.component';


@NgModule({
  declarations: [DownComponent],
  imports: [
    CommonModule,
    DownRoutingModule
  ]
})
export class DownModule { }
