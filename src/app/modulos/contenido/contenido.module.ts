import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { ContRegistAnteproyectComponent } from './cont-regist-anteproyect/cont-regist-anteproyect.component';
import { ContListItemComponent } from './cont-list-item/cont-list-item.component';
import { ContRegistItemComponent } from './cont-regist-item/cont-regist-item.component';
import { ContConsultCorrecionComponent } from './cont-consult-correcion/cont-consult-correcion.component';
import { ContenidoComponent } from './contenido.component';


@NgModule({
  declarations: [
    ContRegistAnteproyectComponent,
    ContListItemComponent,
    ContRegistItemComponent,
    ContConsultCorrecionComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule
  ]
})
export class ContenidoModule { }
