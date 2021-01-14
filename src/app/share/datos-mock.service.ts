import { Injectable } from "@angular/core";
import { Asignatura } from "../core/model/asignatura";
import { Datos } from "../interface/datos";

@Injectable({
  providedIn: "root",
})
export class DatosMockService implements Datos {
  private estudios: Map<String, String[]> = new Map<String, String[]>();
  private diasSemana: string[];
  private tramoHorario: string[];
  private asignaturas: Map<String, Asignatura> = new Map<String, Asignatura>();
  private diasAsignaturas: Map<String, Asignatura[]> = new Map<
    String,
    Asignatura[]
  >();
  constructor() {
    this.crearEstudios();
    this.crearAsignaturas();
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
  private crearAsignaturas() {
    let acceso: Asignatura = new Asignatura("ACADT", "Acceso a datos");
    this.asignaturas.set(acceso.abreviatura, acceso);
    let desarrollo: Asignatura = new Asignatura(
      "DEDIN",
      "Desarrollo de interfaces"
    );
    this.asignaturas.set(desarrollo.abreviatura, desarrollo);

    let empresa: Asignatura = new Asignatura(
      "EIE",
      "Empresa e Iniciativa Emprendedora"
    );
    this.asignaturas.set(empresa.abreviatura, empresa);
    let programacionServicios: Asignatura = new Asignatura(
      "PRSYP",
      "Programación de servicios y procesos"
    );
    this.asignaturas.set(
      programacionServicios.abreviatura,
      programacionServicios
    );
    let programacionMultimedia: Asignatura = new Asignatura(
      "PMYDM",
      "Programación multimedia y dispositivos móviles"
    );
    this.asignaturas.set(
      programacionMultimedia.abreviatura,
      programacionMultimedia
    );
    let gestionEmpresarial: Asignatura = new Asignatura(
      "SIGEE",
      "Sistemas de gestión empresarial"
    );
    this.asignaturas.set(gestionEmpresarial.abreviatura, gestionEmpresarial);
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
      "RECREO",
      "11:25-12:20",
      "12:20-13:15",
      "13:15-14:10",
    ];
    this.tramoHorario = tramoHorario;
    return this.tramoHorario;
  }
  getAsignaturas(): Map<String, Asignatura> {
    return this.asignaturas;
  }
  getDiasClases(): Map<String, Map<String, Asignatura[]>> {
    let diasSemanas = this.getDiasSemana();
    let diaClases: Map<String, Map<String, Asignatura[]>> = new Map<
      String,
      Map<String, Asignatura[]>
    >();
    diasSemanas.forEach((dia) => {
      let mapaHorasConAsignaturas: Map<String, Asignatura[]> = new Map<
        String,
        Asignatura[]
      >();
      for (let i = 0; i < this.getTramoHorarios().length; i++) {
        let hora: string = this.tramoHorario[i];
        if (hora != "RECREO") {
          let asignaturas: Asignatura[] = [];
          asignaturas.push(this.obtenerAsignaturaAleatoria());
          mapaHorasConAsignaturas.set(hora, asignaturas);
        }
      }

      diaClases.set(dia, mapaHorasConAsignaturas);
      let asignaturas: Asignatura[] = [];
      asignaturas.push(this.obtenerAsignaturaAleatoria());
      this.diasAsignaturas.set(dia, asignaturas);
    });
    return diaClases;
  }
  private obtenerAsignaturaAleatoria(): Asignatura {
    let abreviaturas = Array.from(this.getAsignaturas().keys());
    let aleatorio: number = this.obtenerNumeroAleatorio(
      0,
      abreviaturas.length - 1
    );
    return this.asignaturas.get(abreviaturas[aleatorio]);
  }
  private obtenerNumeroAleatorio(min: number, max: number): number {
    return Number((Math.random() * (max - min) + min).toFixed(0));
  }

  obtenerNombreCompleto(abreviatura: String): String {
    let asignatura: Asignatura = this.asignaturas.get(abreviatura);
    return asignatura.nombreCompleto;
  }
}
