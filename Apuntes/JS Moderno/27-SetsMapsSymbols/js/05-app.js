//No hay dos symbols que sean iguales
const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
       console.log('son iguales')
} else {
       console.log('son diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//Agregar nombre y apellido como laves del objeto
persona[nombre] = 'Carlos';
persona[apellido] = 'Mamani';
persona.tipoCliente = 'premium';
persona.saldo = 200
console.log(persona)
//console.log(persona.nombre) -> esto da undefine
console.log(persona[nombre]); //Para acceder a los datos


//Las propiedades que utilizan un symbol no son iterables

//Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'pedro'

console.log(cliente)