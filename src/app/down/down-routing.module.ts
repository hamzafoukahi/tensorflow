import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownComponent } from './down.component';

const routes: Routes = [{ path: '', component: DownComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownRoutingModule { }
