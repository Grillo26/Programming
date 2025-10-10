//Variables
const selectGenero = document.querySelector('#selectGenero');
const precioMinimo = document.querySelector('#precioMin');
const precioMaximo = document.querySelector('#precioMax');
const limpiarFiltro = document.querySelector('#btnLimpiarFiltros')
const buscador = document.querySelector('#buscador');
const booksContainer = document.querySelector('#books-container');
const noResultContainer = document.querySelector('#container-result');

const datosBusqueda = {
    textoBusqueda: '',
    genero: '',
    precioMin: '',
    precioMax: ''
}
const totalLibros = libros.length;

//Eventos
selectGenero.addEventListener('change', (e) => {
    if (e.target.value === 'todos') {
        mostrarLibros(libros);
        mostrarContador(totalLibros);
    } else {
        datosBusqueda.genero = e.target.value;
        filtrarLibro();
    }

});
precioMinimo.addEventListener('input', (e) => {
    datosBusqueda.precioMin = e.target.value;
    filtrarLibro();
});
precioMaximo.addEventListener('input', (e) => {
    datosBusqueda.precioMax = e.target.value;
    filtrarLibro();
});
buscador.addEventListener('input', (e) => {
    datosBusqueda.textoBusqueda = e.target.value;
    filtrarLibro();
})
limpiarFiltro.addEventListener('click', limpiarFiltros);

//Funciones
document.addEventListener('DOMContentLoaded', () => {
    mostrarLibros(libros);
    mostrarContador(totalLibros);
    llenarSelect();
})

function mostrarLibros(libros) {
    limpiarHTML();
    limpiarNoResult()
    libros.forEach(libro => {
        const cardContainer = document.createElement('DIV');
        cardContainer.classList.add('bg-white', 'rounded-xl', 'shadow-md', 'overflow-hidden', 'transform', 'hover:scale-105', 'transition', 'duration-300', 'cursor-pointer');
        cardContainer.innerHTML = `<img src="${libro.img}" alt="Portada del Libro" class="w-full h-64">
                        <div class="p-4">
                            <h4 class="text-lg font-bold text-gray-800"> ${libro.titulo} </h4>
                            <p class="text-sm text-gray-500">${libro.autor}</p>
                            <p class="text-md font-semibold text-pastel-pink mt-2">$${libro.precio}</p>
                        </div>`;
        booksContainer.appendChild(cardContainer);
    });
}

function filtrarLibro() {

    const resultado = libros.filter(filtrarGenero).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarBusqueda);
    const countResultado = resultado.length;

    if (resultado.length) {
        mostrarLibros(resultado);
        mostrarContador(countResultado);
    } else {
        mostrarNoResult();
    }
}

function filtrarGenero(libro) {
    const { genero } = datosBusqueda;
    if (genero) {
        return libro.genero === genero;
    }
    return libro;
}

function filtrarMinimo(libro) {
    const { precioMin } = datosBusqueda;
    if (precioMin) {
        return libro.precio >= precioMin;
    }
    return libro;
}

function filtrarMaximo(libro) {
    const { precioMax } = datosBusqueda;
    if (precioMax) {
        return libro.precio <= precioMax
    }
    return libro;
}

function filtrarBusqueda(libro) {
    const { textoBusqueda } = datosBusqueda;
    if (!textoBusqueda) {
        return true;
    }
    const textoNormalizado = normalizarTexto(textoBusqueda).toLowerCase();
    const tituloLibro = normalizarTexto(libro.titulo).toLowerCase();
    const autorLibro = normalizarTexto(libro.autor).toLowerCase();
    return tituloLibro.includes(textoNormalizado) || autorLibro.includes(textoNormalizado);
}

function limpiarFiltros() {
    const datosBusqueda = {
        textoBusqueda: '',
        genero: '',
        precioMin: '',
        precioMax: ''
    }
    mostrarLibros(libros);
    mostrarContador(totalLibros);
    selectGenero.value = 'todos';
    precioMinimo.value = '';
    precioMaximo.value = '';

}

function llenarSelect() {
    const generos = extraerGeneros(libros);
    generos.forEach(genero => {
        const opcion = document.createElement('OPTION');
        opcion.value = genero;
        opcion.textContent = genero;
        selectGenero.appendChild(opcion);
    })
}


function extraerGeneros(datos) {
    const generosAll = datos.map(libro => libro.genero)
        //New Set(): Un Set es una colección de valores únicos. Al pasarle el array
        //    con duplicados, automáticamente elimina las repeticiones.
    const setGeneros = new Set(generosAll);

    //Array.from: Convierte la colección Set (que es un objeto similar a un array)
    //    de vuelta a un array estándar de JavaScript.
    const generosUnicos = Array.from(setGeneros);
    return generosUnicos;
}

function limpiarHTML() {
    while (booksContainer.firstChild) {
        booksContainer.removeChild(booksContainer.firstChild);
    }
}

function mostrarContador(count) {
    if (count) {
        const container = document.querySelector('#container-result');
        container.removeChild(container.firstChild);

    }
    const parentDiv = document.querySelector('#books-container').parentNode;
    const numberCont = document.createElement('P');
    numberCont.classList.add('text-lg', 'font-medium', 'text-gray-700', 'mb-6');
    numberCont.id = 'cantidad-result';
    numberCont.textContent = 'Mostrando';
    numberCont.innerHTML = `<span class="font-bold text-pastel-blue">${count}</span> ${ count ===1 ? 'resultado' : 'resultados'} de <span class="font-bold text-pastel-blue">50</span> libros totales.`;

    parentDiv.insertBefore(numberCont, booksContainer)
}

function limpiarNoResult() {
    limpiarHTML();
    const mensajeExistente = document.getElementById('no-result');

    if (mensajeExistente) {
        mensajeExistente.remove();
    }
}

function mostrarNoResult() {
    limpiarNoResult();
    const noResult = document.createElement('DIV');
    noResult.id = 'no-result';
    noResult.classList.add('flex-col', 'items-center', 'justify-center', 'p-8', 'text-center', 'bg-white', 'rounded-xl', 'shadow-lg', 'border', 'border-gray-200');
    noResult.innerHTML = `
    <svg class="w-16 h-16 text-pastel-pink mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <p class="text-2xl font-semibold text-gray-800 mb-2">
        ¡Vaya! Parece que no hay libros que coincidan. 🧐
    </p>
    <p class="mt-2 text-md text-gray-500 max-w-lg">
        Revisa la **ortografía** o prueba con **términos más generales**. También puedes intentar **limpiar los filtros** para ver toda nuestra colección.
    </p>
    <button class="mt-4 px-6 py-2 text-sm font-bold text-white bg-pastel-blue rounded-full hover:bg-pastel-purple transition duration-300 shadow-md">
        Limpiar Filtros
    </button>
    `;
    noResultContainer.appendChild(noResult);
}

function normalizarTexto(texto) {
    // NFD: Normalization Form Canonical Decomposition
    // Descompone los caracteres en su forma base y sus marcas diacríticas.
    // Luego, la expresión regular elimina las marcas diacríticas.
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}