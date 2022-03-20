export class Mail {
  private _tipo: string;
  private _direccion: string;

  constructor(tipo: string, direccion: string) {
    this._tipo = tipo;
    this._direccion = direccion;
  }

  /**
   * Getter tipo
   * @return {string}
   */
  public get tipo(): string {
    return this._tipo;
  }

  /**
   * Setter tipo
   * @param {string} value
   */
  public set tipo(value: string) {
    this._tipo = value;
  }

  /**
   * Getter direccion
   * @return {string}
   */
  public get direccion(): string {
    return this._direccion;
  }

  /**
   * Setter direccion
   * @param {string} value
   */
  public set direccion(value: string) {
    this._direccion = value;
  }
}
