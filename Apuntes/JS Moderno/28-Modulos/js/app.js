import nuevaFuncion, { nombreCliente, ahorro, mostarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from './empresa.js';

nuevaFuncion();
console.log(nombreCliente)
console.log(ahorro)

console.log(mostarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro)

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostarInformacion());


const empresa = new Empresa('Codigo con grillo', 100, 'Apredizaje en linea');
console.log(empresa)
console.log(empresa.mostarInformacion());
