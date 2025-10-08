function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
Cliente.prototype.tipoCliente = function (){
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Gold';
    } else if (this.saldo > 5000){
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}
Cliente.prototype.nombreClieneSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo de Cliente: ${this.tipoCliente()}`;
}
Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

//Instanciarlo
const pedro = new Cliente('Pedro', 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClieneSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreClieneSaldo());

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo); //Herencia
    this.telefono = telefono;
}
Persona.prototype = Object.create( Cliente.prototype ); //Herencia. Para copiar los metodos
Persona.prototype.constructor = Cliente; //Herencia. Para que el constructor apunte a Cliente y no a Persona
//Instanciarlo
const juan = new Persona('Juan', 400, 55446677);
console.log(juan);
console.log(juan.nombreClieneSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El teléfono de esta persona es ${this.telefono}`;
}
console.log(juan.mostrarTelefono());