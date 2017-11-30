import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { MonitoriaModel } from '../../models/monitoria';
import { EditarMonitoriaComponent } from './editar-monitoria.component';

@Component({
  selector: 'app-ver-monitorias',
  templateUrl: './ver-monitorias.component.html',
  styleUrls: ['./ver-monitorias.component.scss']
})
export class VerMonitoriasComponent implements OnInit {

  public monitorias: MonitoriaModel[];
  public estados;

  constructor(private http: Http) { 
  }

  ngOnInit() {
    this.http.get('http://51.143.100.161:3000/monitorias')
                      .map(response => response.json())
                      .subscribe(result => {
                        this.monitorias = [];
                        console.log(result);
                        result.forEach(element => {
                          let maxCreditos = 23;
                          if(element.estudiante.prom_acum < 4.0) {
                            maxCreditos = 18;
                          }
                          let nuevoElemento = new MonitoriaModel(element.id,element.estado, element.seleccion_profesor, element.nota_curso, element.estudiante.nombres, element.estudiante.apellidos, element.estudiante.email.split('@')[0], element.estudiante.cred_sem_actual,element.estudiante.prom_acum, element.curso.nombre_curso, maxCreditos, element.semestre_curso, element.doble_monitor, element.nombre_profesor, element.segundo_curso, element.comentarios, element.estado_segundo_curso, element.entrego_documentos, element.firmo_convenio);
                          this.monitorias.push(nuevoElemento);
                        });
                      });
  }

  public onActualizar(event) {
    if (window.confirm('¿Desea actualizar la monitoría?')) {
      let monitoria_id = event.data.id;
      let json = {
        estado: event.newData.estado
      };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http
             .put("http://51.143.100.161:3000/monitorias/" + monitoria_id, JSON.stringify(json), { headers: headers })
             .map(res => res.json())
             .subscribe(result => {
              event.confirm.resolve(event.newData);
              location.reload();
             });
    } else {
      event.confirm.reject();
    }
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
      saveButtonContent: 'Guardar'
    },
    columns: {
      curso_nombre: {
        title: 'Curso',
        editable: false
      },
      estudiante_email: {
        title: 'Email',
        editable: false
      },
      estudiante_nombres: {
        title: 'Nombres',
        editable: false
      },
      estudiante_apellidos: {
        title: 'Apellidos', 
        editable: false
      },
      nota_curso: {
        title: 'Nota Curso',
        editable: false
      },
      semestre_curso: {
        title: 'Semestre que vio',
        editable: false
      },
      doble_monitor: {
        title: 'Doble Monitor',
        editable: false
      },
      segundo_curso: {
        title: 'Segundo Curso',
        editable: false
      },
      estado_segundo_curso: {
        title: 'Estado Segundo Curso',
        editable: false
      },
      nombre_profesor: {
        title: 'Seleccionado por',
        editable: false
      },
      estudiante_promedio: {
        title: 'PGA',
        editable: false
      },
      estudiante_cred_sem_actual: {
        title: 'Creditos Actuales',
        editable: false
      },
      estudiante_max_creditos: {
        title: 'Max. Créditos',
        editable: false
      },
      entrego_documentos: {
        title: 'Entrego Documentos',
        editable: false
      },
      firmo_convenio: {
        title: 'Firmó Convenio',
        editable: false
      },
      estado: {
        title: 'Estado',
        editor: {
          type: 'list',
          config: {
            list: [ { value: 'Aplico', title: 'Aplicó' }, { value: 'Aprobado por Promedio', title: 'Aprobado por Promedio' }, { value: 'Rechazado por Promedio', title: 'Rechazado por Promedio' }, { value: 'No Seleccionado por el Profesor', title: 'No Seleccionado por el Profesor' }, { value: 'Seleccionado por el Profesor Monitor Sencillo', title: 'Seleccionado por el Profesor Monitor Sencillo' }, { value: 'Seleccionado por el Profesor Monitor Doble', title: 'Seleccionado por el Profesor Monitor Doble' }, { value: 'Monitoria Aprobada', title: 'Monitoria Aprobada' } ]
          }
        }
      }
    }
  };
}
