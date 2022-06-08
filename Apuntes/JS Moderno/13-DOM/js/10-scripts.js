
const enlace = document.createElement('A');

//Agregando el texto
enlace.textContent = 'nuevo Enlace';

//Añadiendo href
enlace.href = '/nuevo-enlace';
console.log(enlace);

//Añadiendo OnClick
enlace.onclick = miFuncion;

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace); //lo pone al final
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]); //poco mas de control en el html

function miFuncion() {
    alert('Diste click');
}

//Crear un CARD
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio')

//Crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la img
const img = document.createElement('img');
img.src = 'img/hacer2.jpg';
img.alt = "Texto Alternativo"

//Crear el car
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(img);
//Asignar info
card.appendChild(info);

//Insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);