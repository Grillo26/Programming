const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
console.log(navegacion.children); //Los espacios en blancon no son contados

console.log(navegacion.children[0]);

const card = document.querySelector('.card');

card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);

// //Traversing the hijo al padre
console.log(card.parentNode);
console.log(card.parentElement);

console.log(card);
console.log(card.nextElementSibling)

const ultimoCard = document.querySelector('.card:nth-child(4');
console.log(ultimoCard.previousElementSibling);