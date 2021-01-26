import { Component } from "@angular/core";
import { DatosMockService } from "../share/datos-mock.service";
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
    private datosMock: DatosMockService,
    private datosService: DatosService
  ) {
    // this.estudios = datosMock.getEstudios();
  }
  // pasarEstudio(evento: string) {
  //   let extrasNavegacion: NavigationExtras = {
  //     state: {
  //       estudio: evento,
  //     },
  //   };
  //   this.route.navigate(["grupos"], extrasNavegacion);
  // }
  getHoras() {
    alert("Primero");
    this.datosService.getHoras();
  }
  getEstudios() {
    alert("Primero");
    this.datosService.getEstudios();
  }
  getCursos() {
    alert("Primero");
    this.datosService.getCursos("GS");
  }
}
