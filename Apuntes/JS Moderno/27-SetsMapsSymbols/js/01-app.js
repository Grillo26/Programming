const carrito = new Set(); //Puedes agrgar cualquier valor

carrito.add('camisa')
carrito.add('disco 1')
carrito.add('disco 2')
carrito.add('disco 3')

carrito.forEach(producto => {
       console.log(producto); //Los set son iterables
})
//No agrega valores repetidos
console.log(carrito.has('camisa')); //True o false
console.log(carrito.size) //Cuanto mide
carrito.delete('camisa'); //True o false cda uno
carrito.clear(); //Vacia todos los elementos
console.log(carrito)

//Del siguiente arreglo eliminar los ducplicados
const numero = [10, 20, 39, 49, 59, 10, 10];

const noDuplicados = new Set(numero);
console.log(noDuplicados);
