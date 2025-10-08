function Cliente( nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
const juan = new Cliente('Carlos Juan ', 400); //-------------> instancia

function formatearCliente(cliente){
    const {nombre, saldo } = cliente;

    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log( formatearCliente(juan));

function Empresa( nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}
const CCJ = new Empresa('Codigo con Juan', 4400, 'Cursos en LInea'); //------> instancia
console.log(formatearCliente(CCJ));

function formatearEmpresa(cliente){
    const {nombre, saldo, categoria } = cliente;

    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertence a la categoría ${categoria}`;
}
console.log(formatearEmpresa(CCJ));