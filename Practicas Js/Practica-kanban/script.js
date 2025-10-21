/**
 *  SELECTORES
 */


const formulario = document.querySelector('#formulario-tarea');
const inputNombre = document.querySelector('#nombre');
const inputDescripcion = document.querySelector('#descripcion');
const fechaLimite = document.querySelector('#fecha_limite');
const btnSubmit = document.querySelector('#formulario-tarea input[type="submit"]');

const columnaPendiente = document.querySelector('#columna-pendiente');
const columnaProgreso = document.querySelector('#columna-progreso');
const columnaFinalizado = document.querySelector('#columna-finalizado');


//Objecto de la tarea
const tareaObj = {
       id: generarId(),
       nombre: '',
       descripcion: '',
       estado: 'pendiente',
       fecha_limite: ''
}

let editando = false;

/**
 *  EVENTOS
 */

inputNombre.addEventListener('change', datosTarea);
inputDescripcion.addEventListener('change', datosTarea);
fechaLimite.addEventListener('change', datosTarea);
formulario.addEventListener('submit', submitTarea);
// estado.addEventListener('change', datosTarea);
/**
 *  CLASES
 */

class AdminProyectos {
       constructor() {
              this.proyectos = [];
       }

       agregar(proyecto) {
              this.proyectos = [...this.proyectos, proyecto];
              this.mostrarTareas();
       }

       eliminar(id) {
              this.proyectos = this.proyectos.filter(proyecto => proyecto.id !== id);
              this.mostrarTareas();
       }

       editar(tareaActualizada) {
              this.proyectos = this.proyectos.map(proyecto => proyecto.id === tareaActualizada.id ? tareaActualizada : proyecto);
              this.mostrarTareas();
       }

       cambiarEstado(id, nuevoEstado) {
              this.proyectos = this.proyectos.map(tarea => {
                     if (tarea.id === id) {
                            return { ...tarea, estado: nuevoEstado }
                     }
                     return tarea;
              })
              this.mostrarTareas();
       }

       mostrarTareas() {

              while (columnaPendiente.firstChild) {
                     columnaPendiente.removeChild(columnaPendiente.firstChild);
              }
              while (columnaProgreso.firstChild) {
                     columnaProgreso.removeChild(columnaProgreso.firstChild);
              }
              while (columnaFinalizado.firstChild) {
                     columnaFinalizado.removeChild(columnaFinalizado.firstChild);
              }

              console.log(this.proyectos);
              this.proyectos.forEach(tarea => {
                     let color = 'red-500';
                     if (tarea.estado === 'progreso') color = 'yellow-500';
                     if (tarea.estado === 'finalizado') color = 'green-500';

                     const cardTarea = document.createElement('DIV');
                     cardTarea.classList.add('card-tarea', 'p-4', 'bg-white', 'dark:bg-gray-700', 'rounded-lg', 'shadow-md', 'border-l-4')
                     cardTarea.classList.add(`border-${color}`);

                     const tituloTarea = document.createElement('H4');
                     tituloTarea.classList.add('text-lg', 'font-semibold', 'mb-1', 'text-gray-900', 'dark:text-gray-100');
                     tituloTarea.textContent = tarea.nombre;

                     const descripcionTarea = document.createElement('P');
                     descripcionTarea.classList.add('text-sm', 'text-gray-600', 'dark:text-gray-400', 'mb-2')
                     descripcionTarea.textContent = tarea.descripcion;

                     const divFechaLimite = document.createElement('DIV');
                     divFechaLimite.classList.add('flex', 'justify-between', 'items-center', 'text-xs', 'mt-3', 'pt-3', 'border-t', 'border-gray-100', 'dark:border-gray-600')
                     divFechaLimite.innerHTML = `<span class="font-medium text-gray-500 dark:text-gray-300">
                                                        Límite: <span class="text-${color}">${tarea.fecha_limite}</span>
                                                 </span>
                     `;

                     const divActions = document.createElement('DIV');
                     divActions.classList.add('mt-4', 'flex', 'flex-col', 'space-y-2')

                     const btnEliminar = document.createElement('BUTTON');
                     btnEliminar.classList.add('text-xs', 'py-1.5', 'px-3', 'bg-red-100', 'text-red-700', 'rounded', 'hover:bg-red-200', 'transition');
                     btnEliminar.textContent = '🗑️ Eliminar';
                     btnEliminar.onclick = () => this.eliminar(tarea.id);
                     divActions.appendChild(btnEliminar);

                     if (tarea.estado !== 'finalizado') {
                            const btnMover = document.createElement('BUTTON');
                            btnMover.classList.add('text-xs', 'py-1.5', 'px-3', 'bg-yellow-100', 'text-yellow-700', 'rounded', 'hover:bg-yellow-200', 'transition');
                            if (tarea.estado === 'pendiente') {
                                   btnMover.textContent = '➡️ Mover a Progreso';
                                   btnMover.onclick = () => this.cambiarEstado(tarea.id, 'progreso');
                            } else {
                                   btnMover.textContent = '➡️ Mover a Finalizado';
                                   btnMover.onclick = () => this.cambiarEstado(tarea.id, 'finalizado');
                            }

                            divActions.appendChild(btnMover);
                     }

                     const btnEditar = document.createElement('BUTTON');
                     btnEditar.classList.add('text-xs', 'py-1.5', 'px-3', 'bg-indigo-100', 'text-indigo-700', 'rounded', 'hover:bg-indigo-200', 'transition');
                     btnEditar.textContent = '📝 Editar';
                     // const clone = structuredClone(tarea);
                     const tareaACargar = { ...tarea }; //Clonacion superficial
                     btnEditar.onclick = () => cargarEdicion(tareaACargar);
                     divActions.appendChild(btnEditar);

                     cardTarea.appendChild(tituloTarea);
                     cardTarea.appendChild(descripcionTarea);
                     cardTarea.appendChild(divFechaLimite);
                     cardTarea.appendChild(divActions);

                     if (tarea.estado === 'pendiente') {
                            columnaPendiente.appendChild(cardTarea);
                     } else if (tarea.estado === 'progreso') {
                            columnaProgreso.appendChild(cardTarea);
                     } else if (tarea.estado === 'finalizado') {
                            columnaFinalizado.appendChild(cardTarea);
                     }

              })

       }
}

