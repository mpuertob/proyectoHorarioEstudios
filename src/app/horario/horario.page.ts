import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy/ngx";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Platform, ToastController } from "@ionic/angular";
import { Asignatura } from "../core/model/asignatura";
import { Horario } from "../core/model/horario";

@Component({
  selector: "app-horario",
  templateUrl: "./horario.page.html",
  styleUrls: ["./horario.page.scss"],
})
export class HorarioPage implements OnInit {
  grupoHorario: String;
  horario: Horario;
  tramosHorarios: string[];
  diasClases: Map<String, Map<String, Asignatura[]>>;

  constructor(
    public route: Router,
    private rutaActivada: ActivatedRoute,
    public toast: ToastController,
    private platform: Platform,
    private sqlite: SQLite,
    private sqliteDBCopy: SqliteDbCopy,
    private sqliteObject: SQLiteObject
  ) {
    this.rutaActivada.queryParams.subscribe(() => {
      this.grupoHorario = this.route.getCurrentNavigation().extras.state.grupoPulsado;
    });
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
                  .executeSql("getTramoHorarios", [])
                  .then((tramosHorarios: string[]) => {
                    this.tramosHorarios = tramosHorarios;
                    this.sqliteObject
                      .executeSql("getDiasClases", [])
                      .then((dias) => {
                        this.diasClases = dias;
                        this.horario = new Horario(
                          this.tramosHorarios,
                          this.diasClases
                        );
                      });
                  })
                  .catch((err) => {
                    alert("No se ha podido ejecutar la sentencia " + err);
                  });
              })
              .catch((err) => {
                alert("La bbdd no se ha creado " + err);
              });
          })
          .catch((err) => {
            alert("La bbdd no se ha copiado " + err);
          });
      })
      .catch(() => {
        alert("La plataforma no está lista");
      });
  }

  ngOnInit() {}
  obtenerAsignatura(hora: String) {
    let problema = this.horario.obtenerAsignatura(hora);
    return problema;
  }
  obtenerAsignaturasConcretas(hora: String, numero: number) {
    let problema: Asignatura[] = this.horario.obtenerAsignaturasConcretas(
      hora,
      numero
    );

    return problema;
  }
  async obtenerNombreCompleto(asignaturas: Asignatura[]) {
    if (asignaturas != undefined) {
      asignaturas.forEach(async (asignatura: Asignatura) => {
        let toast = this.toast.create({
          message: "Asignatura: " + asignatura.nombreCompleto,
          duration: 2000,
        });
        (await toast).present();
      });
    } else {
      let toast = this.toast.create({
        message: "Libre: RECREO",
        duration: 2000,
      });
      (await toast).present();
    }
  }
  private getConector() {
    return {
      name: "Horario16e.db",
      location: "default",
      createFromLocation: 1,
    };
  }
}
