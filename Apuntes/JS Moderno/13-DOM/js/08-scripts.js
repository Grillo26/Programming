//Todo esta conectado en el document se le concoe como traversingDom

const card = document.querySelector('.card');
const navegacion = document.querySelector('.navegacion');

/*
console.log(navegacion);
console.log(navegacion.childNodes) // Los espacios en blanco son considerados elementos
console.log(navegacion.children) //Children muestra elemenos reales

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children[1]); //Para enlistar el segundo elemento

card.children[1].children[1].textContent = 'Nuevo Texto add';
console.log(card.children[1].children[1].textContent); //Navegar a segundo hijo y obtener sus hijos

card.children[0].src = 'img/arriba.jpg'; //añadiendo imagen usando traversing
console.log(card.children[0]); 

//TRAVERSING DEL HIJO AL PADRE
console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);
console.log(card);
console.log(card.nextElementSibling);*/

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);

console.log(navegacion.lastElementChild);


