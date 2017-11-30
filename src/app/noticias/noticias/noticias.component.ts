import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
declare var swal: any;

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  public noticia: any;

  constructor(public http: Http) {
    this.noticia = {};
   }

  ngOnInit() {
  }

  onPublicarNoticia() {
    let headers = new Headers();  
    headers.append('Content-Type', 'application/json');
    let json = {
      titulo: this.noticia.titulo,
      texto: this.noticia.texto,
      semestre: 201720,
      imagen_url: this.noticia.imagen,
      fecha: new Date()
    };
    this.http.post("https://iindinfo.herokuapp.com/noticias/", JSON.stringify(json), { headers: headers })
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
      
    })
  }

}
