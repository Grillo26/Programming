const producto ={
    nombre: "Monitor 32 pulgadas",
    precio: 400,
    disponible: true
}

//Destructuring con objetos
const{nombre} = producto;
console.log(nombre);

//Destructuring con Arreglos
const numero = [10,20,30,40,50];

const [primero, segundo, tercero] = numero;
console.log(tercero);

const [, , terce] = numero;
console.log(terce)

const [primer, segund, ...quinto] = numero;
console.log(quinto);