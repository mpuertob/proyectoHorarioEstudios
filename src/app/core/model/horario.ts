import { Asignatura } from "./asignatura";

export class Horario {
  private _cabecera: String[] = ["HORA"];
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
  obtenerAsingnaturaConcreta(hora: String): String {
    // let asignatura: Asignatura = this._diasClases.get("LUNES").get(hora)[0];
    return "CAC";
  }
}
