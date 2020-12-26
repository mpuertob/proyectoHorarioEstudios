export interface Datos {
  getEstudios(): Array<String>;
  getGrupos(estudio: string): Array<String>;
}
