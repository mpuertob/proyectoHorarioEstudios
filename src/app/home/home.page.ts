import { Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Entidad } from "../core/model/estudio";
import { Horario } from "../core/model/horario";
import { DatosService } from "../share/datos.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  estudios: Entidad[];
  horario: Horario[];
  constructor(
    private aler: AlertController,
    private route: Router,
    private datosService: DatosService
  ) {
    this.getEstudios();
  }
  pasarEstudio(evento: Entidad) {
    let extrasNavegacion: NavigationExtras = {
      state: {
        estudio: evento.nombre,
      },
    };
    this.route.navigate(["grupos"], extrasNavegacion);
  }
  getEstudios() {
    this.estudios = this.datosService.getEstudios();
  }
}
