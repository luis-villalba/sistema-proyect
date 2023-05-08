import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginhomeComponent } from './modulos/home/loginhome/loginhome.component';
import { ContRegistAnteproyectComponent } from './modulos/contenido/cont-regist-anteproyect/cont-regist-anteproyect.component';
import { ContListItemComponent } from './modulos/contenido/cont-list-item/cont-list-item.component';
import { ContRegistItemComponent } from './modulos/contenido/cont-regist-item/cont-regist-item.component';
import { ContConsultCorrecionComponent } from './modulos/contenido/cont-consult-correcion/cont-consult-correcion.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '', loadChildren: () => import('./modulos/contenido/contenido.module').then(m => m.ContenidoModule)
  },
  { path: '', redirectTo: '/loginhome', pathMatch: 'full' },
  { path: 'loginhome', component: LoginhomeComponent },
  { path: 'cont-regist-anteproyect', component: ContRegistAnteproyectComponent },
  { path: 'cont-list-item', component: ContListItemComponent },
  { path: 'cont-regist-item/:id', component: ContRegistItemComponent },
  { path: 'cont-consult-correcion/:id', component: ContConsultCorrecionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
