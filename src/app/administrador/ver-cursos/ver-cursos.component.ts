import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { CursoModel } from '../../models/curso';

@Component({
  selector: 'app-ver-cursos',
  templateUrl: './ver-cursos.component.html',
  styleUrls: ['./ver-cursos.component.scss']
})
export class VerCursosComponent implements OnInit {

  cursos: CursoModel[];

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('https://iindinfo.herokuapp.com/cursos')
                      .map(response => response.json())
                      .subscribe(result => {
                        this.cursos = result;
                      });
  }

  public onVerCurso (event) {
    this.router.navigate(['/administracion/curso/', event.data.id]);
  }

  public settings = {
    noDataMessage: 'No hay información',
    actions: {
      edit: false,
      delete: false,
      add: false,
      position: 'right',
      custom: [{ name: 'verCurso', title: `Ver` }],
      title: 'Acciones'
    },
    columns: {
      codigo_curso: {
        title: 'Código',
        editable: false
      },
      nombre_curso: {
        title: 'Nombre',
        editable: false,
        type: 'html'
      },
      inscritos: {
        title: 'Inscritos',
        editable: false
      },
      monitores_requeridos: {
        title: 'Plazas Calculadas',
        editable: false
      },
      monitores_solicitados: {
        title: 'Mon. Seleccionados',
        editable: false
      }
    }
  };

}
