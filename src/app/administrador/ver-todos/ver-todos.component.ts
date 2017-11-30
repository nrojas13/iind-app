import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { EstudianteModel } from '../../models/estudiante';

@Component({
  selector: 'app-ver-todos',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.scss']
})
export class VerTodosComponent implements OnInit {

  estudiantes: EstudianteModel[];

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/estudiantes')
                      .map(response => response.json())
                      .subscribe(result => {
                        console.log(result);
                        this.estudiantes = result;
                      });
  }

  public settings = {
    noDataMessage: 'No hay información',
    actions: {
      edit: false,
      delete: false,
      add: false,
      position: 'right',
      title: 'Acciones'
    },
    columns: {
      carnet: {
        title: 'Código',
        editable: false
      },
      apellidos: {
        title: 'Apellidos',
        editable: false
      },
      nombres: {
        title: 'Nombres',
        editable: false
      },
      email: {
        title: 'Login',
        editable: false
      },
      prom_acum: {
        title: 'Promedio',
        editable: false
      },
      cred_sem_actual: {
        title: 'Créditos Semestre Actual',
        editable: false
      }
    }
  };

}
