// Variables
const ubicacion = document.querySelector('#ubicacion');
const tipo = document.querySelector('#tipo');
const habitaciones = document.querySelector('#habitaciones');
const banos = document.querySelector('#banos');
const precioMin = document.querySelector('#precio-min')
const precioMax = document.querySelector('#precio-max');
const limpiarFiltros = document.querySelector('#limpiar');

const resultados = document.querySelector('#resultados');
const resultadosSecction = document.querySelector('#resultados-section');

const datosBusqueda = {
    ubicacion: '',
    tipo: '',
    habitaciones: '',
    banos: '',
    precioMin: '',
    precioMax: ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarPropiedades(propiedades);
    //Posteriormente llenaremos los select con la base de datos    
});

ubicacion.addEventListener('input', (e) => {
    datosBusqueda.ubicacion = e.target.value;
    filtrarPropiedad();
})
tipo.addEventListener('change', (e) => {
    datosBusqueda.tipo = e.target.value;
    filtrarPropiedad();
});
habitaciones.addEventListener('change', (e) => {
    datosBusqueda.habitaciones = parseInt(e.target.value);
    filtrarPropiedad();
});
banos.addEventListener('change', (e) => {
    datosBusqueda.banos = parseInt(e.target.value);
    filtrarPropiedad();
});
precioMin.addEventListener('input', (e) => {
    datosBusqueda.precioMin = parseInt(e.target.value);
    filtrarPropiedad();
});
precioMax.addEventListener('input', (e) => {
    datosBusqueda.precioMax = parseInt(e.target.value);
    filtrarPropiedad();
});

limpiarFiltros.addEventListener('click', () => {
    limpiarHTML();
    mostrarPropiedades(propiedades);
    const datosBusqueda = {
        ubicacion: '',
        tipo: '',
        habitaciones: '',
        banos: '',
        precioMin: '',
        precioMax: ''
    }
    ubicacion.value = '';
    tipo.value = '';
    habitaciones.value = '';
    banos.value = '';
    precioMin.value = '';
    precioMax.value = '';
})




//Funciones
function mostrarPropiedades(propiedades) {

    limpiarHTML();

    propiedades.forEach(propiedad => {

        const cardPropiedad = document.createElement('DIV');
        cardPropiedad.classList.add('bg-gray-800', 'rounded-xl', 'shadow-lg', 'overflow-hidden', 'transition-transform', 'duration-300', 'hover:scale-105');

        const imgPropiedad = document.createElement('IMG');
        imgPropiedad.classList.add('w-full', 'h-48', 'object-cover');
        imgPropiedad.src = propiedad.imagen;

        const infoPropiedad = document.createElement('DIV');
        infoPropiedad.classList.add('p-6');

        const tituloPropiedad = document.createElement('P');
        tituloPropiedad.classList.add('text-lg', 'font-bold', 'text-white', 'mb-1');
        tituloPropiedad.textContent = propiedad.titulo;

        const precioPropiedad = document.createElement('P');
        precioPropiedad.classList.add('text-blue-400', 'text-xl', 'font-extrabold', 'mb-3');
        precioPropiedad.textContent = `$${ propiedad.precio}`;

        const infoSubPropiedad = document.createElement('DIV');
        infoSubPropiedad.classList.add('flex', 'items-center', 'text-gray-400', 'text-sm', 'space-x-4', 'mb-3')

        // Crea el elemento para las habitaciones
        const spanHabitaciones = document.createElement('span');
        spanHabitaciones.classList.add('flex', 'items-center', 'mr-4');
        spanHabitaciones.innerHTML = `<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7-7 7 7M15 10v10a1 1 0 001 1h3"></path></svg>
               ${ propiedad.habitaciones} ${ propiedad.habitaciones === 1 ? 'Habitación' : 'Habitaciones'}`;

        // Crea el elemento para los baños
        const spanBanos = document.createElement('span');
        spanBanos.classList.add('flex', 'items-center');
        spanBanos.innerHTML = `<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> 
              ${ propiedad.banos} ${ propiedad.banos === 1 ? 'Baño' : 'Baños'} 
       `; //Comprueba si Baños es 1 imprimir un texto en singular, delo contrario imprimirá en plural

        const infoUbicacion = document.createElement('P');
        infoUbicacion.classList.add('text-gray-500', 'text-sm');
        infoUbicacion.textContent = `Ubicación: ${propiedad.ubicacion}, Tipo: ${propiedad.tipo}`;

        infoSubPropiedad.appendChild(spanHabitaciones);
        infoSubPropiedad.appendChild(spanBanos);

        infoPropiedad.appendChild(tituloPropiedad);
        infoPropiedad.appendChild(precioPropiedad);
        infoPropiedad.appendChild(infoSubPropiedad);
        infoPropiedad.appendChild(infoUbicacion);

        cardPropiedad.appendChild(imgPropiedad);
        cardPropiedad.appendChild(infoPropiedad);

        resultados.appendChild(cardPropiedad);

    });

}

