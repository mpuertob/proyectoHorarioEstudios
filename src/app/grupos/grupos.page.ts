import { Component, OnInit } from "@angular/core";
import { DatosMockService } from "../share/datos-mock.service";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
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
    private datosMock: DatosMockService
  ) {}
  private obtenerGrupos() {
    this.grupos = this.datosMock.getGrupos(this.estudio);
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
}
