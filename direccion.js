"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
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
    get calle() {
        return this._calle;
    }
    /**
     * Setter calle
     * @param {string} value
     */
    set calle(value) {
        this._calle = value;
    }
    /**
     * Getter numero
     * @return {number}
     */
    get numero() {
        return this._numero;
    }
    /**
     * Setter numero
     * @param {number} value
     */
    set numero(value) {
        this._numero = value;
    }
    /**
     * Getter piso
     * @return {number}
     */
    get piso() {
        return this._piso;
    }
    /**
     * Setter piso
     * @param {number} value
     */
    set piso(value) {
        this._piso = value;
    }
    /**
     * Getter letra
     * @return {string}
     */
    get letra() {
        return this._letra;
    }
    /**
     * Setter letra
     * @param {string} value
     */
    set letra(value) {
        this._letra = value;
    }
    /**
     * Getter codigoPostal
     * @return {string}
     */
    get codigoPostal() {
        return this._codigoPostal;
    }
    /**
     * Setter codigoPostal
     * @param {string} value
     */
    set codigoPostal(value) {
        this._codigoPostal = value;
    }
    /**
     * Getter poblacion
     * @return {string}
     */
    get poblacion() {
        return this._poblacion;
    }
    /**
     * Setter poblacion
     * @param {string} value
     */
    set poblacion(value) {
        this._poblacion = value;
    }
    /**
     * Getter provincia
     * @return {string}
     */
    get provincia() {
        return this._provincia;
    }
    /**
     * Setter provincia
     * @param {string} value
     */
    set provincia(value) {
        this._provincia = value;
    }
}
exports.Direccion = Direccion;
