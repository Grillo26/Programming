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

let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado]; //Agrega al inicio

console.table(resultado);
