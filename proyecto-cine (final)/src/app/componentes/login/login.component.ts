import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    // Aquí debes validar el usuario y la contraseña con tu API
    const user = { username: this.username, password: this.password };
    // Simula la validación del usuario
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.authService.login(user);
      this.router.navigate(['/pagina-principal']); // Cambia a la ruta de la página principal
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
