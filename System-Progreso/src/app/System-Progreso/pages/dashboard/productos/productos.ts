import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {
  listaProductos = [
    { id: 1, nombre: 'Arroz Extra 5kg', categoria: 'Abarrotes', precio: 'S/ 24.50', stock: 50 },
    { id: 2, nombre: 'Aceite Vegetal 1L', categoria: 'Abarrotes', precio: 'S/ 8.90', stock: 120 },
    { id: 3, nombre: 'Azúcar Rubia 1kg', categoria: 'Abarrotes', precio: 'S/ 4.20', stock: 85 },
    { id: 4, nombre: 'Leche Evaporada 400g', categoria: 'Lácteos', precio: 'S/ 3.80', stock: 200 },
    { id: 5, nombre: 'Detergente en Polvo 1kg', categoria: 'Limpieza', precio: 'S/ 10.50', stock: 40 },
    { id: 6, nombre: 'Fideos Tallarín 500g', categoria: 'Abarrotes', precio: 'S/ 2.90', stock: 150 }
  ];
}