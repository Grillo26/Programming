// Esta es la menos dinámica se llamA "Object Literal"
const cliente = {
    nombre:'Juan',
    saldo: 500
}
console.log(cliente);
console.log(typeof cliente);

//Es menos comun pero permite crear objecto dinamicos "Object Constructor"
function Cliente( nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
const juan = new Cliente('Carlos Juan ', 400);
console.log(juan);