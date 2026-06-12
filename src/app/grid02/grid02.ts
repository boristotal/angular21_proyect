import { Component, OnInit , inject, signal} from '@angular/core';
import { Router } from '@angular/router';
import { Dbconection } from '../services/dbconection';
import {NgFor} from '@angular/common';
import { Grid } from '../grid/grid';

//import { Grid } from '../grid/grid';

export interface UsuarioGrid {
  id: number;
  usuario: string;
  password: string;
  Status: string;
}

type SortColumn = 'usuario' | 'password' | 'Status';
type SortDirection = 'asc' | 'desc';

@Component({
  standalone: true,
  selector: 'app-grid02',
  imports: [NgFor,Grid ],
  templateUrl: './grid02.html',
  styleUrl: './grid02.css',
})
export class Grid02 implements OnInit {

/*from Red */
  private dbService = inject(Dbconection);
  registros = signal<any[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  grid: Grid; 
/*from Red */

data: UsuarioGrid[] = [];

  page = 1;
  limit = 10;
  total = 0;


  

  sortColumn: SortColumn = 'usuario';
  sortDirection: SortDirection = 'asc';

  

  constructor(
    private usuariosService: Dbconection,
    private router: Router
    
  ) {
  console.log('Cargando registros...1');
  this.grid = new Grid();

  
  
  this.cargarRegistros('http://monitor02.redirectme.net:3030/tgcomm/dbcommapi0002.php/?nombre=Laura&edad=54&camposRequest=id,usuario,password,Status&tablaRequest=usuario',"");

this.grid.datoRecibido = 'Valor desde Grid02';

  }

  cargarRegistros(host: string, body: string):void {
  this.cargando.set(true);
  this.error.set(null);   
   console.log('Cargando registros...2'); 
  this.dbService.getDatabaseData(host, body).subscribe( {
    next: (data) => {
    this.registros.set(data);
    this.cargando.set(false);
  }, 
  error: (error) => {
    console.error('Error al obtener los registros',error);
    this.error.set('Error al obtener los registros');
    this.cargando.set(false);
  }
  }   ); 
}

  ngOnInit(): void {
    this.cargarRegistros('http://monitor02.redirectme.net:3030/tgcomm/dbcommapi0002.php/?nombre=Laura&edad=54&camposRequest=id,usuario,password,Status&tablaRequest=usuario',"");
  }

  /*
  cargarUsuarios(): void {
    this.usuariosService.obtenerUsuarios(
      this.page,
      this.limit,
      this.sortColumn,
      this.sortDirection
    ).subscribe({
      next: resp => {
        this.data = resp.data;
        this.total = resp.total;
      },
      error: err => console.error('Error al cargar usuarios', err)
    });
  }
    */

  ordenarPor(columna: SortColumn): void {
    if (this.sortColumn === columna) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = columna;
      this.sortDirection = 'asc';
    }

    this.page = 1;
    this.cargarRegistros('http://monitor02.redirectme.net:3030/tgcomm/dbcommapi0002.php/?nombre=Laura&edad=54&camposRequest=id,usuario,password,Status&tablaRequest=usuario',"");
  }

  editarUsuario(id: number): void {
    this.grid.datoRecibido = 'Valor actualizado desde Grid02';
    this.router.navigate(['/grid', { datoRecibido: id }]);
  }

  paginaAnterior(): void {
    if (this.page > 1) {
      this.page--;
      this.cargarRegistros('http://monitor02.redirectme.net:3030/tgcomm/dbcommapi0002.php/?nombre=Laura&edad=54&camposRequest=id,usuario,password,Status&tablaRequest=usuario',"");
    }
  }

  paginaSiguiente(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.cargarRegistros('http://monitor02.redirectme.net:3030/tgcomm/dbcommapi0002.php/?nombre=Laura&edad=54&camposRequest=id,usuario,password,Status&tablaRequest=usuario',"");
    }
  }

  get totalPages(): number {
    return Math.ceil(this.total / this.limit);
  }

  getAriaSort(columna: SortColumn): 'ascending' | 'descending' | 'none' {
    if (this.sortColumn !== columna) return 'none';
    return this.sortDirection === 'asc' ? 'ascending' : 'descending';
  }
}