import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Platform } from "@ionic/angular";
import { CopiaNativoService } from "./copia-nativo.service";
@Injectable({
  providedIn: "root",
})
export class DatosService {
  private db: SQLiteObject;
  private horasList: String[] = [];
  private cursosList: String[] = [];
  private estudiosList: String[] = [];
  private horarioList: String[] = [];
  private abreviatura: String[] = [];
  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private copiaNativo: CopiaNativoService
  ) {}
  executeSentence(
    target: any[],
    sqlSentence: string,
    searchParam: any[]
  ): any[] {
    let consultable = true;
    new Promise((resolve, reject) => {
      console.log(this.db);
      if (!this.db) {
        this.openDB()
          .then(() => {
            resolve(consultable);
          })
          .catch(() => {
            consultable = false;
            reject(consultable);
          });
      } else {
        resolve(consultable);
      }
    })
      .then((bandera) => {
        if (bandera) {
          this.db
            .executeSql(sqlSentence, searchParam)
            .then((data) => {
              for (let i = 0; i < data.rows.length; i++) {
                let obj = data.rows.item(i);
                console.log(obj);
                target.push(obj);
              }
              alert("Se ha realizado toda la consulta bien");
            })
            .catch((e) => {});
        }
      })
      .catch((err) => {});
    return target;
  }

  getHoras() {
    const sql = "Select descripcion as nombre from horasSemana";
    return this.executeSentence(this.horasList, sql, []);
  }

  getCursos(estudios) {
    const sql =
      "SELECT grupo.idGrupo as id, grupo.nombre FROM grupo INNER JOIN estudios ON grupo.idEstudios = estudios.idEstudios  WHERE estudios.nombre LIKE ?";
    return this.executeSentence(this.cursosList, sql, [estudios]);
  }
  getEstudios() {
    const sql = "Select estudios.nombre as nombre from estudios";
    return this.executeSentence(this.estudiosList, sql, []);
  }
  getHorario(grupo: String) {
    const sql =
      "select diaSemana.nombre as dia, horasSemana.descripcion as hora, materia.nombre as materiaAbreviatura from horasSemana, diaClase, materiahoraclase, horaClase, materia, diaSemana, grupo, estudios where grupo.nombre LIKE ? and diaSemana.idDiaSemana==diaClase.idDiaSemana and diaclase.idGrupo==grupo.idGrupo and horaclase.idDiaClase==diaclase.idDiaClase and horaclase.idHorasSemana==horassemana.idHorasSemana and materiahoraclase.idHoraClase==horaclase.idHoraClase and materiahoraclase.idMateria==materia.idMateria group by horaClase.idHorasSemana, horaClase.idDiaClase, horaClase.idHoraClase";
    return this.executeSentence(this.horarioList, sql, [grupo]);
  }
  getNombreAsignatura(abr: String): String {
    this.abreviatura = [];
    const sql =
      "select materia.completo from materia where materia.nombre like ?";

    return this.executeSentence(this.abreviatura, sql, [abr])[0].completo;
  }
  openDB(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.platform
        .ready()
        .then(() => {
          this.copiaNativo
            .copiarBBDD()
            .then(() => {
              this.sqlite
                //si la bbdd no existe la crea y la abre y si existe la abre
                .create(this.getConector())
                .then((db: SQLiteObject) => {
                  this.db = db;
                  resolve("BBDD preparada");
                })
                .catch((err) => {
                  reject("Error en la preparación de la bbdd: " + err);
                });
            })
            .catch();
          //si la plataforma esta preparada voy a abrir la bbdd ya copiada
        })
        .catch();
    });
  }

  private getConector() {
    return {
      name: "Horario16.db",
      location: "default",
      createFromLocation: 1,
    };
  }
}
