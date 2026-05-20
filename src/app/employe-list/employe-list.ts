import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employe-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './employe-list.html',
  styleUrl: './employe-list.css',
})
export class EmployeList {

 menu = [
    {
      title: 'Inicio',
      open: false,
      subitems: ['Dashboard', 'Resumen', 'Actividad', ['1', '2', '3'] ]
    },
    {
      title: 'Usuarios',
      open: false,
      subitems: ['Lista', 'Roles', 'Permisos']
    },
    {
      title: 'Productos',
      open: false,
      subitems: ['Catálogo', 'Categorías', 'Inventario']
    },
    {
      title: 'Reportes',
      open: false,
      subitems: ['Ventas', 'Finanzas', 'Estadísticas']
    },
    {
      title: 'Configuración',
      open: false,
      subitems: ['Perfil', 'Seguridad', 'Preferencias']
    }
  ];
}
