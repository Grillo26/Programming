//Maps
const cliente = new Map(); //Son de llave y valor
cliente.set('nombre', 'karen');
cliente.set('tipo', 'premium');
cliente.set('saldo', 300);
cliente.set('true', true)

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));
console.log(cliente.delete('tipo'));
console.log(cliente);


const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']])
paciente.set('dr', 'Dr Asginado'); //Agrega valores
paciente.set('nombre', 'Antonio'); //Rescribe el valor
console.log(paciente)

//tambien los maps son iterables
paciente.forEach((dato, index) => { //También se puede iterar por index, su ínidce
       console.log(dato)
})