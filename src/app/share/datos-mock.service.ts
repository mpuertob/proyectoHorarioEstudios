import { Injectable } from "@angular/core";
import { Datos } from "../interface/datos";

@Injectable({
  providedIn: "root",
})
export class DatosMockService implements Datos {
  private estudios: Map<String, String[]> = new Map<String, String[]>();
  constructor() {
    this.crearEstudios();
  }
  private crearEstudios() {
    this.estudios.set("ESO", ["e1a", "e1b", "e1c", "e1d"]);
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
}
