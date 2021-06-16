import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stop3Component } from './stop3.component';

const routes: Routes = [{ path: '', component: Stop3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Stop3RoutingModule { }
