import { PracticaModel } from './../../models/practica';
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import json2csv from 'json2csv/lib/json2csv';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styleUrls: ['./practicas.component.scss']
})
export class PracticasComponent implements OnInit {

  public practicas: PracticaModel[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://51.143.100.161/practicas')
      .map(response => response.json())
      .subscribe(result => {
        this.practicas = [];
        console.log(result);
        result.forEach(element => {
          let nuevoElemento = new PracticaModel(element.id, element.estado, element.comentarios, element.charla, element.estudiante_id, element.estudiante.nombres, element.estudiante.apellidos, element.estudiante.email, element.estudiante.ssc, element.estudiante.prom_acum, element.estudiante.carnet);
          this.practicas.push(nuevoElemento);
        });
      });
  }

  public exportAsExcelFile(): void {
    const json = this.practicas;
    const excelFileName = 'practicas';
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public onActualizar(event) {
    if (window.confirm('¿Desea actualizar la práctica?')) {
      let practica_id = event.data.id;
      let json = {
        comentarios: event.newData.comentarios,
        estado: event.newData.estado
      };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http
        .put("http://51.143.100.161/practicas/" + practica_id, JSON.stringify(json), { headers: headers })
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
      estudiante_nombres: {
        title: 'Nombre',
        editable: false
      },
      estudiante_apellidos: {
        title: 'Apellidos',
        editable: false
      },
      estudiante_email: {
        title: 'Email',
        editable: false
      },
      estudiante_carnet: {
        title: 'Código',
        editable: false
      },
      estudiante_ssc: {
        title: 'SSC',
        editable: false
      },
      estudiante_pga: {
        title: 'PGA',
        editable: false
      },
      charla: {
        title: 'Asistió a Charla',
        editable: false
      },
      comentarios: {
        title: 'Comentarios',
        editable: true
      },
      estado: {
        title: 'Estado',
        editor: {
          type: 'list',
          config: {
            list: [ { value: 'Aplico', title: 'Aplicó' }, { value: 'Aprobado', title: 'Aprobado' }, { value: 'Rechazado', title: 'Rechazado' } ]
          }
        }
      }
    }
  };

}
