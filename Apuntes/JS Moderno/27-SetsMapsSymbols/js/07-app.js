//Generadores es una funcion que retorna un iterador siempre lleva un *

function* crearGenerador() {
       yield 1;
       yield 'Juan';
       yield 3 + 3;
       yield true;
}

// const iterador = crearGenerador();
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador)

//Generador para carrito de compras
function* generadorCarrito(carrito) {
       for (let i = 0; i < carrito.length; i++) {
              yield carrito[i];
       }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const iteradord = generadorCarrito(carrito);

console.log(iteradord.next());
console.log(iteradord.next());
console.log(iteradord.next());
console.log(iteradord.next());
