import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StopComponent } from './stop/stop.component';
import { ThreeComponent } from './three/three.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  
  {
    path: 'test/:page',
    component:HomeComponent
  },

  {
    path: 'test2/:page', 
    component:ThreeComponent
  },

  {
    path: 'test3/:page', 
    component:StopComponent
  },

  { path: 'three', loadChildren: () => import('./three/three.module').then(m => m.ThreeModule) },
  { path: 'four', loadChildren: () => import('./four/four.module').then(m => m.FourModule) },
  { path: 'stop', loadChildren: () => import('./stop/stop.module').then(m => m.StopModule) },
  { path: 'down', loadChildren: () => import('./down/down.module').then(m => m.DownModule) },
  { path: 'stop1', loadChildren: () => import('./stop1/stop1.module').then(m => m.Stop1Module) },
  { path: 'stop2', loadChildren: () => import('./stop2/stop2.module').then(m => m.Stop2Module) },
  { path: 'stop3', loadChildren: () => import('./stop3/stop3.module').then(m => m.Stop3Module) },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
