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