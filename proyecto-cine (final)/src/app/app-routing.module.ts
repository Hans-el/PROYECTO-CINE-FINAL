import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RentarPeliculasComponent } from './componentes/rentar-peliculas/rentar-peliculas.component';
import { AgregarPeliculasComponent } from './componentes/agregar-peliculas/agregar-peliculas.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { PeliculasDisponiblesComponent } from './componentes/peliculas-disponibles/peliculas-disponibles.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'agregar-peliculas', component: AgregarPeliculasComponent },
  { path: 'rentar-peliculas', component: RentarPeliculasComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'peliculas-disponibles', component: PeliculasDisponiblesComponent },
  { path: '', redirectTo: '/pagina-principal', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
