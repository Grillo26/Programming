/**
 * SELECTORES
 */
const formularioContacto = document.querySelector('#formulario-contacto');
const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputTelefono = document.querySelector('#telefono');
const inputEmail = document.querySelector('#email');
const btnImput = document.querySelector('#formulario-contacto input[type="submit"]');
const listaContactos = document.querySelector('#lista-contactos');

//Alertas
const alertaExito = document.querySelector('#alerta-exito')
const alertaError = document.querySelector('#alerta-error')

let editando = false;

//Objecto contacto
const contactoObj = {
       id: generarId(),
       nombre: '',
       apellido: '',
       telefono: '',
       email: ''
}

/**
 * EVENTOS
 */

inputNombre.addEventListener('change', datosContacto);
inputApellido.addEventListener('change', datosContacto);
inputTelefono.addEventListener('change', datosContacto);
inputEmail.addEventListener('change', datosContacto);
formularioContacto.addEventListener('submit', submitContacto);

eventListeners();

/**
 * CLASES
 */
class Notificacion {
       constructor({ texto, tipo }) {
              this.texto = texto;
              this.tipo = tipo;

              this.mostrar();
       }

       mostrar() {
              this.tipo === 'error'
                     ? (alertaError.classList.remove('hidden'), alertaError.textContent = this.texto)
                     : (alertaExito.classList.remove('hidden'), alertaExito.textContent = this.texto)
              setTimeout(() => {
                     alertaError.classList.add('hidden');
                     alertaExito.classList.add('hidden');
              }, 3000);
       }
}

class AdminContactos {
       constructor() {
              this.contactos = [];
       }

       cargarStorage() {
              this.contactos = JSON.parse(localStorage.getItem('Contactos')) || [];
              this.mostrarContactos();
       }

       agregarContacto(contacto) {
              this.contactos = [...this.contactos, contacto];
              localStorage.setItem('Contactos', JSON.stringify(this.contactos));
              this.mostrarContactos();
       }

       editarContacto(contactoActualizado) {
              this.contactos = this.contactos.map(contacto => contacto.id === contactoActualizado.id ? contactoActualizado : contacto);
              localStorage.setItem('Contactos', JSON.stringify(this.contactos));
              this.mostrarContactos();
       }

       eliminarContacto(id) {
              this.contactos = this.contactos.filter(contacto => contacto.id !== id); //Filtra a todos los que no tenga el mismo id que le inviamos en ID
              localStorage.setItem('Contactos', JSON.stringify(this.contactos));
              this.mostrarContactos();
       }


       mostrarContactos() {

              while (listaContactos.firstChild) {
                     listaContactos.removeChild(listaContactos.firstChild);
              }

              if (this.contactos.length === 0) {
                     listaContactos.innerHTML = `<tr class="text-center">
                                                 <td colspan="5" class="p-4 text-gray-500 dark:text-gray-400">
                                                        No hay contactos registrados.
                                                 </td>
                                          </tr>`
                     return;
              }

              //Generando los contactos
              this.contactos.forEach(contacto => {

                     //Definiendo los campos que iran en la tabla
                     const campos = ['nombre', 'apellido', 'telefono', 'email', 'acciones'];
                     const tr = document.createElement('TR');
                     tr.classList.add('text-center');

                     campos.forEach(campo => {
                            const td = document.createElement('TD');
                            td.classList.add('p-4', 'text-gray-500', 'dark:text-gray-400');

                            if (campo === 'acciones') {
                                   //Boton editar (más pequeño)
                                   const btnEditar = document.createElement('button');
                                   btnEditar.classList.add('py-3', 'px-3', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-semibold', 'text-sm', 'rounded-md', 'flex', 'items-center', 'gap-1', 'btn-editar');
                                   btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
                                   const contactoACargar = { ...contacto }; //Clonacion superficial
                                   btnEditar.onclick = () => cargarEdicion(contactoACargar);

                                   //boton eliminar (más pequeño)
                                   const btnEliminar = document.createElement('button');
                                   btnEliminar.classList.add('py-3', 'px-3', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-semibold', 'text-sm', 'rounded-md', 'flex', 'items-center', 'gap-1');
                                   btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
                                   btnEliminar.onclick = () => this.eliminarContacto(contacto.id);

                                   const contenedorBotones = document.createElement('DIV')
                                   contenedorBotones.classList.add('flex', 'items-center', 'justify-center', 'gap-2');
                                   contenedorBotones.appendChild(btnEditar);
                                   contenedorBotones.appendChild(btnEliminar);

                                   td.appendChild(contenedorBotones);
                            } else {
                                   td.textContent = contacto[campo] ?? '';
                            }

                            tr.appendChild(td);

                     })

                     listaContactos.appendChild(tr);

              })
       }
}

/**
 * FUNCIONES
 */

const contactos = new AdminContactos();

function generarId() {
       return Math.random().toString(36).substring(2) + Date.now();
}

//Añadiendo lo que se manda desde los eventos
function datosContacto(e) {
       contactoObj[e.target.name] = e.target.value;
}

//Guarda cuando le da al boton de submit
function submitContacto(e) {
       e.preventDefault();

       if (Object.values(contactoObj).some(valor => valor.trim() === '')) {
              new Notificacion({
                     texto: 'Algunos campos están vacíos',
                     tipo: 'error'
              });
              return;
       } else if (editando) {
              contactos.editarContacto({ ...contactoObj });
              new Notificacion({
                     texto: 'Actualizado Correctamente!',
                     tipo: 'exito'
              })

       }
       else {
              contactos.agregarContacto({ ...contactoObj });
              new Notificacion({
                     texto: 'Guardado Correctamente!',
                     tipo: 'exito'
              })
       }

       formularioContacto.reset();
       btnImput.value = 'Guardar Contacto';
       editando = false;
       reiniciarObjeto();
}

function cargarEdicion(contacto) {
       Object.assign(contactoObj, contacto);

       inputNombre.value = contacto.nombre;
       inputApellido.value = contacto.apellido;
       inputTelefono.value = contacto.telefono;
       inputEmail.value = contacto.email;

       editando = true;

       btnImput.value = 'Actualizar';
}

function reiniciarObjeto() {
       Object.assign(contactoObj, {
              id: generarId(),
              nombre: '',
              apellido: '',
              telefono: '',
              email: ''
       })
}

function eventListeners() {

       document.addEventListener('DOMContentLoaded', () => {
              contactos.cargarStorage();
       })
}


