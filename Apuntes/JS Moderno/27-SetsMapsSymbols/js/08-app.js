const ciudades = ['Londres', 'Yacuiba', 'Santa Cruz'];
const ordenes = new Set([123, 233, 223, 11, 123]);
const datos = new Map();

datos.set('Nombre', 'Juan');
datos.set('profesiones', 'Desarrollador Web');

//ENTIRES ITERATOR juntos los dos elemenots
console.log('ENTRIES ITERATOR<-----')
console.log('Recorriendo Array')
for (let entry of ciudades.entries()) {
       console.log(entry);
}

console.log('Recorriendo un set')
for (let entry of ordenes.entries()) {
       console.log(entry);
}

console.log('Recorriendo un map')
for (let entry of datos.entries()) {
       console.log(entry);
}

//VALUES Iterator Devuelve los valores
console.log('VALUES ITERATOR<-----')
for (let value of ciudades.values()) {
       console.log(value)
}

//KEYS Iterator Devuelve las llaves
console.log('KEYS ITERATOR<------')
for (let keys of ciudades.keys()) {
       console.log(keys)
}

//DEFAULT
console.log('DEFAULT<------')
for (let ciudad of ciudades) {
       console.log(ciudad);
}