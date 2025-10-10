document.addEventListener('DOMContentLoaded', function() {

    const datosFormulario = {
        nombre: '',
        email: '',
        mensaje: ''
    }

    //Obeniendo referencias
    const formulario = document.querySelector('#contact-form');
    const inputNombre = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputMensaje = document.querySelector('#message');
    const buttonEnviar = document.querySelector('#contact-form button[type="submit"]');
    const modal = document.querySelector('#success-modal');
    const buttonCerrarModal = this.querySelector('#close-modal-btn');

    //Asignando eventos
    inputNombre.addEventListener('input', validar);
    inputEmail.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarFomulario);
    buttonCerrarModal.addEventListener('click', cerrarModal);

    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.name} es obligatorio`, e.target.nextElementSibling, e.target);
            datosFormulario[e.target.name] = '';
            mostrarBoton();
            return
        }
        //Verificar Email
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta(`Este campo no contiene un email.`, e.target.nextElementSibling, e.target)
            datosFormulario[e.target.name] = '';
            mostrarBoton();
            return
        }

        datosFormulario[e.target.name] = e.target.value;
        console.log(datosFormulario);

        limpiarAlerta(e.target.parentElement, e.target);

        //Asginar los valores
        datosFormulario[e.target.name] = e.target.value.trim().toLowerCase();

        mostrarBoton();
    }

    function mostrarAlerta(mensaje, referencia, input) {

        //Extraemos id del <p> para luego vincular ese id y saber a que campo tenemos que añadir la alerta
        let id = referencia.id
        campo = document.querySelector(`#${id}`)

        campo.classList.remove('hidden');
        campo.textContent = mensaje;

        input.classList.remove('focus:border-blue-500');
        input.classList.add('border-red-500');

    }

    function limpiarAlerta(referencia, input) {
        const alerta = referencia.lastElementChild;
        alerta.classList.add('hidden');
        input.classList.add('focus:border-blue-500')
        input.classList.remove('border-red-500');
    }

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const resultado = regex.test(email);
        return resultado;
    }

    //Comprueba que no tenga datos vacios
    function mostrarBoton() {
        if (Object.values(datosFormulario).includes('')) {
            buttonEnviar.classList.add('disabled:bg-gray-400', 'disabled:cursor-not-allowed')
            buttonEnviar.disabled = true;
            return;
        }
        buttonEnviar.classList.remove('disabled:bg-gray-400', 'disabled:cursor-not-allowed');
        buttonEnviar.disabled = false;
    }

    function enviarFomulario(e) {
        const overlay = document.querySelector('#overlay');
        overlay.classList.remove('hidden');

        e.preventDefault();
        setTimeout(() => {
            overlay.classList.add('hidden');
            modal.classList.remove('hidden');
            resetFormulario();

        }, 3000)
        console.log('Desde el boton enviar');
    }

    function resetFormulario() {
        datosFormulario.email = '';
        datosFormulario.mensaje = '';
        datosFormulario.nombre = '';

        formulario.reset();
        mostrarBoton();
    }

    function cerrarModal() {
        modal.classList.add('hidden');
    }




});