import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'three', loadChildren: () => import('./three/three.module').then(m => m.ThreeModule) },
  { path: 'four', loadChildren: () => import('./four/four.module').then(m => m.FourModule) },
  { path: 'stop', loadChildren: () => import('./stop/stop.module').then(m => m.StopModule) },
  { path: 'down', loadChildren: () => import('./down/down.module').then(m => m.DownModule) },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
