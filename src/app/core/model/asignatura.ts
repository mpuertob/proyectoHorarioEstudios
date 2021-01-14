export class Asignatura {
  private _abreviatura: String;
  private _nombreCompleto: String;

  constructor(abreviaturaa: String, nombreCompletoo: String) {
    this._abreviatura = abreviaturaa;
    this._nombreCompleto = nombreCompletoo;
  }

  public get abreviatura(): String {
    return this._abreviatura;
  }

  public get nombreCompleto(): String {
    return this._nombreCompleto;
  }

  public set abreviatura(value: String) {
    this._abreviatura = value;
  }

  public set nombreCompleto(value: String) {
    this._nombreCompleto = value;
  }
  toString() {
    return this.abreviatura;
  }
}
