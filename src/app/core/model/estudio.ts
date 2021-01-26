export class Estudio {
  constructor(private _id: number, private _nombre: String) {}
  get id(): number {
    return this._id;
  }
  get nombre(): String {
    return this._nombre;
  }
}
