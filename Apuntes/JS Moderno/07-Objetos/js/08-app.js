
"use strict"; //habilitar para escribir buenas practivas y habilitar propiedades de objetos
const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible: true
}

Object.freeze(producto); //No va a permitr modificar ni agregar 

console.log(producto);
console.log(Object.isFrozen(producto));