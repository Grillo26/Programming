
"use strict"; //habilitar para escribir buenas practivas y habilitar propiedades de objetos
const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible: true
}

Object.seal(producto); //No va a permitr modificar ni agregar pero si modificar las existentes 
producto.disponible = false;
console.log(producto);

console.log(Object.isSealed(producto));