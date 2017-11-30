import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { LocalDataSource } from 'ng2-smart-table';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-saber-pro',
  templateUrl: './saber-pro.component.html',
  styleUrls: ['./saber-pro.component.scss']
})
export class SaberProComponent implements OnInit {

  public saberPro: any[];
  public source: LocalDataSource;

  constructor(public http: Http) {
    this.source = new LocalDataSource();
  }

  ngOnInit() {
    this.http.get('http://51.143.100.161/saber_pros')
      .map(response => response.json())
      .subscribe(result => {
        this.saberPro = [];
        result.forEach(element => {
          this.http.get('http://51.143.100.161/estudiantes/' + element.estudiante_id)
            .map(response2 => response2.json())
            .subscribe(result2 => {
              element.estudiante_nombres = result2.nombres;
              element.estudiante_apellidos = result2.apellidos;
              element.estudiante_carnet = result2.carnet;
              element.estudiante_email = result2.email;
              element.fecha_nacimiento = result2.fecha_nac;
              element.estudiante_documento = result2.doc_identidad;
              this.saberPro.push(element);
              console.log(this.saberPro);
              this.source.load(this.saberPro);
            });
        });
      });
  }

  public obtenerDatosEstudiante(element): any {
    this.http.get('http://51.143.100.161/estudiantes/' + element.estudiante_id)
            .map(response2 => response2.json())
            .subscribe(result2 => {
              element.estudiante_nombres = result2.nombres;
              element.estudiante_apellidos = result2.apellidos;
              element.estudiante_carnet = result2.carnet;
              element.estudiante_email = result2.email;
              element.fecha_nacimiento = result2.fecha_nac;
              element.estudiante_documento = result2.doc_identidad;
              
            });
            return element;
  }

  public cargarPagos(event) {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('file', file, file.name);
            this.http.post('http://51.143.100.161/saber_pros/cargar_archivo_pagos', formData)
                .map(res => res.json())
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                )
        }
    }

  public exportAsExcelFile(): void {
    const json = this.saberPro;
    const excelFileName = 'saberpro';
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
      tipo_documento: {
        title: 'Tipo Documento',
        editable: false
      },
      estudiante_documento: {
        title: 'Documento',
        editable: false
      },
      fecha_nacimiento: {
        title: 'Fecha Nacimiento',
        editable: false
      },
      observaciones: {
        title: 'Observaciones'
      },
      pago: {
        title: 'Pago',
        editable: false
      },
      inscrito: {
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
