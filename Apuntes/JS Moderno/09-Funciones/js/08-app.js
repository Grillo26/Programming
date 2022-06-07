

function sumar(a,b){
    return a + b;
}
const resulado = sumar(2,3);

//Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularimpuesto(total){
    return total * 1.25;
}

total = agregarCarrito(100);
total = agregarCarrito(300);

const totalpagar = calcularimpuesto (total);

console.log(`El total a pagar es de ${totalpagar}`);