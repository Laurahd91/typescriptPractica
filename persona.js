"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor($nombre, $apellidos, $edad, $dni, $cumpleanios, $colorFavorito, $sexo, $direcciones, $mails, $telefono, $notas) {
        this.nombre = $nombre;
        this.apellidos = $apellidos;
        this.edad = $edad;
        this.dni = $dni;
        this.cumpleanios = $cumpleanios;
        this.colorFavorito = $colorFavorito;
        this.sexo = $sexo;
        this.direcciones = $direcciones;
        this.mails = $mails;
        this.telefono = $telefono;
        this.notas = $notas;
    }
    /**
     * Getter $nombre
     * @return {string}
     */
    get $nombre() {
        return this.nombre;
    }
    /**
     * Setter $nombre
     * @param {string} value
     */
    set $nombre(value) {
        this.nombre = value;
    }
    /**
     * Getter $apellidos
     * @return {string}
     */
    get $apellidos() {
        return this.apellidos;
    }
    /**
     * Setter $apellidos
     * @param {string} value
     */
    set $apellidos(value) {
        this.apellidos = value;
    }
    /**
     * Getter $edad
     * @return {number}
     */
    get $edad() {
        return this.edad;
    }
    /**
     * Setter $edad
     * @param {number} value
     */
    set $edad(value) {
        this.edad = value;
    }
    /**
     * Getter $dni
     * @return {string}
     */
    get $dni() {
        return this.dni;
    }
    /**
     * Setter $dni
     * @param {string} value
     */
    set $dni(value) {
        this.dni = value;
    }
    /**
     * Getter $cumpleanios
     * @return {Date}
     */
    get $cumpleanios() {
        return this.cumpleanios;
    }
    /**
     * Setter $cumpleanios
     * @param {Date} value
     */
    set $cumpleanios(value) {
        this.cumpleanios = value;
    }
    /**
     * Getter $colorFavorito
     * @return {string}
     */
    get $colorFavorito() {
        return this.colorFavorito;
    }
    /**
     * Setter $colorFavorito
     * @param {string} value
     */
    set $colorFavorito(value) {
        this.colorFavorito = value;
    }
    /**
     * Getter $sexo
     * @return {string}
     */
    get $sexo() {
        return this.sexo;
    }
    /**
     * Setter $sexo
     * @param {string} value
     */
    set $sexo(value) {
        this.sexo = value;
    }
    /**
     * Getter $direcciones
     * @return {Array<direccion>}
     */
    get $direcciones() {
        return this.direcciones;
    }
    /**
     * Setter $direcciones
     * @param {Array<direccion>} value
     */
    set $direcciones(value) {
        this.direcciones = value;
    }
    /**
     * Getter $mails
     * @return {Array<mail>}
     */
    get $mails() {
        return this.mails;
    }
    /**
     * Setter $mails
     * @param {Array<mail>} value
     */
    set $mails(value) {
        this.mails = value;
    }
    /**
     * Getter $telefono
     * @return {Array<telefono>}
     */
    get $telefono() {
        return this.telefono;
    }
    /**
     * Setter $telefono
     * @param {Array<telefono>} value
     */
    set $telefono(value) {
        this.telefono = value;
    }
    /**
     * Getter $notas
     * @return {string}
     */
    get $notas() {
        return this.notas;
    }
    /**
     * Setter $notas
     * @param {string} value
     */
    set $notas(value) {
        this.notas = value;
    }
    agregarDireccion(direccion) {
        this.direcciones.push(direccion);
    }
    agregarTelefono(telefono) {
        this.telefono.push(telefono);
    }
    agregarMail(mail) {
        this.mails.push(mail);
    }
}
exports.Persona = Persona;
