import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent implements OnInit {

  noticia: any;

  constructor() { }

  ngOnInit() {
  }

  public onPublicarNoticia() {
    
  }

}
