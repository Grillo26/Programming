class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    static bienvenida() { //NO requiere una instancia, perteneces mas bien a la clase
        return 'Bienvenido al cajero';
    }

}
const juan = new Cliente('JUan', 200); //----> INSTANCIANDO
console.log(juan.mostrarInformacion());
console.log(juan);
console.log(Cliente.bienvenida());


const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}
const juan2 = new Cliente2('Pdro', 33999);
console.log(juan2.mostrarInformacion());
console.log(juan2);