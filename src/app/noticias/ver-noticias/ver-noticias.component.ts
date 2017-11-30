import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
declare var swal: any;

@Component({
  selector: 'app-ver-noticias',
  templateUrl: './ver-noticias.component.html',
  styleUrls: ['./ver-noticias.component.scss']
})
export class VerNoticiasComponent implements OnInit {

  public noticias: any[];

  constructor(public http: Http) {

  }

  ngOnInit() {
    this.http.get('http://51.143.100.161/noticias')
      .map(response => response.json())
      .subscribe(result => {
        this.noticias = result;
        console.log(this.noticias);
      });
  }

  public onActualizar(event) {
    console.log(event);
    let headers = new Headers();  
    headers.append('Content-Type', 'application/json');
    let json = {
      titulo: event.newData.titulo,
      texto: event.newData.texto,
      imagen_url: event.newData.imagen_url
    };
    this.http.put("http://51.143.100.161/noticias/" + event.newData.id, JSON.stringify(json), { headers: headers })
      .map(res => res.json())
      .subscribe(result => {
        console.log(result);
        this.showAlert();
      });
  }

  showAlert() {
    swal({
      title: 'Se ha publicado la noticia!',
      text: "La noticia se ha cargado y está disponible para ser vista",
      type: 'success',
    }).then(function() {
      location.reload();
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
      saveButtonContent: 'Guardar'
    },
    columns: {
      id: {
        title: 'Id',
        editable: false
      },
      titulo: {
        title: 'Título',
        editable: true
      },
      texto: {
        title: 'Cuerpo de la Noticia',
        editable: true
      },
      imagen_url: {
        title: 'Imagen',
        editable: true
      },
      created_at: {
        title: 'Fecha',
        editable: false
      }
    }
  };

}
