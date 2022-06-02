const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
]


console.log("Usando ForEach");
carrito.forEach(function(producto){ //En cuenta del For
    console.log(`${producto.nombre} - Precio: ${producto.precio}`); 
})

console.log("Usando Map");
carrito.map(function(producto){ //Crea nuevo arreglo
    console.log(`${producto.nombre} - Precio: ${producto.precio}`); 
})