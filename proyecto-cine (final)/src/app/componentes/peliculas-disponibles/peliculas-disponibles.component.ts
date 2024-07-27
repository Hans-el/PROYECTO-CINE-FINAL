import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas-disponibles',
  templateUrl: './peliculas-disponibles.component.html',
  styleUrls: ['./peliculas-disponibles.component.css']
})
export class PeliculasDisponiblesComponent implements OnInit {
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
    },
  ];
  rentarPelicula(pelicula: any) {
    // Lógica para rentar la película, por ejemplo, mostrar un mensaje o enviar una solicitud a un servidor
    console.log(`Película rentada: ${pelicula.titulo}`);
  }
  
  ngOnInit() {}
}
