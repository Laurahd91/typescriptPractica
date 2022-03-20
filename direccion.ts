export class Direccion {
  private _calle: string;
  private _numero: number;
  private _piso: number;
  private _letra: string;
  private _codigoPostal: string;
  private _poblacion: string;
  private _provincia: string;

  constructor(
    calle: string,
    numero: number,
    piso: number,
    letra: string,
    codigoPostal: string,
    poblacion: string,
    provincia: string
  ) {
    this._calle = calle;
    this._numero = numero;
    this._piso = piso;
    this._letra = letra;
    this._codigoPostal = codigoPostal;
    this._poblacion = poblacion;
    this._provincia = provincia;
  }

  /**
   * Getter calle
   * @return {string}
   */
  public get calle(): string {
    return this._calle;
  }

  /**
   * Setter calle
   * @param {string} value
   */
  public set calle(value: string) {
    this._calle = value;
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

  /**
   * Getter piso
   * @return {number}
   */
  public get piso(): number {
    return this._piso;
  }

  /**
   * Setter piso
   * @param {number} value
   */
  public set piso(value: number) {
    this._piso = value;
  }

  /**
   * Getter letra
   * @return {string}
   */
  public get letra(): string {
    return this._letra;
  }

  /**
   * Setter letra
   * @param {string} value
   */
  public set letra(value: string) {
    this._letra = value;
  }

  /**
   * Getter codigoPostal
   * @return {string}
   */
  public get codigoPostal(): string {
    return this._codigoPostal;
  }

  /**
   * Setter codigoPostal
   * @param {string} value
   */
  public set codigoPostal(value: string) {
    this._codigoPostal = value;
  }

  /**
   * Getter poblacion
   * @return {string}
   */
  public get poblacion(): string {
    return this._poblacion;
  }

  /**
   * Setter poblacion
   * @param {string} value
   */
  public set poblacion(value: string) {
    this._poblacion = value;
  }

  /**
   * Getter provincia
   * @return {string}
   */
  public get provincia(): string {
    return this._provincia;
  }

  /**
   * Setter provincia
   * @param {string} value
   */
  public set provincia(value: string) {
    this._provincia = value;
  }
}