class Notificacion {
       constructor({ texto, tipo }) {
              this.texto = texto;
              this.tipo = tipo;

              this.mostrar();
       }

       mostrar() {

              const alertaExito = document.querySelector('#alerta-exito');
              const alertaError = document.querySelector('#alerta-error');

              this.tipo === 'exito'
                     ? (alertaExito.classList.remove('hidden'), alertaExito.textContent = this.texto)
                     : (alertaError.classList.remove('hidden'), alertaError.textContent = this.texto)

              setTimeout(() => {
                     alertaExito.classList.add('hidden');
                     alertaError.classList.add('hidden');
              }, 3000)

       }

}
/**
 *  FUNCIONES
 */

//Método para generar id's
function generarId() {
       return Math.random().toString(36).substring(2) + Date.now();
}

//Método para almacenar lo que se inserta en el formulario en el objecto creado
function datosTarea(e) {
       tareaObj[e.target.name] = e.target.value;
}

const proyectos = new AdminProyectos();

//Al enviar el formulario 
function submitTarea(e) {
       e.preventDefault();


       if (Object.values(tareaObj).some(valor => valor.trim() === '')) {
              new Notificacion({
                     texto: 'Campos Vacíos',
                     tipo: 'error'
              })
              return;
       }
       if (editando) {
              proyectos.editar({ ...tareaObj });
              new Notificacion({
                     texto: 'Editado Correctamente',
                     tipo: 'exito'
              })
       } else { //Aquí se agrega 
              proyectos.agregar({ ...tareaObj });
              new Notificacion({
                     texto: 'Agregado Correctamente',
                     tipo: 'exito'
              });
       }

       formulario.reset();
       reinciarObjectoTarea();
       btnSubmit.value = 'Crear Tarea';
       editando = false;

}

//Reinicia el tareaObj, digo que en tareaObj superponga con los datos del nuevo objeto, en este caso vacios
function reinciarObjectoTarea() {
       Object.assign(tareaObj, {
              id: generarId(),
              nombre: '',
              descripcion: '',
              estado: 'pendiente',
              fecha_limite: ''
       })
}

function cargarEdicion(tarea) {
       Object.assign(tareaObj, tarea); //en tarea llega lo que le pasamos desde el boton y lo asigna a tareaObj, y en el input editamos todo

       inputNombre.value = tarea.nombre;
       estado = tarea.estado;
       inputDescripcion.value = tarea.descripcion;
       fechaLimite.value = tarea.fecha_limite;
       btnSubmit.value = tarea;

       editando = true;

       btnSubmit.value = 'Actualizar';

}