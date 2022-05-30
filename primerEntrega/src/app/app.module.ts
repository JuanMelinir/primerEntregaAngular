import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListaComponent } from './lista/lista.component';
import { AltaComponent } from './alta/alta.component';
import { BajaComponent } from './baja/baja.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolbarComponent,
    ListaComponent,
    AltaComponent,
    BajaComponent,
    ModificacionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
