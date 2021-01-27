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
    alert("tamaño horario " + this.horario.length);
    this.horario.map((obj: HorarioBbdd) => {
      this.cabecera.add(obj.dia);
      this.horasSinRepetir.add(obj.hora);
      this.abreviaturas.push(obj.materiaAbreviatura);
    });
    alert("Tamaño dias sin repetir " + this.cabecera.size);
    alert("Tamaño horas sin repetir " + this.horasSinRepetir.size);
    alert("Tamaño abreviaturas sin repetir " + this.abreviaturas.length);
  }

  ngOnInit() {}
}
