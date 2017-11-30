import { ProfesorModel } from './../../models/profesor';
import { CursoModel } from './../../models/curso';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Headers } from '@angular/http';
declare var swal: any;

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  curso_id: String;
  curso: CursoModel = {};
  profesores: ProfesorModel[] = [];
  profesor;

  constructor(private route: ActivatedRoute, private http: Http) {
    this.profesor = {};  
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.curso_id = params.id;
        this.http.get('http://51.143.100.161/cursos/' + this.curso_id)
                    .map(response => response.json())
                    .subscribe(result => {
                      this.curso = result;
                      this.profesores = this.curso.profesores;
                      console.log(this.curso);
                    });
      }
    )
  }

  onCrearProfesor() {
    let headers = new Headers();  
    headers.append('Content-Type', 'application/json');
    this.http.post("http://51.143.100.161/profesores/", JSON.stringify(this.profesor), { headers: headers })
      .map(res => res.json())
      .subscribe(result1 => {
        let profesor: ProfesorModel = result1;
        console.log(profesor.id);
        let json = {
          curso_id: this.curso_id,
          profesor_id: profesor.id
        };
        this.http.post("http://51.143.100.161/profesores/" + profesor.id + "/asignar_curso", JSON.stringify(json), { headers: headers })
        .subscribe(result2 => {
          this.showAlert();
        });
      });
  }

  showAlert() {
    swal({
      title: 'Profesor creado con éxito!',
      text: "El profesor se ha creado y se ha asignado al curso.",
      type: 'success',
    }).then(function() {
      
    })
  }

  public settings = {
    noDataMessage: 'No hay información',
    actions: {
      edit: true,
      delete: false,
      add: false,
      position: 'right',
      title: 'Acciones'
    },
    edit: {
      confirmSave: true,
      editButtonContent: 'Editar',
      deleteButtonContent: 'Borrar',
      saveButtonContent: 'Guardar'
    },
    columns: {
      nombres: {
        title: 'Nombres'
      },
      apellidos: {
        title: 'Apellidos'
      },
      email: {
        title: 'Email'
      },
      tipo: {
        title: 'Tipo'
      }
    }
  };

}
