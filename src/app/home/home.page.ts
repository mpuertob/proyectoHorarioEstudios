import { Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Entidad } from "../core/model/estudio";
import { HorarioBbdd } from "../core/model/horarioBbdd";
import { DatosService } from "../share/datos.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  estudios: Entidad[];
  horario: HorarioBbdd[];
  constructor(
    private aler: AlertController,
    private route: Router,
    private datosService: DatosService
  ) {
    this.getEstudios();
  }
  pasarEstudio(evento: Entidad) {
    alert("Vamos a pasar: " + evento.nombre);
    let extrasNavegacion: NavigationExtras = {
      state: {
        estudio: evento.nombre,
      },
    };
    this.route.navigate(["grupos"], extrasNavegacion);
  }
  getEstudios() {
    alert("Primero");
    this.estudios = this.datosService.getEstudios();
  }
}
