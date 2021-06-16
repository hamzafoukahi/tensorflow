import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stop2Component } from './stop2.component';

const routes: Routes = [{ path: '', component: Stop2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Stop2RoutingModule { }
