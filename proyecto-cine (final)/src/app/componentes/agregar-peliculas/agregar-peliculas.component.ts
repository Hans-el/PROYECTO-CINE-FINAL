import { Component } from '@angular/core';
import { ApiService } from '../../servicios/conexionapi.service';

@Component({
  selector: 'app-agregar-peliculas',
  templateUrl: './agregar-peliculas.component.html',
  styleUrls: ['./agregar-peliculas.component.css']
})
export class AgregarPeliculasComponent {
  pelicula = {
    titulo: '',
    descripcion: '',
    genero: '',
    anio: null
  };
  constructor(private api:ApiService){}

  onSubmit() {
    // Aquí podrías agregar lógica para enviar la película al backend o guardarla en algún servicio
    console.log('Película agregada:', this.pelicula);
    this.api.guardarPelicula(this.pelicula).subscribe((resp:any)=>{
      console.log(resp)
    })
 }
   
}