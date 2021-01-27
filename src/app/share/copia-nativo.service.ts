import { Injectable } from "@angular/core";
import { SqliteDbCopy } from "@ionic-native/sqlite-db-copy/ngx";
import { Platform } from "@ionic/angular";
@Injectable({
  providedIn: "root",
})
export class CopiaNativoService {
  constructor(private sqlDbCopy: SqliteDbCopy, private platform: Platform) {}

  async copiarBBDD(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.platform
        .ready()
        .then(() => {
          this.sqlDbCopy
            .copy("Horario16.db", 0)
            .then(() => {
              resolve("Copia terminada");
            })
            .catch((error) => {
              reject("");
              console.log("copia" + JSON.stringify(error));
            });
        })
        .catch(() => {});
    });
  }
}
