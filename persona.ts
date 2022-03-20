import { Mail } from "./mail";
import { Direccion } from "./direccion";
import { Telefono } from "./telefono";

export class Persona {
  private nombre: string;
  private apellidos: string;
  private edad: number;
  public dni: string;
  private cumpleanios: Date;
  private colorFavorito: string;
  private sexo: string;
  private direcciones: Array<Direccion>;
  private mails: Array<Mail>;
  private telefono: Array<Telefono>;
  private notas: string;

  constructor(
    $nombre: string,
    $apellidos: string,
    $edad: number,
    $dni: string,
    $cumpleanios: Date,
    $colorFavorito: string,
    $sexo: string,
    $direcciones: Array<Direccion>,
    $mails: Array<Mail>,
    $telefono: Array<Telefono>,
    $notas: string
  ) {
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
  public get $nombre(): string {
    return this.nombre;
  }

  /**
   * Setter $nombre
   * @param {string} value
   */
  public set $nombre(value: string) {
    this.nombre = value;
  }

  /**
   * Getter $apellidos
   * @return {string}
   */
  public get $apellidos(): string {
    return this.apellidos;
  }

  /**
   * Setter $apellidos
   * @param {string} value
   */
  public set $apellidos(value: string) {
    this.apellidos = value;
  }

  /**
   * Getter $edad
   * @return {number}
   */
  public get $edad(): number {
    return this.edad;
  }

  /**
   * Setter $edad
   * @param {number} value
   */
  public set $edad(value: number) {
    this.edad = value;
  }

  /**
   * Getter $dni
   * @return {string}
   */
  public get $dni(): string {
    return this.dni;
  }

  /**
   * Setter $dni
   * @param {string} value
   */
  public set $dni(value: string) {
    this.dni = value;
  }

  /**
   * Getter $cumpleanios
   * @return {Date}
   */
  public get $cumpleanios(): Date {
    return this.cumpleanios;
  }

  /**
   * Setter $cumpleanios
   * @param {Date} value
   */
  public set $cumpleanios(value: Date) {
    this.cumpleanios = value;
  }

  /**
   * Getter $colorFavorito
   * @return {string}
   */
  public get $colorFavorito(): string {
    return this.colorFavorito;
  }

  /**
   * Setter $colorFavorito
   * @param {string} value
   */
  public set $colorFavorito(value: string) {
    this.colorFavorito = value;
  }

  /**
   * Getter $sexo
   * @return {string}
   */
  public get $sexo(): string {
    return this.sexo;
  }

  /**
   * Setter $sexo
   * @param {string} value
   */
  public set $sexo(value: string) {
    this.sexo = value;
  }

  /**
   * Getter $direcciones
   * @return {Array<direccion>}
   */
  public get $direcciones(): Array<Direccion> {
    return this.direcciones;
  }

  /**
   * Setter $direcciones
   * @param {Array<direccion>} value
   */
  public set $direcciones(value: Array<Direccion>) {
    this.direcciones = value;
  }

  /**
   * Getter $mails
   * @return {Array<mail>}
   */
  public get $mails(): Array<Mail> {
    return this.mails;
  }

  /**
   * Setter $mails
   * @param {Array<mail>} value
   */
  public set $mails(value: Array<Mail>) {
    this.mails = value;
  }

  /**
   * Getter $telefono
   * @return {Array<telefono>}
   */
  public get $telefono(): Array<Telefono> {
    return this.telefono;
  }

  /**
   * Setter $telefono
   * @param {Array<telefono>} value
   */
  public set $telefono(value: Array<Telefono>) {
    this.telefono = value;
  }

  /**
   * Getter $notas
   * @return {string}
   */
  public get $notas(): string {
    return this.notas;
  }

  /**
   * Setter $notas
   * @param {string} value
   */
  public set $notas(value: string) {
    this.notas = value;
  }

  agregarDireccion(direccion: Direccion) {
    this.direcciones.push(direccion);
  }

  agregarTelefono(telefono: Telefono) {
    this.telefono.push(telefono);
  }

  agregarMail(mail: Mail) {
    this.mails.push(mail);
  }
}
