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

//Hernecia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); //Llama al constructor padre
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida() { //Toma esta nueva clase, en cambio si no esta definida toma la del padre
        return 'Bienvenido al cajero de empresas';
    }


}

const juan = new Cliente('JUan', 200); //----> INSTANCIANDO
const empresa = new Empresa('Codigo con Carlos', 3299, 233, 'Aprendizaje desde casa');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());