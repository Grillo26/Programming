//Varaiales
//Const no se reasigna osea no cambia de estado
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregar un curso presionando "Agregar Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina Carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML(); //Eliminamos todo el HTML
    });

    //Muestra los cursos del Local Storage
    document.addEventListener('DOMContentLoaded', () =>{
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') || []);
        carritoHTML();
    })
}


//====================== ===funciones ==============================
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina el arreglo por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        carritoHTML(); //Iterar sobre el carrito y mosttrar su HTML
    }
}
//lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso){
    //Creando uno objeto con el contenido del curso actual
    const infoCurso= {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    //Verifica si un elemtno ya existe
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //Retorna el objeto actualizado
            }else{
                return curso; //REtorna los objetos que no son los duplicados
            }
        })
        
    }else{
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    //Agregar elementos al arreglo de carrito
    console.log(articulosCarrito);
    carritoHTML();
}

//muestra el carrito de compras en el HTML
function carritoHTML(){

    //Limpiar HTML
    limpiarHTML();
    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso =>{
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML=`
        <td><img src= "${imagen}" width="100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

        //AGrega el HTML en el carrito de tbody
        contenedorCarrito.appendChild(row);
    });

    //Agregar el carrito de cmpras al Storage
    sincronizarStorage();

}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML='';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}