function limpiarHTML() {
    while (resultados.firstChild) {
        resultados.removeChild(resultados.firstChild);
    }
    const noResultsMessage = document.getElementById('no-results');
    if (noResultsMessage) {
        noResultsMessage.remove();
    }
}

function filtrarPropiedad() {
    const resultado = propiedades.filter(filtrarUbicacion)
        .filter(filtrarTipo).filter(filtrarHabitaciones)
        .filter(filtrarBanos).filter(filtrarMinimo).filter(filtrarMaximo);

    if (resultado.length) {
        mostrarPropiedades(resultado)
    } else {
        noResultado();
    }

}

function noResultado() {
    limpiarHTML();
    const noResultsDiv = document.createElement('div');
    noResultsDiv.id = "no-results";
    noResultsDiv.className = "flex flex-col items-center justify-center p-6 text-center bg-gray-800 rounded-lg shadow-sm border border-gray-700";

    // Crear y añadir el SVG del icono y el texto
    noResultsDiv.innerHTML = `
        <svg class="w-12 h-12 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p class="text-xl font-semibold text-gray-200">No se encontraron resultados</p>
        <p class="mt-2 text-sm text-gray-400 max-w-sm">Parece que no hay elementos que coincidan con tu búsqueda. Intenta ajustar los filtros o los términos de búsqueda.</p>
    `;

    // Añadir el mensaje al contenedor
    resultadosSecction.appendChild(noResultsDiv);

}

function normalizarTexto(texto) {
    // NFD: Normalization Form Canonical Decomposition
    // Descompone los caracteres en su forma base y sus marcas diacríticas.
    // Luego, la expresión regular elimina las marcas diacríticas.
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function filtrarUbicacion(propiedad) {
    const { ubicacion } = datosBusqueda;
    if (ubicacion) {
        // Usamos includes() para una búsqueda flexible y toLowerCase() para que sea insensible a mayúsculas/minúsculas
        //return propiedad.ubicacion.toLowerCase().includes(ubicacion.toLowerCase());
        // Normalizamos ambos textos para que la búsqueda ignore tildes y sea insensible a mayúsculas/minúsculas
        const ubicacionNormalizada = normalizarTexto(propiedad.ubicacion).toLowerCase();
        const busquedaNormalizada = normalizarTexto(ubicacion).toLowerCase();
        return ubicacionNormalizada.includes(busquedaNormalizada);
    }
    return propiedad;
}

function filtrarTipo(propiedad) {
    const { tipo } = datosBusqueda;
    if (tipo) {
        return propiedad.tipo === tipo;
    }
    return propiedad;
}

function filtrarHabitaciones(propiedad) {
    const { habitaciones } = datosBusqueda;
    if (habitaciones) {
        return propiedad.habitaciones === habitaciones;
    }
    return propiedad;
}

function filtrarBanos(propiedad) {
    const { banos } = datosBusqueda;
    if (banos) {
        return propiedad.banos === banos;
    }
    return propiedad;
}

function filtrarMinimo(propiedad) {
    const { precioMin } = datosBusqueda;
    if (precioMin) {
        return propiedad.precio >= precioMin;
    }
    return propiedad;
}

function filtrarMaximo(propiedad) {
    const { precioMax } = datosBusqueda;
    if (precioMax) {
        return propiedad.precio <= precioMax;
    }
    return propiedad;
}