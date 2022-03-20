export class Telefono {
  private _tipo: string;
  private _numero: number;

  constructor(tipo: string, numero: number) {
    this._tipo = tipo;
    this._numero = numero;
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
   * Getter numero
   * @return {number}
   */
  public get numero(): number {
    return this._numero;
  }

  /**
   * Setter numero
   * @param {number} value
   */
  public set numero(value: number) {
    this._numero = value;
  }
}
