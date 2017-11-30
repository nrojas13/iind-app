import { EstudianteModel } from './estudiante';
import { CursoModel} from './curso';
import { SafeHtml } from '@angular/platform-browser';

export class MonitoriaModel {
    id ?: String;
    seleccion_profesor ?: Boolean;
    notificaciones ?: Boolean;
    nota_curso ?: Number;
    estudiante ?: EstudianteModel[];
    estado ?: String;
    curso ?: CursoModel;
    curso_nombre ?: String;
    estudiante_nombres ?: String;
    estudiante_apellidos ?: String;
    estudiante_email ?: String;
    estudiante_cred_sem_actual ?: Number;
    estudiante_promedio ?: Number;
    estudiante_max_creditos ?: Number;
    semestre_curso ?: String;
    doble_monitor ?: Boolean;
    nombre_profesor ?: String;
    segundo_curso ?: String;
    estado_segundo_curso ?: String;
    nota_monitoria ?: String;
    comentarios ?: String;
    entrego_documentos ?: Boolean;
    firmo_convenio ?: Boolean;
    
    constructor(id : String, estado: String, seleccion_profesor: Boolean, nota_curso : Number, estudiante_nombres : String, estudiante_apellidos : String, estudiante_email : String,  estudiante_cred_sem_actual : Number, estudiante_promedio : Number, curso_nombre : String, estudiante_max_creditos : Number, semestre : String, doble_monitor : Boolean, nombre_profesor : String, segundo_curso : String, comentarios : String, estado_segundo_curso : String, entrego_documentos : Boolean, firmo_convenio : Boolean) {
        this.id = id;
        this.estado = estado;
        this.seleccion_profesor = seleccion_profesor;
        this.nota_curso = nota_curso;
        this.estudiante_nombres = estudiante_nombres;
        this.estudiante_apellidos = estudiante_apellidos;
        this.estudiante_email = estudiante_email;
        this.estudiante_cred_sem_actual = estudiante_cred_sem_actual;
        this.estudiante_promedio = estudiante_promedio;
        this.curso_nombre = curso_nombre;
        this.estudiante_max_creditos = estudiante_max_creditos;
        this.semestre_curso = semestre;
        this.doble_monitor = doble_monitor;
        this.nombre_profesor = nombre_profesor;
        this.segundo_curso = segundo_curso;
        this.comentarios = comentarios;
        this.estado_segundo_curso = estado_segundo_curso;
        this.entrego_documentos = entrego_documentos;
        this.firmo_convenio = firmo_convenio;
    }
}