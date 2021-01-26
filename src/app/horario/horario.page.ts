import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Asignatura } from "../core/model/asignatura";
import { Horario } from "../core/model/horario";
import { HorarioBbdd } from "../core/model/horarioBbdd";
import { DatosMockService } from "../share/datos-mock.service";
import { DatosService } from "../share/datos.service";

@Component({
  selector: "app-horario",
  templateUrl: "./horario.page.html",
  styleUrls: ["./horario.page.scss"],
})
export class HorarioPage implements OnInit {
  grupoHorario: String;
  horario: HorarioBbdd[];
  constructor(
    public route: Router,
    private rutaActivada: ActivatedRoute,
    public toast: ToastController,
    private datosService: DatosService
  ) {
    this.rutaActivada.queryParams.subscribe(() => {
      this.grupoHorario = this.route.getCurrentNavigation().extras.state.grupoPulsado;
    });
  }
  getHorario() {
    this.horario = this.datosService.getHorario(this.grupoHorario);
  }
  ngOnInit() {}
}
