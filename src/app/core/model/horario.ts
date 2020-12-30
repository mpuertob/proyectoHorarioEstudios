export class Horario {
  constructor(private _diasSemana: string[], private _tramoHorario: string[]) {}
  get diasSemana() {
    return this._diasSemana;
  }
  get tramoHorario() {
    return this._tramoHorario;
  }
}
