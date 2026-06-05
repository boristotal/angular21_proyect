import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* import { UsuariosService } from './usuarios.service'; */

export interface UsuarioGrid {
  id: number;
  usuario: string;
  password: string;
  Status: string;
}

type SortColumn = 'usuario' | 'password' | 'Status';
type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-grid02',
  imports: [],
  templateUrl: './grid02.html',
  styleUrl: './grid02.css',
})
export class Grid02 {

}
