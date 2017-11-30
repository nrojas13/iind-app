import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-monitoria',
  template: `<select>
                <option value="aprobado por coordinacion">Aprobado por Coordinación</option>
                <option value="rechazado por coordinacion">Rechazado por Coordinación</option>
            </select>`
})
export class EditarMonitoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
