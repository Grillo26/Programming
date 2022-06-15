
//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregar un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}


//Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del HTML al que le dimos click y extreae la información del curos
function leerDatosCurso(curso) {
 

    //Crear un objeto conel contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Agrega elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();

}

//Muestra el carrito d compras en el HTML
function carritoHTML(){
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>
            ${curso.titulo}
        </td>
        `;

        //AGreaga al HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);

    })     
}


