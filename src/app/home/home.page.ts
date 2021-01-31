import { Component } from "@angular/core";
import { DatosMockService } from "../share/datos-mock.service";
import { NavigationExtras, Router } from "@angular/router";
import { AlertController, Platform } from "@ionic/angular";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy/ngx";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  estudios: String[];
  constructor(
    private aler: AlertController,
    private route: Router,
    private platform: Platform,
    private sqlite: SQLite,
    private sqliteDBCopy: SqliteDbCopy,
    private sqliteObject: SQLiteObject
  ) {
    this.platform.ready().then(() => {
      this.sqliteDBCopy
        .copy("Horario16e.db", 0)
        .then((bbddd) => {
          this.sqlite
            .create(this.getConector())
            .then(() => {
              this.sqliteObject
                .executeSql("getEstudios", [])
                .then((estudio) => {
                  this.estudios = estudio;
                })
                .catch(() => {
                  "Fallo al ejecutar la consulta";
                });
            })
            .catch((err) => {
              alert("La bbdd no se ha creado correctamente " + err);
            });
        })
        .catch((err) => {
          alert("La plataforma no está lista " + err);
        });
    });
  }
  private getConector() {
    return {
      name: "Horario16e.db",
      location: "default",
      createFromLocation: 1,
    };
  }
  pasarEstudio(evento: string) {
    let extrasNavegacion: NavigationExtras = {
      state: {
        estudio: evento,
      },
    };
    this.route.navigate(["grupos"], extrasNavegacion);
  }
}
