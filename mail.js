"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
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
     * Getter direccion
     * @return {string}
     */
    get direccion() {
        return this._direccion;
    }
    /**
     * Setter direccion
     * @param {string} value
     */
    set direccion(value) {
        this._direccion = value;
    }
}
exports.Mail = Mail;
