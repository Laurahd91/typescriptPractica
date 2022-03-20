import { Persona } from "./persona";
import { Mail } from "./mail";
import { Direccion } from "./direccion";
import { Telefono } from "./telefono";

const direccionPaloma = new Direccion(
  "Calle Mariah Carey",
  23,
  3,
  "B",
  "28050",
  "Madrid",
  "Madrid"
);

const mailPaloma = new Mail("personal", "Paloma@gmail.com");

const telefonoPaloma = new Telefono("móvil", 676435433);

const direccionRoberto = new Direccion(
  "Calle Toledo",
  16,
  1,
  "A",
  "28343",
  "Valdemoro",
  "Madrid"
);

const mailRoberto = new Mail("personal", "Roberto@gmail.com");

const telefonoRoberto = new Telefono("móvil", 687245433);

const direccionTeresa = new Direccion(
  "Calle Pilar Rubio",
  45,
  6,
  "C",
  "28330",
  "San Martín de la Vega",
  "Madrid"
);

const mailTeresa = new Mail("personal", "Teresa@gmail.com");

const telefonoTeresa = new Telefono("móvil", 776488433);

const datosPaloma = new Persona(
    'Paloma',
    'Romero Verde',
    47,
    '56787495S',
    new Date(1975, 2, 10),
    'amarillo',
    'mujer',
    [direccionPaloma],
    [mailPaloma],
    [telefonoPaloma],
    "Su piso se encuentra en venta"
  );

  const datosRoberto = new Persona(
    'Robero',
    'Guerra Blanco',
    31,
    '045676354P',
    new Date(1991, 1, 1),
    'azul',
    'hombre',
    [direccionRoberto],
    [mailRoberto],
    [telefonoRoberto],
    "Compra de vehículo"
  );

  const datosTeresa = new Persona(
    'Teresa',
    'Robles Torres',
    60,
    '33231212P',
    new Date(1962, 0, 9),
    'naranja',
    'mujer',
    [direccionTeresa],
    [mailTeresa],
    [telefonoTeresa],
    "Piso en alquiler"
  );

console.log("Datos antes de realizar cambios:");
console.log(datosPaloma);
console.log(datosRoberto);
console.log(datosTeresa);

const datos: Array<Persona> = new Array(datosPaloma, datosRoberto, datosTeresa);

const buscarDNI: string = "33231212P";

const editarPersona: Persona = datos.find(persona => persona.dni === buscarDNI) as Persona;

const nuevaDireccion = new Direccion(
  "Calle María Moliner",
  44,
  5,
  "D",
  "28342",
  "Valdemoro",
  "Madrid"
)

const nuevoMail = new Mail(
  "trabajo",
  "ide.morena.blanco@gmail.com"
)

const nuevoTelefono = new Telefono(
  "fijo",
  918763421
)

editarPersona.agregarDireccion(nuevaDireccion);
editarPersona.agregarMail(nuevoMail);
editarPersona.agregarTelefono(nuevoTelefono);

console.log("Datos tras realizar los cambios:");
console.log(datosPaloma);
console.log(datosRoberto);
console.log(datosTeresa);