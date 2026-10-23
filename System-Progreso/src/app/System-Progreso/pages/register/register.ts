import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  nombre = '';
  correo = '';
  contrasena = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    if (!this.nombre || !this.correo || !this.contrasena) {
      this.errorMessage = 'Por favor completa todos los campos.';
      return;
    }

    const success = this.authService.register({
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena
    });

    if (success) {
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'El correo electrónico ya se encuentra registrado.';
    }
  }
}