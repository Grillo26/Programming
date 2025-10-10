//Variables y sleectores
const forumalaior = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




//Eventos 

eventListenets();

function eventListenets() {

    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
    forumalaior.addEventListener('submit', agregarGasto);

}





//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
        console.log(this.restante);;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        console.log(this.gastos);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        //Extraer el valor
        const { presupuesto, restante } = cantidad;

        //Agregando al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        //crear div
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, forumalaior);

        //Quitar el HMLT
        setTimeout(() => {
            divMensaje.remove();
        }, 3000)
    }

    mostrarGastos(gastos) {

        this.limpiarHTML(); //Elimina el html previo, así se llama un método

        //iterar sobre los gastos
        gastos.forEach(gasto => {
            const { cantidad, nombre, id } = gasto; //En ves de escribir gasto.cantidad, gasto.nombre

            //Crear el LI
            const nuevoGasto = document.createElement('LI');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; //data-id

            //Agrear el HTML del gasto
            nuevoGasto.innerHTML = ` ${nombre} <span class="badge-primary badge-pill">$ ${cantidad} </span>
            `;

            //boton para borrar del grupo
            const btnBorrar = document.createElement('BUTTON');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;'
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //Agregar al html
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const restateDiv = document.querySelector('.restante');

        //Comprobar 25%
        if ((presupuesto / 4) > restante) {
            restateDiv.classList.remove('alert-success', 'alert-warning');
            restateDiv.classList.add('alert-danger');
        } else if ((presupuesto / 2) > restante) {
            restateDiv.classList.remove('alert-success');
            restateDiv.classList.add('alert-warning');
        } else {
            restateDiv.classList.remove('alert-danger', 'alert-warning');
            restateDiv.classList.add('alert-success');
        }

        //Si el total es 0 o menor
        if (restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            forumalaior.querySelector('button[type="submit"]').disabled = true;
        }
    }


}

//Instanciar
const ui = new UI();
let presupuesto;


//Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('Cual es tu presupuesto?');
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();

    //leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //VAlidar
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;

    } else if (cantidad <= 0 || isNaN(cantidad)) { //Validando que no sea negativo y que no escriba letras
        ui.imprimirAlerta('Cantidad NO valida', 'error'); //Observación: si almacena si le pongo un .100
        return;
    }

    //Generar un objeto gasto
    //const { nombre, gasto } = gasto; Esto extrae nombre y cantidad de gasto
    const gasto = { nombre, cantidad, id: Date.now() } //esto une nombre y cantidad a gasto

    //añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    //Mensaje de tdo bien
    ui.imprimirAlerta('Gasto Agregado Correctamente');

    //imprimir los gasto
    const { gastos, restante } = presupuesto; //pasando solamente los gastos
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);



    //Reinicia el formulario
    forumalaior.reset();
}

function eliminarGasto(id) {
    //Elmina de la clase o del objeto
    presupuesto.eliminarGasto(id);

    //Elimina los gasto del html
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}