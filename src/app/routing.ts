import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: (): any => import('./home/module').then((m) => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class RootRouting {}
