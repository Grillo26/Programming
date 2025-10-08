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

