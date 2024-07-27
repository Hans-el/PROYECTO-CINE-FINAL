import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-rentar-peliculas',
  templateUrl: './rentar-peliculas.component.html',
  styleUrls: ['./rentar-peliculas.component.css']
})
export class RentarPeliculasComponent implements OnInit {
  peliculas = [
    { 
      titulo: 'IRON MAN', 
      descripcion: 'Descripción de la película 1',
      imagen: './assets/images/1.jpg' 
    },
    { 
      titulo: 'THOR 2', 
      descripcion: 'Descripción de la película 2',
      imagen: './assets/images/2.jpg' 
    },
    { 
      titulo: 'THOR 3', 
      descripcion: 'Descripción de la película 3',
      imagen: './assets/images/3.jpg' 
    },
    { 
      titulo: 'RESIDENT EVIL', 
      descripcion: 'Descripción de la película 3',
      imagen: './assets/images/4.jpg' 
    },
    { 
      titulo: 'LA VIEJA GUARDIA', 
      descripcion: 'Descripción de la película 3',
      imagen: './assets/images/5.jpg' 
    }
  ];
  

  ngOnInit(){  }
 

  rentarPelicula(pelicula: Pelicula) {  // Asegúrate de especificar el tipo aquí
    console.log('Película rentada:', pelicula);
    // Aquí podrías agregar lógica para registrar la renta de la película
  }

}