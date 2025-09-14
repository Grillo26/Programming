//---------->Variables
// 

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado'); //->Contenedor para los resultados
const max = new Date().getFullYear(); //getFullYear -> toma el año actual
const min = max -10;

const datosBusqueda = { //Generar un objeto de busqueda
    marca :'',
    year :'',
    minimo :'',
    maximo :'',
    puertas: '',
    transmision :'',
    color :'',
   

}

//------------>Eventos
// 
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos); //Muestra los autos al cargar
    llenarSelect();
});

marca.addEventListener('change', (e) => {
    datosBusqueda.marca= e.target.value;
    filtrarAuto();
})
year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})
maximo.addEventListener('change', (e) =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})
puertas.addEventListener('change', (e) =>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})
transmision.addEventListener('change', (e) =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
color.addEventListener('change', (e) =>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
})



//------------>Funciones
//
function mostrarAutos(autos){

    limpiarHTML(); //Elimina el html previo
    autos.forEach( auto =>{

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        //Insertando en el HTML
        resultado.appendChild(autoHTML);
    })
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

}

function llenarSelect(){
    for( let i = max; i >= min; i--){
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega opciones al select 
    }
}

function filtrarAuto(){ //Funcion que filtra en base a la búsqueda
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
    .filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas)
    .filter(filtrarTransimision).filter(filtrarColor); //--> funciones de alto niel, funciones que llaman a otra funciony ue soporta encadenamiento
    // console.log(resultado)
   

    if( resultado.length ){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No Hay Resultados, Intenta con otros términos de búsqueda';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){ //Automáticamente auto será la version iterada de la anterior.
    const { year } = datosBusqueda;

    if( year ){
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;

    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;

    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;

    if( puertas ){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransimision(auto){
    const { transmision } = datosBusqueda;

    if( transmision ){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const { color } = datosBusqueda;

    if( color ){
        return auto.color === color;
    }
    return auto;
}