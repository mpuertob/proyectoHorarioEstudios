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
    console.log("Lunes");

    console.log(this._diasClases.get("LUNES"));
    console.log("En la hora: " + hora);
    console.log(this._diasClases.get("LUNES").get(hora));
    // let asignatura: Asignatura = this._diasClases.get("LUNES").get(hora)[0];
    let asignatura: Asignatura[] = this._diasClases.get("LUNES").get(hora);
    let abreviatura: String = "RECREO";
    if (asignatura && asignatura.length > 0) {
      abreviatura = asignatura[0].abreviatura;
    }
    return abreviatura;
  }
}
