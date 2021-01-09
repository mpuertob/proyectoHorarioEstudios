import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private datosMock: DatosMockService
  ) {}

  ngOnInit() {
    this.rutaActivada.queryParams.subscribe(() => {
      this.grupoHorario = this.route.getCurrentNavigation().extras.state.grupoPulsado;
    });
    console.log(this.datosMock.getDiasClases());
    this.horario = new Horario(
      this.datosMock.getDiasSemana(),
      this.datosMock.getTramoHorarios(),
      this.datosMock.getDiasClases()
    );
  }
}
