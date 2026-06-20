import { CommonModule } from '@angular/common';


import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateForm } from '../template-form/template-form';

interface MenuItem {
  title: string;
  open: boolean;
  children?: MenuItem[];
  liga?: any;

}

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, RouterLink, RouterOutlet],
  standalone: true,
  templateUrl: './add-employee.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './add-employee.css',
})
export class AddEmployee {

menu: MenuItem[] = [
    {
      title: 'Inicio' ,
      open: false,
      children: [
        { title: 'Dashboard', open: false, children: [
          { title: 'General', open: false    },
          { title: 'Analítica', open: false },
          { title: 'Actividad', open: false,
                                              children: [
                                                      { title: 'Paco', open: false },
                                                      { title: 'Hugo', open: false },
                                                      { title: 'Luis', open: false ,  children: [
                                                                                    { title: 'U2', open: false  },
                                                                                    { title: 'Beatles', open: false },
                                                                                    { title: 'Police', open: false }]
                                                      }]
           }
        ]},
        { title: 'Noticias', open: false, children: [
          { title: 'Internas', open: false },
          { title: 'Externas', open: false },
          { title: 'Alertas', open: false }
        ]},
        { title: 'Accesos', open: false, children: [
          { title: 'Favoritos', open: false },
          { title: 'Recientes', open: false },
          { title: 'Guardados', open: false }
        ]}
      ]
    },
    {
      title: 'Usuarios',
      open: false,
      children: [
        { title: 'Lista', open: false, children: [
          { title: 'Activos', open: false },
          { title: 'Inactivos', open: false },
          { title: 'Pendientes', open: false }
        ]},
        { title: 'Roles', open: false, children: [
          { title: 'Admin', open: false },
          { title: 'Editor', open: false },
          { title: 'Visitante', open: false }
        ]},
        { title: 'Permisos', open: false, children: [
          { title: 'Lectura', open: false },
          { title: 'Escritura', open: false },
          { title: 'Eliminación', open: false }
        ]}
      ]
    },
    {
      title: 'Productos',
      open: false,
      children: [
        { title: 'Catálogo', open: false, children: [
          { title: 'Todos', open: false },
          { title: 'Destacados', open: false },
          { title: 'Archivados', open: false }
        ]},
        { title: 'Categorías', open: false, children: [
          { title: 'Crear', open: false },
          { title: 'Editar', open: false },
          { title: 'Ordenar', open: false }
        ]},
        { title: 'Inventario', open: false, children: [
          { title: 'Stock', open: false },
          { title: 'Entradas', open: false },
          { title: 'Salidas', open: false }
        ]}
      ]
    },
    {
      title: 'Reportes',
      open: false,
      children: [
        { title: 'Ventas', open: false, children: [
          { title: 'Diarias', open: false },
          { title: 'Mensuales', open: false },
          { title: 'Anuales', open: false }
        ]},
        { title: 'Finanzas', open: false, children: [
          { title: 'Ingresos', open: false },
          { title: 'Gastos', open: false },
          { title: 'Balance', open: false }
        ]},
        { title: 'Estadísticas', open: false, children: [
          { title: 'Usuarios', open: false },
          { title: 'Productos', open: false },
          { title: 'Tráfico', open: false }
        ]}
      ]
    },
    {
      title: 'Configuración',
      open: false,
      children: [
        { title: 'Perfil', open: false, children: [
          { title: 'Datos personales', open: false },
          { title: 'Avatar', open: false },
          { title: 'Contraseña', open: false }
        ]},
        { title: 'Seguridad', open: false, children: [
          { title: '2FA', open: false },
          { title: 'Sesiones', open: false },
          { title: 'Logs', open: false }
        ]},
        { title: 'Preferencias', open: false, children: [
          { title: 'Tema', open: false },
          { title: 'Idioma', open: false },
          { title: 'Notificaciones', open: false }
        ]}
      ]
    }
  ];

  toggle(item: MenuItem): void {
    item.open = !item.open;
  }
}
