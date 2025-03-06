import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalles/:id',
    loadChildren: () => import('./paginas/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'carro',
    loadChildren: () => import('./paginas/carro/carro.module').then( m => m.CarroPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./paginas/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./paginas/summary/summary.module').then( m => m.SummaryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
