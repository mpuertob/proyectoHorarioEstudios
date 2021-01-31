import { IonicNativePlugin } from "@ionic-native/core";
export class SqliteDbCopyMock extends IonicNativePlugin {
  copy(dbname: string, location: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let nombreBBDD: String = dbname;
      let cadena: String = `La bbdd ${nombreBBDD} se ha copiado `;
      resolve(cadena + "correctamente");
    });
  }
}
