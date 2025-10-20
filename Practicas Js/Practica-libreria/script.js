/**
 * <============== Selectores ==============>
 */

const formularioLibro = document.querySelector('#formulario-libro');
const titulo = document.querySelector('#titulo');
const autor = document.querySelector('#autor');
const isbn = document.querySelector('#isbn');
const precio = document.querySelector('#precio');
const stock = document.querySelector('#stock');
const btnSubmit = document.querySelector('#formulario-libro input[type="submit"]');

const librosTabla = document.querySelector('#libros-tabla');


//Objeto de la Cita
const libroObj = {
    id: generarId(),
    titulo: '',
    autor: '',
    isbn: '',
    precio: '',
    stock: '',
}

/**
 * <============== Eventos ==============>
 */

titulo.addEventListener('change', datosLibro);
autor.addEventListener('change', datosLibro);
isbn.addEventListener('change', datosLibro);
precio.addEventListener('change', datosLibro);
stock.addEventListener('change', datosLibro);

formularioLibro.addEventListener('submit', submitLibro);

let editando = false;
let stockBajo = false;

/**
 * <============== Clases ================>
 */

class AdminInventario {
    constructor() {
        this.libros = [];
    }

    //Agregar Libro
    agregar(libro) {
        this.libros = [...this.libros, libro];
        this.mostrar();
        valorTotalDelInventario();

    }

    //Editando libros
    editar(libroActualizado) {
        this.libros = this.libros.map(libro => libro.id === libroActualizado.id ? libroActualizado : libro);
        this.mostrar();
        valorTotalDelInventario();
    }

    eliminar(id) {
        this.libros = this.libros.filter(libro => libro.id !== id);
        this.mostrar();
        valorTotalDelInventario();
    }

