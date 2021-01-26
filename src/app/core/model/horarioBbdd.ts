export class HorarioBbdd {
  constructor(
    private _dia: String,
    private _hora: String,
    private _materiaAbreviatura: String
  ) {}
  get dia(): String {
    return this._dia;
  }
  get hora(): String {
    return this._hora;
  }
  get materiaAbreviatura(): String {
    return this._materiaAbreviatura;
  }
}
