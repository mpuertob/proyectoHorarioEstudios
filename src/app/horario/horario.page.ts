import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Asignatura } from "../core/model/asignatura";
import { Horario } from "../core/model/horario";
import { DatosMockService } from "../share/datos-mock.service";

@Component({
  selector: "app-horario",
  templateUrl: "./horario.page.html",
  styleUrls: ["./horario.page.scss"],
})
export class HorarioPage implements OnInit {
  grupoHorario: String;
  horario: Horario;
  constructor(
    public route: Router,
    private rutaActivada: ActivatedRoute,
    private datosMock: DatosMockService,
    public toast: ToastController
  ) {
    this.rutaActivada.queryParams.subscribe(() => {
      this.grupoHorario = this.route.getCurrentNavigation().extras.state.grupoPulsado;
    });
    this.horario = new Horario(
      this.datosMock.getTramoHorarios(),
      this.datosMock.getDiasClases()
    );
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
}
