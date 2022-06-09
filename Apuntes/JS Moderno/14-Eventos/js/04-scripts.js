
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {

    e.preventDefault(); //Detiene la accion por default que es ir a la direccion
    console.log('Buscando...')
    console.log(e);
});

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log('Consumir una api');
    console.log(e.target.action);
}