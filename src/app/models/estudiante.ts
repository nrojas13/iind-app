import { MonitoriaModel } from './monitoria';

export class EstudianteModel {
    nombres ?: String;
    apellidos ?: String;
    programa ?: String;
    doble_programa ?: String;
    ssc ?: Number;
    prom_acum ?: Number;
    cred_sem_actual ?: Number;
    sit_academica ?: String;
    email ?: String;
    carnet ?: String;
    celular ?: String;
    doc_identidad ?: String;
    fecha_nac ?: String;
    sexo ?: String;
    ciudad ?: String;
    cred_tomados ?: Number;
    cred_aprobados ?: Number;
    cred_transferidos ?: Number;
    cred_pga ?: Number;
    monitorias ?: MonitoriaModel[];
}