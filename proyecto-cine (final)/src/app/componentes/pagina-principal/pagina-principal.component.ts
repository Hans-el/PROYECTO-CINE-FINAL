import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {

  constructor(public authService: AuthService) { }

}