    //Mostrar el libro en la tabla
    mostrar() {

        //Limpiar el HTML Previo
        while (librosTabla.firstChild) {
            librosTabla.removeChild(librosTabla.firstChild);
        }

        if (this.libros.length === 0) {
            librosTabla.innerHTML = `<tr class="text-center">
                                    <td colspan="6" class="p-4 text-gray-500 dark:text-gray-400">
                                        Cargando o no hay libros registrados.
                                    </td>
                                    </tr>`
            return;
        }

        //Definiendo orden de las columnas
        const campos = ['titulo', 'autor', 'isbn', 'precio', 'stock', 'acciones'];
        //Generando el td en la tabla
        this.libros.forEach(libro => {
            const tr = document.createElement('TR');
            tr.classList.add('text-center');

            const stockValue = parseInt(libro.stock, 10) || 0;
            const isLow = stockValue <= 5;

            //Ahora se intera en el orden deseao
            campos.forEach(campo => {
                const td = document.createElement('TD');
                td.classList.add('p-4', 'text-gray-500', 'dark:text-gray-400');

                // if (campo === 'stock' && Number(libro[campo]) <= 5) {
                //     td.classList.add('border', 'border-red-500');
                //     stockBajo = true;
                // }

                if (campo === 'stock') {
                    td.textContent = stockValue;
                    if (isLow) {
                        td.classList.add('border', 'border-red-500');
                        stockBajo = true;
                    }
                } else if (campo === 'acciones') {

                    //Boton editar (más pequeño)
                    const btnEditar = document.createElement('button');
                    btnEditar.classList.add('py-1', 'px-3', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-semibold', 'text-sm', 'rounded-md', 'flex', 'items-center', 'gap-1', 'btn-editar');
                    btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
                    const clone = structuredClone(libro);
                    btnEditar.onclick = () => cargarEdition(clone);

                    //boton eliminar (más pequeño)
                    const btnEliminar = document.createElement('button');
                    btnEliminar.classList.add('py-1', 'px-3', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-semibold', 'text-sm', 'rounded-md', 'flex', 'items-center', 'gap-1');
                    btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
                    btnEliminar.onclick = () => this.eliminar(libro.id);

                    const contenedorBotones = document.createElement('DIV')
                    // usar gap y alinear en una sola linea, sin ocupar todo el ancho
                    contenedorBotones.classList.add('flex', 'items-center', 'justify-center', 'gap-2');
                    contenedorBotones.appendChild(btnEditar);
                    contenedorBotones.appendChild(btnEliminar);

                    td.appendChild(contenedorBotones);

                } else {
                    td.textContent = libro[campo] ?? ''; //Por si no existe
                }

                tr.appendChild(td);

            });

            librosTabla.appendChild(tr);

        })
    }
}

class Notificacion {
    constructor({ texto, tipo }) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar() {

        //Crear la notificación
        const alerta = document.createElement('DIV');
        alerta.classList.add('alerta-inventario', 'text-center', 'w-full', 'text-white', 'p-2');

        //Eliminar alertas previas
        const alertaPrevia = document.querySelector('.alerta-inventario')
        if (alertaPrevia) {
            alertaPrevia.remove();
        }

        //Verifica si es te tipo error 
        this.tipo === 'error' ? alerta.classList.add('bg-red-600', 'dark:bg-red-600', 'rounded-lg') : alerta.classList.add('bg-green-400', 'dark:bg-green-400', 'rounded-lg');

        //Agrega el texto que le enviamos a la alerta
        alerta.textContent = this.texto;

        //Insertando en el DOM
        formularioLibro.parentElement.insertBefore(alerta, formularioLibro);

        setTimeout(() => {
            alerta.remove();
        }, 3000)
    }
}


/**
 * <============== Funciones ==============>
 */

//Método para generar Id's
function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}

//Método para almacenar lo que se inserta en el formulario en el objeto => Se envia en libroObj
function datosLibro(e) {
    libroObj[e.target.name] = e.target.value;
}

const libros = new AdminInventario();

function submitLibro(e) {
    e.preventDefault();

    // Array Method que pregunta si incluye alguno que tenga ''
    if (Object.values(libroObj).some(valor => valor.trim() === '')) {
        new Notificacion({
            texto: 'Todos los campos deben ser obligatorios',
            tipo: 'error'
        })

        console.log(libroObj);
        return;
    }
    if (editando) { //Si editando devuelte true, porque cambiamos la variable cuando accedimos al método
        libros.editar({ ...libroObj });
        if (stockBajo) {
            new Notificacion({
                texto: 'Stock Bajo',
                tipo: 'error'
            })
        }
        else {
            new Notificacion({
                texto: 'Editado Correctamente',
                tipo: 'Exito'
            })
        }

    } else {
        libros.agregar({ ...libroObj });
        new Notificacion({
            texto: 'Se agregó correctamente!',
            tipo: 'exito'
        })

    }

    formularioLibro.reset(); //Restea los inputs del formulario
    reinciarObjetoLibro();
    btnSubmit.value = 'Registrar Libro';
    editando = false;
    stockBajo = false;
}

function reinciarObjetoLibro() {
    Object.assign(libroObj, {
        id: generarId(),
        titulo: '',
        autor: '',
        isbn: '',
        precio: '',
        stock: ''

    })
}

function cargarEdition(libro) {

    Object.assign(libroObj, libro); //Assign, extrae los datos de libro y los almacena en libroObj

    titulo.value = libro.titulo;
    autor.value = libro.autor;
    isbn.value = libro.isbn;
    precio.value = libro.precio;
    stock.value = libro.stock;

    editando = true;

    btnSubmit.value = 'Actualizar Cambios'

}

function valorTotalDelInventario() {

    /**
     * El primer libros (la Izquierda): Es la instancia que creaste (const libros = new AdminInventario()).
     * y el segundo es el array libros[]
     */
    const valor = libros.libros.reduce((acumulador, libro) => {
        const valorDelLibro = parseFloat(libro.precio) * parseInt(libro.stock)
        return acumulador + valorDelLibro;
    }, 0);

    const valorTotalElement = document.querySelector('#valor-total');
    valorTotalElement.textContent = `$${valor.toFixed(2)}`;
}

