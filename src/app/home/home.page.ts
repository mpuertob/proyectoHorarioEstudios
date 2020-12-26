import { Component } from "@angular/core";
import { DatosMockService } from "../share/datos-mock.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  estudios: String[];
  constructor(private datosMock: DatosMockService) {
    this.estudios = datosMock.getEstudios();
  }
}
