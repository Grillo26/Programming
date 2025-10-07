//Variables
const formulario = document.querySelector('#formulario')
const lista = document.querySelector('#lista-tweets')

let tweets = [];

//Eventos
eventListeners();



//Funciones
function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el document esta lista
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    })
}

function agregarTweet(e){
    e.preventDefault();
    limpiarHTML();
    const tweet = document.querySelector('#tweet').value;
    if(tweet === ''){
        console.log('tweete vacio'); 
        mostrarError('Un mensaje no puede ir vacío');
    }

    const tweetOb = {
        id: Date.now(),
        tweet //Esto es igual a esto tweet: tweet
    }
    //Añadir al arreglo de twets
    tweets = [...tweets, tweetOb];
    crearHTML();

    //Reinicar el formulario
    formulario.reset();
    
}

function mostrarError(error){
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    
}

//muestra un listado de los tweets
function crearHTML(){
    limpiarHTML();
    if(tweets.length >0){
        tweets.forEach( tweet =>{

            //Agregar un boton de eliminar
            const bnEliminar = document.createElement('a');
            bnEliminar.textContent= 'X';

            //Añadir la funcin de eliminar
            bnEliminar.onclick= ()=>{
                borrarTweet(tweet.id);
            }

            //Crear el html
            const li = document.createElement('LI');
            //Añadir el texto
            li.innerText = tweet.tweet;

            //Asignar Boton
            li.appendChild(bnEliminar);

            //insertarlo e el html
            lista.appendChild(li);
        })
    }

    sincronizarStorage();
}

//Agrea los tweets al localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function limpiarHTML(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
}


//Eliniar tweet
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}