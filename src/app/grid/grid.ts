/*

Creado por ChatGPT el 2024-06-15

Este código define un componente Angular llamado "Grid" que muestra una tabla de usuarios con funcionalidades de ordenamiento y paginación. El componente utiliza TypeScript para definir la estructura de los datos y las funciones necesarias para manejar la lógica de ordenamiento y paginación. La tabla se renderiza en el archivo HTML asociado, y el estilo se define en un archivo CSS separado. El componente es independiente (standalone) y puede ser utilizado en cualquier parte de la aplicación Angular.

crea en angular un componente llamado que contenga un grid de datos utilizando Angular Aria. El grid debe mostrar una lista de usuarios con las siguientes columnas: Nombre, Apellido, Correo Electrónico y Edad. Además, el grid debe permitir ordenar por cada columna y paginar los resultados.



*/

/*
chatgpt
crea en angular un componente llamado que contenga un grid de datos utilizando Angular Aria. El grid debe mostrar una lista de usuarios con las siguientes columnas: Nombre, Apellido, Correo Electrónico y Edad. Además, el grid debe permitir ordenar por cada columna y paginar los resultados.



*/

/*
chatgpt -> esta se usa en el que sigue !!!! no para este 

crea en angular un componente llamado que contenga un grid de datos utilizando Angular Aria.
 El grid debe mostrar una lista de usuarios con las tres primeras columnas de una tabla en mysql
  Además, el grid debe permitir ordenar por cada columna y paginar los resultados.
al hacer click en el encabezado de cada columna, el grid debe ordenar los datos por esa columna en orden ascendente o descendente.
al hacer click al primer campo de cada fila,de sdebe mandar a la pantalla de crud de ese usuario, utilizando el id del usuario para cargar sus datos en el formulario de edición.


CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` char(30) NOT NULL,
  `password` char(30) DEFAULT NULL,
  `Status` char(10) DEFAULT NULL,
  `nivel` char(10) DEFAULT NULL,
  `boleano` tinyint DEFAULT NULL,
  `numerico` int DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `doble` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



*/



import { Component , Input } from '@angular/core';
import { CommonModule } from '@angular/common';



interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  edad: number;
}

type SortColumn = keyof Usuario;
type SortDirection = 'asc' | 'desc';

@Component({
  standalone: true,
  selector: 'app-grid',
  imports: [CommonModule],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})

export class Grid {

    @Input() datoRecibido: string = 'abc';

  usuarios: Usuario[] = [
    { nombre: 'Juan', apellido: 'Pérez', correo: 'juan@email.com', edad: 28 },
    { nombre: 'Ana', apellido: 'López', correo: 'ana@email.com', edad: 34 },
    { nombre: 'Carlos', apellido: 'Ramírez', correo: 'carlos@email.com', edad: 22 },
    { nombre: 'María', apellido: 'García', correo: 'maria@email.com', edad: 41 },
    { nombre: 'Luis', apellido: 'Torres', correo: 'luis@email.com', edad: 30 },
    { nombre: 'Sofía', apellido: 'Martínez', correo: 'sofia@email.com', edad: 25 },
    { nombre: 'Pedro', apellido: 'Sánchez', correo: 'pedro@email.com', edad: 38 }
  ];

  sortColumn: SortColumn = 'nombre';
  sortDirection: SortDirection = 'asc';

  pageSize = 3;
  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.usuarios.length / this.pageSize);
  }

  get usuariosOrdenados(): Usuario[] {
    return [...this.usuarios].sort((a, b) => {
      const valueA = a[this.sortColumn];
      const valueB = b[this.sortColumn];

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  get usuariosPaginados(): Usuario[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.usuariosOrdenados.slice(start, start + this.pageSize);
  }

  ordenarPor(column: SortColumn): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.currentPage = 1;
  }

  cambiarPagina(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getAriaSort(column: SortColumn): 'ascending' | 'descending' | 'none' {
    if (this.sortColumn !== column) return 'none';
    return this.sortDirection === 'asc' ? 'ascending' : 'descending';
  }

}
