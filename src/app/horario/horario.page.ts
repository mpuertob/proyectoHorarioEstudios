import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { HorarioBbdd } from "../core/model/horarioBbdd";
import { DatosService } from "../share/datos.service";

@Component({
  selector: "app-horario",
  templateUrl: "./horario.page.html",
  styleUrls: ["./horario.page.scss"],
})
export class HorarioPage implements OnInit {
  grupoHorario: String;
  horario: HorarioBbdd[] = [];
  cabecera: Set<String> = new Set<String>();
  horasSinRepetir: Set<String> = new Set<String>();
  abreviaturas: String[] = [];

  constructor(
    public route: Router,
    private rutaActivada: ActivatedRoute,
    public toast: ToastController,
    private datosService: DatosService
  ) {
    this.rutaActivada.queryParams.subscribe(() => {
      this.grupoHorario = this.route.getCurrentNavigation().extras.state.grupoPulsado;
      this.horario = this.datosService.getHorario(this.grupoHorario);
    });
  }

  mostrarHorario() {
    this.cabecera.add("HORAS");
    this.horario.map((obj: HorarioBbdd) => {
      this.cabecera.add(obj.dia);
      this.horasSinRepetir.add(obj.hora);
      this.abreviaturas.push(obj.materiaAbreviatura);
    });
    console.log(this.horario);
  }
  async getNombreAsignatura(abreviatura: String) {
    let nombre = this.datosService.getNombreAsignatura(abreviatura);
    let toast = this.toast.create({
      message: "Asignatura: " + nombre,
      duration: 3000,
    });
    (await toast).present();
  }
  ngOnInit() {}
}
