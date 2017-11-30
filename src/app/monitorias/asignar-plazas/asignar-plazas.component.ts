import { CursoModel } from './../../models/curso';
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
declare var swal: any;

@Component({
  selector: 'app-asignar-plazas',
  templateUrl: './asignar-plazas.component.html'
})
export class AsignarPlazasComponent implements OnInit {

  public cursos: CursoModel[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://51.143.100.161:3000/cursos/')
                    .map(response => response.json())
                    .subscribe(result => {
                      this.cursos = result;
                    });
  }

  public onActualizar(event) {
    let id = event.newData.id;
    let monitores_requeridos = event.newData.monitores_requeridos;
    let comentarios_plazas = event.newData.comentarios_plazas;
    let headers = new Headers();  
    headers.append('Content-Type', 'application/json');
    let json = {
      monitores_requeridos: monitores_requeridos,
      comentarios_plazas: comentarios_plazas
    };
    this.http.put("http://51.143.100.161:3000/cursos/" + id, JSON.stringify(json), { headers: headers })
      .map(res => res.json())
      .subscribe(result => {
        console.log(result);
        this.showAlert();
        event.confirm.resolve(event.newData);
      });
  }

  showAlert() {
    swal({
      title: 'Curso actualizado con éxito!',
      text: "Se ha cambiado el número de monitores para el curso",
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
      nombre_curso: {
        title: 'Nombre',
        editable: false
      },
      monitores_solicitados: {
        title: 'Monitores Seleccionados',
        editable: false
      },
      monitores_requeridos: {
        title: 'Plazas Calculadas'
      },
      comentarios_plazas: {
        title: 'Comentarios'
      }
    }
  };

}
