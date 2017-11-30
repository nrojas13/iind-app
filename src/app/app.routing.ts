import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/security/auth-guard.service';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: 'monitorias',
        canActivate: [AuthGuardService],
        data: {
          title: 'Monitorías'
        },
        children: [
          {
            path: 'vermonitorias',
            loadChildren: './monitorias/ver-monitorias/ver-monitorias.module#VerMonitoriasModule',
            canActivate: [AuthGuardService]
          },
          {
            path: 'indicadores',
            loadChildren: './monitorias/indicadores-monitorias/indicadores-monitorias.module#IndicadoresMonitoriasModule',
            canActivate: [AuthGuardService]
          },
          {
            path: 'asignarplazas',
            loadChildren: './monitorias/asignar-plazas/asignar-plazas.module#AsignarPlazasModule',
            canActivate: [AuthGuardService]
          }
        ]
      },
      {
        path: 'administracion',
        canActivate: [AuthGuardService],
        data: {
          title: 'Administración'
        },
        children: [
          {
            path: 'cargardatos',
            loadChildren: './administrador/cargar-datos/cargar-datos.module#CargarDatosModule',
            canActivate: [AuthGuardService]
          },
          {
            path: 'curso',
            loadChildren: './administrador/curso/curso.module#CursoModule',
            canActivate: [AuthGuardService]
          },
          {
            path: 'curso/:id',
            loadChildren: './administrador/curso/curso.module#CursoModule',
            canActivate: [AuthGuardService]
          },
          {
            path: 'vertodos',
            loadChildren: './administrador/ver-todos/ver-todos.module#VerTodosModule',
            canActivate: [AuthGuardService]
          },
          {
            path: 'vercursos',
            loadChildren: './administrador/ver-cursos/ver-cursos.module#VerCursosModule',
            canActivate: [AuthGuardService]
          },
          {
            path: 'indicadores',
            loadChildren: './administrador/indicadores-administrador/indicadores-administrador.module#IndicadoresAdministradorModule',
            canActivate: [AuthGuardService]
          }
        ]
      },
      {
        path: 'login',
        loadChildren: './authentication/login/login.module#LoginModule'
      },
      {
        path: 'practicas',
        loadChildren: './practicas/practicas/practicas.module#PracticasModule'
      },
      {
        path: 'saberpro',
        loadChildren: './saber-pro/saber-pro/saber-pro.module#SaberProModule'
      },
      {
        path: 'noticias',
        loadChildren: './noticias/noticias/noticias.module#NoticiasModule'
      },
      {
        path: 'noticias',
        canActivate: [AuthGuardService],
        data: {
          title: 'Noticias'
        },
        children: [
          {
            path: 'vernoticias',
            loadChildren: './noticias/ver-noticias/ver-noticias.module#VerNoticiasModule',
            canActivate: [AuthGuardService]
          },
          {
            path: 'noticias',
            loadChildren: './noticias/noticias/noticias.module#NoticiasModule',
            canActivate: [AuthGuardService]
          }
        ]
      },
      {
        path: 'notificaciones',
        canActivate: [AuthGuardService],
        data: {
          title: 'Notificaciones'
        },
        children: [
          {
            path: 'vernotificaciones',
            loadChildren: './notificaciones/ver-notificaciones/ver-notificaciones.module#VerNotificacionesModule',
            canActivate: [AuthGuardService]
          },
          {
            path: 'notificaciones',
            loadChildren: './notificaciones/notificaciones/notificaciones.module#NotificacionesModule',
            canActivate: [AuthGuardService]
          }
        ]
      },
      {
        path: 'citas',
        canActivate: [AuthGuardService],
        data: {
          title: 'Citas'
        },
        children: [
          {
            path: 'vercitas',
            loadChildren: './citas/ver-citas/ver-citas.module#VerCitasModule',
            canActivate: [AuthGuardService]
          },
          {
            path: 'citas',
            loadChildren: './citas/citas/citas.module#CitasModule',
            canActivate: [AuthGuardService]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
