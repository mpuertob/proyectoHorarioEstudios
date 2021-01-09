import { Asignatura } from "./asignatura";

export class Horario {
  private _cabecera: string[] = ["HORA"];
  constructor(
    private _diasSemana: string[],
    private _tramoHorario: string[],
    private _asignaturas: Map<String, Asignatura>,
    private _diasAsignaturas: Map<String, Asignatura[]>
  ) {
    this._diasSemana.forEach((dia) => {
      this._cabecera.push(dia);
    });
    // console.log("DiasAsignaturas:");
    // console.log(this._diasAsignaturas);
    // console.log("AsignaturaLunes: " + this._diasAsignaturas.get("LUNES"));
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
  get asignaturas() {
    return this._asignaturas;
  }
  get diasAsignaturas() {
    return this._diasAsignaturas;
  }
}
