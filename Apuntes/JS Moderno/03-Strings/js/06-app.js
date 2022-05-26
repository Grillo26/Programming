const producto = 'Monitor de 20 pulgadas';

//.repetar te va a permitir repetir una cadena de texto...
const texto = 'En promoción'.repeat(2.4); //lo redondea
console.log(texto);

console.log(`${producto} ${texto} !!!`); //  !PARA REPETIR

//Split, divir un string
const actividad= "Estoy aprendiendo JavaScrip moderno";
console.log(actividad.split(""));

const hobbies = ' Leer, caminar , escuchar muscia ,escribir, aprender a programar';
console.log(hobbies.split(","));

const tweet = "Aprendiendo JavaScript Modelo #JSModernoConJuan";
console.log(tweet.split('#'));