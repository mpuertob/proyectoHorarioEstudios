import { Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { DatosService } from "../share/datos.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  estudios: String[];
  constructor(
    private aler: AlertController,
    private route: Router,
    private datosService: DatosService
  ) {}
  pasarEstudio(evento: string) {
    let extrasNavegacion: NavigationExtras = {
      state: {
        estudio: evento,
      },
    };
    this.route.navigate(["grupos"], extrasNavegacion);
  }
  getHoras() {
    alert("Primero");
    this.datosService.getHoras();
  }
  getEstudios() {
    alert("Primero");
    this.estudios = this.datosService.getEstudios();
  }
  getCursos() {
    alert("Primero");
    this.datosService.getCursos("GS");
  }
}
