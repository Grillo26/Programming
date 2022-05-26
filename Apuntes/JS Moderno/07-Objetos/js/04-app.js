const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible: true,
   
}
//Extraer datos del objeto en nueva variable
const nombre = producto.nombre;
console.log(nombre);

//Objet Destructuring
const {nombre1, precio, disponible}= producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
