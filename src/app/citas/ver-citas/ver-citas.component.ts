import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';

declare var swal: any;

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.scss']
})
export class VerCitasComponent implements OnInit {

  citasHomologaciones: any[];
  citasConsejeria: any[];
  eventsHomologaciones: any[];
  eventsConsejeria: any[];
  dias: any[] = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  administrador: String = '2';
  lunesSemana: any = this.getWeek(new Date())[0];
  domingoSemana: any = this.getWeek(new Date())[1];

  constructor(private http: Http) { }

  ngOnInit() {
    console.log(this.getWeek(new Date()));
    this.http.get('http://51.143.100.161:3000/citas/')
      .map(response => response.json())
      .subscribe(result => {
        this.citasHomologaciones = [];
        this.citasConsejeria = [];
        this.eventsHomologaciones = [];
        this.eventsConsejeria = [];
        result.forEach((obj) => {
          const event = {
            text: obj.tipo_cita,
            start: obj.fecha_inicio,
            end: obj.fecha_fin                  
          };
          let inicio = new Date(obj.fecha_inicio);
          if(inicio > this.lunesSemana && inicio < this.domingoSemana) {
            let diaSemanaInicio = this.dias[inicio.getDay()];
            let horaInicio = inicio.getHours();
            let minutosInicio = inicio.getMinutes();
            let fin = new Date(obj.fecha_fin);
            let horaFin = fin.getHours();
            let minutosFin = fin.getMinutes();
            obj.diaSemanaInicio = diaSemanaInicio;
            obj.horaInicio = horaInicio;
            obj.horaFin = horaFin;
            let minutosInicioParsed = minutosInicio === 0 ? '00' : minutosInicio;
            let minutosFinParsed = minutosFin === 0 ? '00' : minutosFin;
            obj.minutosInicio = minutosInicioParsed;
            obj.minutosFin = minutosFinParsed;
            let estado = obj.cancelada === null ? 'Agendada' : 'Cancelada';
            obj.estado = estado;
            if(obj.tipo_cita === "Homologaciones" || obj.tipo_cita === "homologaciones") {
              this.eventsHomologaciones.push(event);
              this.citasHomologaciones.push(obj);
            } else {
              this.eventsConsejeria.push(event);
              this.citasConsejeria.push(obj);
            }
          }
        });
      });
  }

  onVerDetalles(cita) {
    let estudiante_id = cita.estudiante_id;
    this.http.get('http://51.143.100.161:3000/estudiantes/' + estudiante_id)
      .map(response => response.json())
      .subscribe(estudiante => {
        let inicio = new Date(cita.fecha_inicio);
        let fin = new Date(cita.fecha_fin);
        let dia = inicio.getUTCDate() + "/" + inicio.getUTCMonth() + "/" + inicio.getUTCFullYear();
        swal({
          title: 'Cita ' + dia + '\n' + (inicio.getUTCHours()-5) + ':' + inicio.getUTCMinutes(),
          confirmButtonText: "Ok",
          text: "Estudiante: " + estudiante.nombres + ' ' + estudiante.apellidos + '\n' + 'Correo: ' + estudiante.email + '\n' + 'Información: ' + cita.informacion_para_cita + '\n' + 'SSC: ' + estudiante.ssc + '\n' + 'PGA: ' + estudiante.prom_acum
        });
      });
  }

  onCancelar(cita) {
    if(cita.cancelada) {
      swal({
        title: "Alerta",
        text: "La cita ya está cancelada",
        type: "warning"
      });
      return false;
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let json = {
      cancelada: true, 
      cancelada_por_id: this.administrador,
      cancelada_por: 'admin'
    };
    this.http.put('http://51.143.100.161:3000/citas/' + cita.id, JSON.stringify(json), { headers })
      .map(response => response.json())
      .subscribe(result => {
        swal({
          title: "Alerta",
          text: "La cita se ha cancelado",
          type: "success"
        });
      });
  }

  onConfirmarAsistencia(cita) {
    let inicio = new Date(cita.fecha_inicio);
    let hoy = new Date();
    if(inicio > hoy) {
      swal({
        title: "Alerta",
        text: "La fecha aún no llega",
        type: "warning"
      });
      return false;
    } else {
      let json = {
        asistio: true
      }
      let headers = new Headers();  
      headers.append('Content-Type', 'application/json');
      this.http.put("http://51.143.100.161:3000/citas/" + cita.id, JSON.stringify(json), { headers: headers })
        .map(res => res.json())
        .subscribe(result => {
          swal({
            title: "Alerta",
            text: "Se actualizó el estado de la cita",
            type: "success"
          });
        });
    }
  }

  getWeek(date) {
    var now = date? new Date(date) : new Date();
    now.setHours(0,0,0,0);
    var monday = new Date(now);
    monday.setDate(monday.getDate() - monday.getDay() + 1);
    var sunday = new Date(now);
    sunday.setDate(sunday.getDate() - sunday.getDay() + 7);
    return [monday, sunday];
  }

}
