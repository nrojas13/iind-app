import { Component, OnInit, ViewChild } from '@angular/core';
import { DayPilotCalendarComponent, DayPilot } from "daypilot-pro-angular";
import { Http, Headers } from '@angular/http';

declare var swal: any;

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  @ViewChild("calendar") calendarHomologaciones : DayPilotCalendarComponent;
  @ViewChild("calendar") calendarConsejería : DayPilotCalendarComponent;

  events_homologaciones: any[];
  events_consejeria: any[];
  administrador_id: String = '2';

  constructor(private http: Http) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    // Events in here
    this.http.get('http://localhost:3000/horarios/')
                    .map(response => response.json())
                    .subscribe(result => {
                      this.events_homologaciones = [];
                      this.events_consejeria = [];
                      result.forEach((obj) => {
                        const event = {
                          text: obj.tipo_cita,
                          start: obj.fecha_inicio,
                          end: obj.fecha_fin                  
                        };
                        if(event.text === 'Homologaciones') {
                          this.events_homologaciones.push(event);
                        } else if(event.text === 'Consejeria') {
                          this.events_consejeria.push(event);
                        }
                      }); 
                    });
  }

  calendarConfigHomologaciones = {
    startDate: DayPilot.Date.today(),
    viewType: "Week",
    onTimeRangeSelected: args => {
      const start = args.start.value;
      const end = args.end.value;
      let inicio = new Date(start).getTime();
      let fin = new Date(end).getTime();
      for(let i = inicio; i < fin; i+=1800000) {
        console.log(new Date(i));
        console.log(new Date(i+1800000));
        const newEvent = {
          text:"Homologaciones", 
          start: new Date(i-18000000),
          end: new Date(i+1800000-18000000)
        };
        this.events_homologaciones.push(newEvent);
        console.log(this.events_homologaciones);
      }
    }
  };
  calendarConfigConsejeria = {
    startDate: DayPilot.Date.today(),
    viewType: "Week",
    onTimeRangeSelected: args => {
      const start = args.start.value;
      const end = args.end.value;
      const newEvent = {
        text:"Consejeria", 
        start: start,
        end: end,
      };
      this.events_consejeria.push(newEvent);
      console.log(this.events_consejeria);
    }
  };

  onGuardarCalendario(tipo_cita) {
    let array = [];
    if(tipo_cita === 'Homologaciones') {
      array = this.events_homologaciones;
    } else if(tipo_cita === 'Consejeria') {
      array = this.events_consejeria;
    }
    array.forEach((obj) => {
      let json = {
        tipo_cita: tipo_cita,
        fecha_inicio: obj.start.value,
        fecha_fin: obj.end.value,
        administrador_id: this.administrador_id
      };
      console.log(JSON.stringify(json));
      let headers = new Headers();  
      headers.append('Content-Type', 'application/json');
      this.http.post("http://localhost:3000/horarios/", JSON.stringify(json), { headers: headers })
        .map(res => res.json())
        .subscribe(result => {
          console.log(result);
        });
    });
  }

  onBorrarUltimo(tipo_cita) {
    let array = [];
    if(tipo_cita === 'Homologaciones') {
      array = this.events_homologaciones;
    } else if(tipo_cita === 'Consejeria') {
      array = this.events_consejeria;
    }
    array.pop();
  }

}
