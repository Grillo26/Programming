

const nav = document.querySelector(' .navegacion');

//Registrar un evento
nav.addEventListener('click', () =>{
    console.log('click en nav');
})
nav.addEventListener('mouseout', () =>{
    console.log('Saliendo en la navegacion');
    nav.style.backgroundColor = 'transparent';
})
nav.addEventListener('mouseenter', () =>{
    console.log('entrando a la nav');
    nav.style.backgroundColor = 'white';

})

// otros eventos abarcan...

// mousedown - // cuando presionamos
// click - similar, de hecho es probablemente el más utilizado..
// dbclick - doble click como cuando quieres abrir un archivo
// mouseup - al soltar
// 