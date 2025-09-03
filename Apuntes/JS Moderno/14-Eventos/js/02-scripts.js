
const nav = document.querySelector('.navegacion');

//registrar evento
nav.addEventListener('mouseout', () =>{
    console.log('Saliendo de la navegación');
    nav.style.backgroundColor = "transparent";
})

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegación');
    nav.style.backgroundColor = "red";
})

nav.addEventListener('click', () =>{
    console.log('haciendo click kkk');
    nav.style.backgroundColor = "green";
})

// otros eventos abarcan...

// mouseenter - cuando se pasa por encima
// mousedown - // cuando presionamos
// click - similar, de hecho es probablemente el más utilizado..
// dbclick - doble click como cuando quieres abrir un archivo
// mouseup - al soltar
// 