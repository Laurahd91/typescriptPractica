"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    /**
     * Getter tipo
     * @return {string}
     */
    get tipo() {
        return this._tipo;
    }
    /**
     * Setter tipo
     * @param {string} value
     */
    set tipo(value) {
        this._tipo = value;
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
}
exports.Telefono = Telefono;
