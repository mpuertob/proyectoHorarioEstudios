import { Asignatura } from "./asignatura";

export class Horario {
  private _cabecera: string[] = ["HORA"];
  constructor(
    private _diasSemana: string[],
    private _tramoHorario: string[],
    private _diasClases: Map<String, Map<String, Asignatura[]>>
  ) {
    this._diasSemana.forEach((dia) => {
      this._cabecera.push(dia);
    });
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

  get diasClases() {
    return this._diasClases;
  }
}
