import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Platform } from "@ionic/angular";
import { CopiaNativoService } from "./copia-nativo.service";
@Injectable({
  providedIn: "root",
})
export class DatosService {
  private db: SQLiteObject;
  private horasList: any[] = [];
  private cursosList: any[] = [];
  private estudiosList: any[] = [];
  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private copiaNativo: CopiaNativoService
  ) {}
  executeSentence(target: any[], sqlSentence: string, searchParam: any[]) {
    alert("Tercero");
    let consultable = true;
    new Promise((resolve, reject) => {
      console.log(this.db);
      if (!this.db) {
        this.openDB()
          .then(() => {
            alert("Cuarto, procedemos a abrir la bbdd");
            alert(this.db);
            resolve(consultable);
          })
          .catch(() => {
            alert("Cuarto, porque ha fallado el abrir la bbdd");
            alert("Fallo en abrir la base de dato cuando no estaba abierta");
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
              alert("Quinto bien");
              for (let i = 0; i < data.rows.length; i++) {
                let obj = data.rows.item(i);
                alert(obj.nombre);
                target.push(obj);
              }
              alert("Se ha realizado toda la consulta bien");
            })
            .catch((e) => {
              alert("Quinto Mal");
              alert("fallo al ejecutar sentencia " + JSON.stringify(e));
            });
        }
      })
      .catch((err) => {
        alert("fallo: " + JSON.stringify(err));
      });
  }

  getHoras() {
    alert("Segundo");
    const sql = "Select descripcion as nombre from horasSemana";
    this.executeSentence(this.horasList, sql, []);
  }

  getCursos(estudios) {
    const sql =
      "SELECT grupo.idGrupo as id, grupo.nombre FROM grupo INNER JOIN estudios ON grupo.idEstudios = estudios.idEstudios  WHERE estudios.nombre LIKE ?";
    this.executeSentence(this.cursosList, sql, [estudios]);
  }
  getEstudios() {
    const sql = "Select estudios.nombre as nombre from estudios";
    this.executeSentence(this.estudiosList, sql, []);
  }
  openDB(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.platform
        .ready()
        .then(() => {
          this.copiaNativo
            .copiarBBDD()
            .then(() => {
              alert("BBDD copiada correctamente procedemos abrir");
              this.sqlite
                //si la bbdd no existe la crea y la abre y si existe la abre
                .create(this.getConector())
                .then((db: SQLiteObject) => {
                  this.db = db;
                  resolve("BBDD preparada");
                })
                .catch((err) => {
                  alert(err);
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
