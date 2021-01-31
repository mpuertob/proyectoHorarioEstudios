import { Asignatura } from "./asignatura";

export class Horario {
  private _cabecera: String[] = ["HORA"];
  private _count: number = 0;
  constructor(
    private _tramoHorario: string[],
    private _diasClases: Map<String, Map<String, Asignatura[]>>
  ) {
    let diasSemana = Array.from(this._diasClases.keys());
    diasSemana.forEach((dia) => {
      this._cabecera.push(dia);
    });
  }
  get tramoHorario() {
    return this._tramoHorario;
  }
  get cabecera() {
    return this._cabecera;
  }
  get diasClases() {
    return this._diasClases;
  }
  obtenerAsignatura(hora: String): String {
    if (this._count == 5) {
      this._count = 0;
    }
    let array: Array<String> = Array.from(this._diasClases.keys());
    let dia: String = array[this._count];
    let asignatura: Asignatura[] = this._diasClases.get(dia).get(hora);
    let abreviatura: String = "RECREO";
    if (asignatura && asignatura.length > 0) {
      abreviatura = asignatura[0].abreviatura;
    }
    this._count++;
    return abreviatura;
  }
  obtenerAsignaturasConcretas(hora: String, numero: number): Asignatura[] {
    let array: Array<String> = Array.from(this._diasClases.keys());
    let dia = array[numero];
    let asignaturas: Asignatura[] = this._diasClases.get(dia).get(hora);
    return asignaturas;
  }
}
