import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { DatosMockService } from "../../src/app/share/datos-mock.service";
import { CONSULTAS } from "./enum_consultas";
export interface SQLiteDatabaseConfig {
  /**
   * Name of the database. Example: 'my.db'
   */
  name: string;
  /**
   * Location of the database. Example: 'default'
   */
  location?: string;
  /**
   * iOS Database Location. Example: 'Library'
   */
  iosDatabaseLocation?: string;
}

export interface SQLiteTransaction {
  start: () => void;
  executeSql: (
    sql: any,
    values: any,
    success: Function,
    error: Function
  ) => void;
  addStatement: (
    sql: any,
    values: any,
    success: Function,
    error: Function
  ) => void;
  handleStatementSuccess: (handler: Function, response: any) => void;
  handleStatementFailure: (handler: Function, response: any) => void;
  run: () => void;
  abort: (txFailure: any) => void;
  finish: () => void;
  abortFromQ: (sqlerror: any) => void;
}

export class SQLiteMock extends SQLite {
  /**
   * Open or create a SQLite database file.
   *
   * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
   *
   * @param config {SQLiteDatabaseConfig} database configuration
   * @return Promise<SQLiteObject>
   */
  create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
    let theResult: SQLiteObject;
    return new Promise((resolve, reject) => {
      resolve(theResult);
    });
  }
  /**
   * Verify that both the Javascript and native part of this plugin are installed in your application
   * @returns {Promise<any>}
   */
  echoTest(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve("");
    });
  }
  /**
   * Deletes a database
   * @param config {SQLiteDatabaseConfig} database configuration
   * @returns {Promise<any>}
   */
  deleteDatabase(config: SQLiteDatabaseConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve("");
    });
  }
}
export class SQliteMockObject extends SQLiteObject {
  executeSql(statement: string, params: any): Promise<any> {
    let datosMockService = new DatosMockService();
    return new Promise((resolve, reject) => {
      switch (statement) {
        case CONSULTAS.getEstudios:
          resolve(datosMockService.getEstudios());
          break;
        case CONSULTAS.getGrupos:
          resolve(datosMockService.getGrupos(params[0]));
          break;
        case CONSULTAS.getDiasSemana:
          resolve(datosMockService.getDiasSemana());
          break;
        case CONSULTAS.getTramoHorarios:
          resolve(datosMockService.getTramoHorarios());
          break;
        case CONSULTAS.getAsignaturas:
          resolve(datosMockService.getAsignaturas());
          break;
        case CONSULTAS.getDiasClases:
          resolve(datosMockService.getDiasClases());
          break;
        case CONSULTAS.getNombreCompleto:
          resolve(
            datosMockService.obtenerNombreCompleto("abreviatura: String")
          );
          break;
      }
    });
  }
}
