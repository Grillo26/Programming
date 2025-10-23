export const nombreCliente = 'Carlos';
export const ahorro = 200;

export function mostarInformacion(nombre, ahorro) {
       return `cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
       if (ahorro > 0) {
              console.log('Si tiene saldo');
       } else {
              console.log('El cliente no tiene saldo')
       }
}

export class Cliente {
       constructor(nombre, ahorro) {
              this.nombre = nombre;
              this.ahorro = ahorro;
       }
       mostarInformacion() {
              return `cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;

       }
}

export default function nuevaFuncion() { //Uno por archivo, tambien puede quedarse sin nombre
       console.log('Este es el export default')
}