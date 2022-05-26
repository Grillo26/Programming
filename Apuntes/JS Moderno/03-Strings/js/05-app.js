const producto = 'Monitor de 20 pulgadas';

//.replace Para Reemplazar algun texto por otro
console.log("<---Para Reemplazar--->")
console.log(producto);
console.log(producto.replace('pulgadas', ' " '));
console.log(producto.replace('Monitor', ' Monitor curvo'));

//.slice para cortar
console.log("<---Para cortar--->")
console.log(producto.slice(0,10));
console.log(producto.slice(8) );
console.log(producto.slice(2, 1) );

//Alternativa a slice
console.log("<--Alternativa a slice-->")
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

//La primera letra del usuario Ejmp Google
const usuario = "Carlos";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0))