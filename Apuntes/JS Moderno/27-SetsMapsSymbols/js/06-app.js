function creatIterador(carrito) {

       let i = 0
       return {
              siguiente: () => {
                     const fin = (i >= carrito.length); //Eso devuelve si false o true
                     const valor = !fin ? carrito[i++] : undefined; //miestras es false aumenta el i++

                     return { fin, valor }

              }

       }
}

const carrito = ['PRODUCTO 1', 'PRODUCTO 2', 'PRODUCTO 3'];

//Utilizar el iterador
const recorrerCarrito = creatIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
