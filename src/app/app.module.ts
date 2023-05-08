import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modulos/home/home.component';
import { ContConsultCorrecionComponent } from './modulos/contenido/cont-consult-correcion/cont-consult-correcion.component';
import { ContListItemComponent } from './modulos/contenido/cont-list-item/cont-list-item.component';
import { ContRegistAnteproyectComponent } from './modulos/contenido/cont-regist-anteproyect/cont-regist-anteproyect.component';
import { ContRegistItemComponent } from './modulos/contenido/cont-regist-item/cont-regist-item.component';
import { LoginhomeComponent } from './modulos/home/loginhome/loginhome.component';
import { ContenidoComponent } from './modulos/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
   



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
