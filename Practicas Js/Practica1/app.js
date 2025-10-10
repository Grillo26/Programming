document.addEventListener('DOMContentLoaded', function() {

    let tareas = [];
    let id = 0;

    const inputTarea = document.querySelector('#input-tarea');
    const btnAgregar = document.querySelector('#formulario-tarea button[type="submit"]');
    const formulario = document.querySelector('#lista-tareas');

    const tareasRealizadas = document.querySelector('#tareas-realizadas');


    inputTarea.addEventListener('input', validar);
    btnAgregar.addEventListener('click', function(e) {
        e.preventDefault();
        if (inputTarea.value.trim() === '') {
            // mostrarAlerta('Este cammpo es obligatorio');
            limpiarAlerta(e.target.parentElement.parentElement)
            mostrarAlerta('Este campo es obligatorio', e.target.parentElement.parentElement)
            return;
        }
        añadirTarea(inputTarea.value);
        inputTarea.value = '';
    })

    function validar(e) {
        //Validando campos si estan vacios
        if (e.target.value.trim() === '') {
            mostrarAlerta('Este campo es obligatorio', e.target.parentElement.parentElement);
            console.log(e.target.name)
            return;
        }

        limpiarAlerta(e.target.parentElement.parentElement);
    }

    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia);

        const mensajeError = document.createElement('DIV');
        mensajeError.classList.add('pt-2');

        const textFirst = document.createElement('STRONG');
        textFirst.classList.add('font-bold', 'text-red-600');
        textFirst.textContent = 'Ojo! ';

        const textSecond = document.createElement('SPAN');
        textSecond.classList.add('block', 'sm:inline', 'text-red-600');
        textSecond.textContent = mensaje;

        mensajeError.appendChild(textFirst);
        mensajeError.appendChild(textSecond);

        referencia.appendChild(mensajeError);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.pt-2');
        if (alerta) {
            alerta.remove();
        }
    }

    function añadirTarea(tarea) {

        id++;
        const nuevaTarea = {
            id: id,
            tarea: tarea
        }
        tareas.push(nuevaTarea);


        console.log(tareas);

        const tareaContainer = document.createElement('LI');
        tareaContainer.id = id;
        tareaContainer.classList.add('flex', 'items-center', 'p-4', 'rounded-lg', 'shadow-md');

        const check = document.createElement('INPUT');
        check.type = 'checkbox';
        check.classList.add('form-checkbox', 'text-blue-500', 'rounded', 'focus:ring-blue-500');
        check.addEventListener('change', marcarComoCompletada); //Al momento de crear se añade un evento


        const textTarea = document.createElement('SPAN');
        textTarea.classList.add('text-gray-700', 'pl-2')
        textTarea.textContent = tarea;



        tareaContainer.appendChild(check);
        tareaContainer.appendChild(textTarea);
        tareaContainer.appendChild(crearBotonEliminar());

        formulario.appendChild(tareaContainer);

    }

    function marcarComoCompletada(e) {
        const tareaSeleccionada = e.target.closest('li');
        if (e.target.checked) {
            tareaSeleccionada.classList.add('line-through', 'text-gray-400');
            tareasRealizadas.appendChild(tareaSeleccionada);

        } else {
            tareaSeleccionada.classList.remove('line-through', 'text-gray-400');
            formulario.appendChild(tareaSeleccionada);
        }

    }

    function eliminarTarea(e) {
        const tareaSeleccionada = e.target.closest('li');
        const idTarea = parseInt(tareaSeleccionada.getAttribute('id'));
        tareaSeleccionada.remove();

        tareas = tareas.filter(tarea => tarea.id !== idTarea);

        console.log(tareas);
    }

    function crearIconoBasurero() {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'h-5 w-5');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');

        // Create and append the SVG paths and lines
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('points', '3 6 5 6 21 6');
        svg.appendChild(polyline);

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2');
        svg.appendChild(path);

        const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line1.setAttribute('x1', '10');
        line1.setAttribute('y1', '11');
        line1.setAttribute('x2', '10');
        line1.setAttribute('y2', '17');
        svg.appendChild(line1);

        const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.setAttribute('x1', '14');
        line2.setAttribute('y1', '11');
        line2.setAttribute('x2', '14');
        line2.setAttribute('y2', '17');
        svg.appendChild(line2);

        return svg;
    }

    function crearBotonEliminar() {
        const button = document.createElement('button');
        button.classList.add('ml-auto', 'text-gray-400', 'hover:text-red-500', 'transition-colors', 'duration-200', 'cursor-pointer');

        const icono = crearIconoBasurero();
        button.appendChild(icono);
        button.addEventListener('click', eliminarTarea);
        return button;
    }



})