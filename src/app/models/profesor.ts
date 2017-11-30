import { CursoModel } from './curso';

export class ProfesorModel {
    nombres ?: String;
    apellidos ?: String;
    email ?: String;
    tipo ?: String;
    cursos ?: CursoModel[];
    id ?: String;
}