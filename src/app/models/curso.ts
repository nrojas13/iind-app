import { MonitoriaModel } from './monitoria';
import { ProfesorModel } from './profesor';

export class CursoModel {
    nombre_curso ?: String;
    codigo_curso ?: String;
    monitores_solicitados ?: Number;
    monitores_requeridos ?: Number;
    estado ?: Number;
    inscritos ?: Number;
    monitores ?: MonitoriaModel[];
    nombre_link ?: String;
    profesores ?: ProfesorModel[]; 
    comentarios_plazas ?: String;
}