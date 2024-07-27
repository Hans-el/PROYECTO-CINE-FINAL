import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { RentarPeliculasComponent } from './componentes/rentar-peliculas/rentar-peliculas.component';
import { AgregarPeliculasComponent } from './componentes/agregar-peliculas/agregar-peliculas.component';
import { PeliculasDisponiblesComponent } from './componentes/peliculas-disponibles/peliculas-disponibles.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaPrincipalComponent,
    RentarPeliculasComponent,
    AgregarPeliculasComponent,
    PeliculasDisponiblesComponent,
    NavigationComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
