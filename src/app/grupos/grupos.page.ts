import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy/ngx";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Platform } from "@ionic/angular";
@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.page.html",
  styleUrls: ["./grupos.page.scss"],
})
export class GruposPage implements OnInit {
  grupos: String[];
  estudio: string;
  constructor(
    public route: Router,
    private rutaActivada: ActivatedRoute,
    private platform: Platform,
    private sqlite: SQLite,
    private sqliteDBCopy: SqliteDbCopy,
    private sqliteObject: SQLiteObject
  ) {}
  private obtenerGrupos() {
    this.platform
      .ready()
      .then(() => {
        this.sqliteDBCopy
          .copy("nombre", 0)
          .then(() => {
            this.sqlite
              .create(this.getConector())
              .then(() => {
                this.sqliteObject
                  .executeSql("getGrupos", [this.estudio])
                  .then((grupos) => {
                    this.grupos = grupos;
                  })
                  .catch((err) => {
                    alert("Fallo al ejecutar la consulta " + err);
                  });
              })
              .catch(() => {
                alert("No se ha creado la bbdd");
              });
          })
          .catch((err) => {
            alert("No se ha copiado correctamente " + err);
          });
      })
      .catch((err) => {
        alert("La plataforma no está lista " + err);
      });
  }
  ngOnInit() {
    this.rutaActivada.queryParams.subscribe(() => {
      this.estudio = this.route.getCurrentNavigation().extras.state.estudio;
    });
    this.obtenerGrupos();
  }
  pasarGrupoHorario(grupo: string) {
    let extrasNavegacion: NavigationExtras = {
      state: {
        grupoPulsado: grupo,
      },
    };
    this.route.navigate(["horario"], extrasNavegacion);
  }

  private getConector() {
    return {
      name: "Horario16e.db",
      location: "default",
      createFromLocation: 1,
    };
  }
}
