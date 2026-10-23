import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../services/api';
import { Progreso } from '../../../../domain/model/Progreso.entity';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class UsuariosComponent implements OnInit {
  usuarios: Progreso[] = [];
  cargando: boolean = true;
  errorCarga: string = '';

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe({
      next: (data: Progreso[]) => {
        console.log('Datos cargados:', data);
        this.usuarios = data;
        this.cargando = false;
        this.cdr.detectChanges(); // Fuerza a Angular a refrescar la vista
      },
      error: (err: any) => {
        console.error('Error:', err);
        this.errorCarga = 'No se pudieron cargar los datos de la API.';
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
}