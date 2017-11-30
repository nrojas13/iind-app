import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-cargar-datos',
  templateUrl: './cargar-datos.component.html'
})
export class CargarDatosComponent implements OnInit {

  constructor(public http: Http) { }

  ngOnInit() {
  }

    cargarInscritos(event) {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('file', file, file.name);
            this.http.post('https://iindinfo.herokuapp.com/administradores/cargar_archivo_estudiantes', formData)
                .map(res => res.json())
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                )
        }
    }
    
    cargarCartelera(event) {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('file', file, file.name);
            this.http.post('https://iindinfo.herokuapp.com/administradores/cargar_archivo_cursos', formData)
                .map(res => res.json())
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                )
        }
    }

}
