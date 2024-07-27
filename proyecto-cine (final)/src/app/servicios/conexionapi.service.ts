import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConexionapiService {
  private baseUrl = 'http://localhost:3000/';  

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/peliculas`);
  }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios`);
  }

  getAlquileres(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alquileres`);
  }

  guardarPersona(persona: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/guardar_persona`, persona);
  }

  guardarPelicula(pelicula: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/guardar_pelicula`, pelicula);
  }

  guardarRenta(renta: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/guardar_renta`, renta);
  }

  registro_persona(registro: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registro_persona`, registro);
  }
  
}
