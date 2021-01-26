import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { DatosService } from "../share/datos.service";
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
    private datosService: DatosService
  ) {}
  private obtenerGrupos() {
    this.grupos = this.datosService.getCursos(this.estudio);
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
