const carrito = [];

//Definir un producto
const producto ={
    nombre: "Monitor 32 pulgadas",
    precio: 400
}
const producto2 ={
    nombre: "Celular",
    precio: 700
}
const producto3 ={
    nombre: "Teclado",
    precio: 500
}
const producto4 ={
    nombre: "Mouse",
    precio: 300
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

carrito.unshift(producto3); //Agreagar al inicio
console.table(carrito);
/*
//Eliminar ultimo elemento de un arreglo
carrito.pop();
console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

*/

//Eliminar 
carrito.splice(1,1);
console.table(carrito);

