export class Horario {
  constructor(
    private _diasSemana: Map<Number, String> = new Map<Number, String>()
  ) {}
  get diasSemana() {
    return this._diasSemana;
  }
}
