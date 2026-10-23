import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css'
})
export class ReportesComponent {
  listaReportes = [
    { id: 1, nombre: 'Reporte de Usuarios (API)', tipo: 'Externo', fecha: '23/10/2026', estado: 'Disponible', ruta: '/dashboard/reportes/usuarios' },
    { id: 2, nombre: 'Reporte de Ventas Mensuales', tipo: 'Ventas', fecha: '20/10/2026', estado: 'Completado', ruta: null },
    { id: 3, nombre: 'Inventario de Productos', tipo: 'Stock', fecha: '18/10/2026', estado: 'Completado', ruta: null },
    { id: 4, nombre: 'Resumen de Clientes Nuevos', tipo: 'Clientes', fecha: '15/10/2026', estado: 'Completado', ruta: null }
  ];
}