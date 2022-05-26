
const autenticado = true;

if (autenticado){ //Autenticado === true no es recomendable poner dentro de un if
    console.log('si puedes ver netflix');
}
else{
    console.log('no puedes verlo');
}

//Operador ternario
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');