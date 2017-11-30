import { EstudianteModel } from './estudiante';

export class PracticaModel {

    estado ?: String;
    comentarios ?: String;
    charla ?: Boolean;
    estudiante_id ?: String;
    estudiante ?: EstudianteModel;
    id ?: String;
    estudiante_nombres ?: String;
    estudiante_apellidos ?: String;
    estudiante_email ?: String;
    estudiante_ssc ?: String;
    estudiante_pga ?: String;
    estudiante_carnet ?: String;

    constructor(id : String, estado : String, comentarios : String, charla : Boolean, estudiante_id : String, estudiante_nombres : String, estudiante_apellidos : String, estudiante_email : String, estudiante_ssc : String, estudiante_pga : String, estudiante_carnet : String) {
        this.id = id;
        this.estado = estado;
        this.comentarios = comentarios;
        this.charla = charla;
        this.estudiante_id = estudiante_id;
        this.estudiante_nombres = estudiante_nombres;
        this.estudiante_apellidos = estudiante_apellidos;
        this.estudiante_email = estudiante_email;
        this.estudiante_ssc = estudiante_ssc;
        this.estudiante_pga = estudiante_pga;
        this.estudiante_carnet = estudiante_carnet;
    }

}