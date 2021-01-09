import { Asignatura } from "./asignatura";

export class Horario {
  private _cabecera: string[] = ["HORA"];
  constructor(
    private _diasSemana: string[],
    private _tramoHorario: string[],
    private _diasAsignaturas: Map<String, Map<String, Asignatura[]>>
  ) {
    this._diasSemana.forEach((dia) => {
      this._cabecera.push(dia);
    });
    // console.log("DiasAsignaturas:");
  }
  get diasSemana() {
    return this._diasSemana;
  }
  get tramoHorario() {
    return this._tramoHorario;
  }
  get cabecera() {
    return this._cabecera;
  }
  get diasAsignaturas() {
    return this._diasAsignaturas;
  }
}
