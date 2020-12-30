import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private datosMock: DatosMockService
  ) {}

  ngOnInit() {
    this.rutaActivada.queryParams.subscribe(() => {
      this.grupoHorario = this.route.getCurrentNavigation().extras.state.grupoPulsado;
    });
    console.log("Por el mock");
    console.log(this.datosMock.getDiasSemana());
    this.horario = new Horario(this.datosMock.getDiasSemana());
    console.log("Por el objeto horario");
    console.log(this.horario.diasSemana);
  }
}
