import { Routes } from '@angular/router';
import { authGuard } from './System-Progreso/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./System-Progreso/pages/login/login').then(m => m.LoginComponent) 
  },
  { 
    path: 'register', 
    loadComponent: () => import('./System-Progreso/pages/register/register').then(m => m.RegisterComponent) 
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./System-Progreso/pages/dashboard/dashboard').then(m => m.DashboardComponent),
    canActivate: [authGuard],
    children: [
      { 
        path: '', 
        loadComponent: () => import('./System-Progreso/pages/dashboard/home/home').then(m => m.HomeComponent) 
      },
      { 
        path: 'clientes', 
        loadComponent: () => import('./System-Progreso/pages/dashboard/clientes/clientes').then(m => m.ClientesComponent) 
      },
      { 
        path: 'empleados', 
        loadComponent: () => import('./System-Progreso/pages/dashboard/empleados/empleados').then(m => m.EmpleadosComponent) 
      },
      { 
        path: 'productos', 
        loadComponent: () => import('./System-Progreso/pages/dashboard/productos/productos').then(m => m.ProductosComponent) 
      },
      { 
        path: 'reportes', 
        loadComponent: () => import('./System-Progreso/pages/dashboard/reportes/reportes').then(m => m.ReportesComponent) 
      },
      { 
        path: 'reportes/usuarios', 
        loadComponent: () => import('./System-Progreso/pages/dashboard/reportes/usuarios/usuarios').then(m => m.UsuariosComponent) 
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];