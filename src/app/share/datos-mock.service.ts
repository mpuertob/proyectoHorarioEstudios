import { Injectable } from "@angular/core";
import { Datos } from "../interface/datos";

@Injectable({
  providedIn: "root",
})
export class DatosMockService implements Datos {
  private estudios: Map<String, String[]> = new Map<String, String[]>();
  private diasSemana: string[];
  private tramoHorario: string[];
  constructor() {
    this.crearEstudios();
  }
  private crearEstudios() {
    this.estudios.set("ESO", [
      "e1a",
      "e1b",
      "e1c",
      "e1d",
      "e2a",
      "e2b",
      "e2c",
      "e2d",
      "3a",
      "3b",
      "3c",
      "3d",
      "4a",
      "4b",
      "4c",
    ]);
    this.estudios.set("DIV", ["3div", "4div"]);
    this.estudios.set("BAC", ["1a", "1b", "1c", "2a", "2b", "2c"]);
    this.estudios.set("PCPI", ["1pcpi", "2pcpi"]);
    this.estudios.set("GM", ["1ga", "2ga"]);
    this.estudios.set("GS", ["1af", "1inf", "2af", "2inf"]);
  }
  getEstudios(): String[] {
    let claves = Array.from(this.estudios.keys());
    return claves;
  }
  getGrupos(estudio: string): String[] {
    return this.estudios.get(estudio);
  }
  getDiasSemana(): string[] {
    let diasSemana: string[] = [
      "LUNES",
      "MARTES",
      "MIERCOLES",
      "JUEVES",
      "VIERNES",
    ];
    this.diasSemana = diasSemana;
    return this.diasSemana;
  }
  getTramoHorarios(): string[] {
    let tramoHorario: string[] = [
      "8:10-9:05",
      "9:05-10:00",
      "10:00-10:55",
      "Recreo",
      "11:25-12:20",
      "12:20-13:15",
      "13:15-14:10",
    ];
    this.tramoHorario = tramoHorario;
    return this.tramoHorario;
  }
}
