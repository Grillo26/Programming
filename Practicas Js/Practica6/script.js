//Variables <---------------------
const btnLimpiarFiltros = document.querySelector('#clear-filters-btn');
const recetasContainer = document.querySelector('#recetas-container');
const tabsDesktop = document.querySelector('#tabs-desktop');
const tabsContent = document.querySelector('#tabs-content');
const filtroSeleccionado = new Set();
const ingredientesSeleccionados = [];

//Eventos <-----------------------
document.addEventListener('DOMContentLoaded', () => {
    mostrarFiltros(recetas);
    mostrarRecetas(recetas);
});

tabsContent.addEventListener('click', (e) => {
    if (e.target.classList.contains('ingrediente-btn')) { //ingredient-btn se añade cuando creamos el filtro 
        const boton = e.target;
        const ingrediente = boton.dataset.ingrediente;
        cambiarColor(boton);
        filtrarRecetas(ingrediente);
    }
})


//Funciones <---------------------

//Funcion para mostrar los filtros
function mostrarFiltros(recetas) {
    const ingredientes = recetas.flatMap(receta => receta.ingredientes);
    const setIngredientes = new Set(ingredientes);
    const ingredientesArray = [...setIngredientes];
    ingredientesArray.sort();

    const ingredientesPorCategorias = agruparPorCategoría(ingredientesArray, mapeoCategorias); //<--- Objeto con los ingredientes por categoría ya separados

    for (const categoria in ingredientesPorCategorias) {
        const listaIngrediente = ingredientesPorCategorias[categoria];
        crearTabs(categoria, listaIngrediente);
    }

}

function crearTabs(categoria, filtros) {

    const identificador = categoria.toLowerCase().replace(/\s/g, '-');

    //Primero creado las listas superiores que separan las pesatañas
    const listaTitulos = document.createElement('LI');
    listaTitulos.classList.add('w-full', 'focus-within:z-10');
    listaTitulos.innerHTML = `<a href="#" class="tab-link inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg active-tab focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page" data-target="${identificador}">${categoria}</a>`;
    tabsDesktop.appendChild(listaTitulos);

    //Ahora creado los contenedores que contendran los botones
    const listaContainer = document.createElement('DIV');
    listaContainer.classList.add('tab-pane', 'active-pane');
    listaContainer.id = identificador;

    listaContainer.innerHTML = `
                        <div class="flex flex-wrap gap-2 max-h-60 mt-2 overflow-y-auto p-1">
                        ${crearFiltros(filtros)}
                        </div>`;
    tabsContent.appendChild(listaContainer);

}

function crearFiltros(filtros) {
    const htmlBotones = filtros.map(ingrediente => {
        const variable = ingrediente.toLowerCase().replace(/\s/g, '-');
        const nombreVisible = ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1);


        //Clases tailwdin 
        const clasesTailwind = 'ingrediente-btn px-4 py-2 text-sm rounded-full border border-gray-600 bg-gray-700 text-white hover:bg-gray-600 transition-all duration-200';
        return `<button class="${clasesTailwind}" data-ingrediente="${variable}">
                    ${nombreVisible}
                </button>`;
    })

    return htmlBotones.join('');
}

function mostrarRecetas(recetas) {
    recetas.forEach(receta => {
        const ingredientesArray = receta.ingredientes;
        const divRecetas = document.createElement('DIV');
        divRecetas.classList.add('bg-surface', 'rounded-xl', 'shadow-lg', 'overflow-hidden', 'transition-transform', 'duration-300', 'hover:scale-[1.02]', 'border', 'border-gray-700');
        divRecetas.innerHTML = `<img src="${receta.imagen}" alt="Imagen de ${receta.titulo}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-2 truncate">${receta.titulo}</h3>
                        <p class="text-primary font-semibold mb-3">5 Ingredientes necesarios</p>
                        <div class="text-gray-400 text-sm mb-4">
                            <span class="block"> ${ingredientesArray}    
                            </span>
                        </div>
                        <a href="#" class="inline-block px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                            Ver Receta
                        </a>
                    </div>`;

        recetasContainer.appendChild(divRecetas);
    })


}
//Funcion para agrupar por categorías
function agruparPorCategoría(ingredientes, mapeo) {
    const categoriasAgrupadas = {}; //Objeto final que contrá las categorias

    ingredientes.forEach(ingrediente => {
        const categoria = mapeo[ingrediente] || "Otros"; //Obtiene la categoría del mapeo si no esta usa OTROS

        if (!categoriasAgrupadas[categoria]) {
            categoriasAgrupadas[categoria] = [];
        }

        categoriasAgrupadas[categoria].push(ingrediente); //Añade el ingrediente al array de su categoria
    })

    return categoriasAgrupadas;
}

function cambiarColor(boton) {
    if (boton.classList.contains('bg-gray-700')) {
        boton.classList.remove('bg-gray-700', 'hover:bg-gray-600')
        boton.classList.add('bg-primary')
    } else {

        boton.classList.remove('bg-primary');
        boton.classList.add('bg-gray-700')
    }
}

function filtrarRecetas(item) {
    const ingredienteSinGuiones = item.replace(/-/g, ' ');
    console.log(ingredienteSinGuiones)
}