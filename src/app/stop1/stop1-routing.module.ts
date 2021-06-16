import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Stop1Component } from './stop1.component';

const routes: Routes = [{ path: '', component: Stop1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Stop1RoutingModule { }
