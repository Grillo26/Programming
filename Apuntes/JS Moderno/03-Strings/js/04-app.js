const producto = '               Monitor de 20 pulgadas          ';

console.log(producto);
console.log(producto.length);

//Eliminar del inicio
console.log(producto.trimStart());
//Eliminar del final
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());
console.log(producto.length);
