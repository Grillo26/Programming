document.addEventListener('DOMContentLoaded', function() { //Cuando carga todo el HTML

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }


    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spiner = document.querySelector('#spiner');

    //Asignar Eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault(); //Detiene a accion por defecto

        //Reinicar el objeto
        resetFormulario();
    });

    function enviarEmail(e) {
        e.preventDefault();
        console.log('enviando');
        spiner.classList.add('flex');
        spiner.classList.remove('hidden');

        setTimeout(() => {
            spiner.classList.remove('flex');
            spiner.classList.add('hidden');

            //Reinicar el objeto
            resetFormulario();

            //Creando una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);
            setTimeout(() => {
                alertaExito.remove(); //Remover la alerta
            }, 3000);
        }, 3000);
    }

    function validar(e) {
        if (e.target.value.trim() === '') { //Se recomienda trim() para los espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return; //Detiene la ejcuccion del código
        }

        //Llama a método para verificar email
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        limpiarAlerta(e.target.parentElement);

        //Asginar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //comprobar el objeto email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        //Generar una alerta en HTML
        const error = document.createElement('DIV'); //Se recomienda que se utilize en MAYUSCULAS
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //Inyectar el error al formulario
        referencia.appendChild(error);
        // formulario.innerHTML = error.innerHTML;
    }

    function limpiarAlerta(referencia) {
        //Comprueba si ya exite una alerta

        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }

    }

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const resultado = regex.test(email);
        return resultado;

    }

    function comprobarEmail() {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        //Reinicar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }

})