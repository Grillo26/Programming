const citas = [{
        cita: "La única forma de hacer un gran trabajo es amar lo que haces.",
        autor: "Steve Jobs"
    },
    {
        cita: "El éxito es la suma de pequeños esfuerzos que se repiten día tras día.",
        autor: "Robert Collier"
    },
    {
        cita: "No te preguntes qué puede hacer tu país por ti, pregúntate qué puedes hacer tú por tu país.",
        autor: "John F. Kennedy"
    },
    {
        cita: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        autor: "John Lennon"
    },
    {
        cita: "El camino hacia el éxito y el camino hacia el fracaso son casi exactamente iguales.",
        autor: "Colin R. Davis"
    },
    {
        cita: "El fracaso es éxito si aprendemos de él.",
        autor: "Malcolm Forbes"
    },
    {
        cita: "Nunca, nunca, nunca te rindas.",
        autor: "Winston Churchill"
    },
    {
        cita: "Si puedes soñarlo, puedes hacerlo.",
        autor: "Walt Disney"
    },
    {
        cita: "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.",
        autor: "Proverbio Chino"
    },
    {
        cita: "No es lo que te pasa, sino cómo reaccionas a ello lo que importa.",
        autor: "Epicteto"
    },
    {
        cita: "El conocimiento es poder.",
        autor: "Francis Bacon"
    },
    {
        cita: "Sé el cambio que quieres ver en el mundo.",
        autor: "Mahatma Gandhi"
    },
    {
        cita: "La creatividad es la inteligencia divirtiéndose.",
        autor: "Albert Einstein"
    },
    {
        cita: "La vida es 10% lo que nos sucede y 90% cómo reaccionamos a ello.",
        autor: "Charles R. Swindoll"
    },
    {
        cita: "El futuro pertenece a quienes creen en la belleza de sus sueños.",
        autor: "Eleanor Roosevelt"
    },
    {
        cita: "La felicidad no es algo ya hecho. Viene de tus propias acciones.",
        autor: "Dalai Lama"
    },
    {
        cita: "La vida es una obra de teatro que no permite ensayos.",
        autor: "Charles Chaplin"
    },
    {
        cita: "No esperes, el momento nunca será el 'correcto'.",
        autor: "Napoleon Hill"
    },
    {
        cita: "El arte de la vida reside en ajustar tus velas, no en esperar que el viento cambie.",
        autor: "Thomas Edison"
    },
    {
        cita: "La mente es todo. Te conviertes en lo que piensas.",
        autor: "Buda"
    }
];

document.addEventListener('DOMContentLoaded', function() {



    // Tus selectores
    const btnNuevaCita = document.querySelector('#new-quote-btn');
    const citaView = document.querySelector('#quote-container');

    const frase = document.querySelector('#new-quote-text');
    const autor = document.querySelector('#new-quote-author');
    const btnGenerar = document.querySelector('#add-quote-form button[type="submit"]');
    formulario = document.querySelector('#add-quote-form');

    btnNuevaCita.addEventListener('click', mostrarCita);
    btnGenerar.addEventListener('click', añadir);

    frase.addEventListener('input', validar);
    autor.addEventListener('input', validar);

    function mostrarCita(numero) {
        // 1. Limpia el contenido anterior del contenedor
        while (citaView.firstChild) {
            citaView.removeChild(citaView.firstChild);
        }
        const num = Math.floor(Math.random() * citas.length);
        if (numero) {
            //Verifica si el numero tiene algun dato, si es toma el último campo para mostrarlo
            const num = numero - 1;
        }

        console.log(num);

        // 3. Crea los nuevos elementos de la cita y el autor
        const textFrase = document.createElement('P');
        textFrase.classList.add('text-xl', 'md:text-2xl', 'font-light', 'italic', 'text-gray-700');
        textFrase.textContent = `"${citas[num].cita}"`;

        const textAutor = document.createElement('P');
        textAutor.classList.add('text-lg', 'text-gray-500', 'font-semibold');
        textAutor.textContent = `- ${citas[num].autor}`;

        // 4. Añade los nuevos elementos al contenedor
        citaView.appendChild(textFrase);
        citaView.appendChild(textAutor);
    }

    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.name} es obligatorio`, e.target.parentElement);
            return;
        }
        limpiarAlerta(e.target.parentElement);
        limpiarAlerta(formulario);

    }



    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        const error = document.createElement('P');
        error.classList.add('text-red-600');
        error.textContent = mensaje;

        //Inyectando debajo del input
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.text-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function añadir(e) {

        e.preventDefault();
        if (frase.value.trim() === '' || autor.value.trim() === '') {
            mostrarAlerta('Ambos campos son obligatorios.', formulario);
            return;
        }

        const nuevaCita = {
            cita: frase.value.trim(),
            autor: autor.value.trim()
        }

        citas.push(nuevaCita);
        num = citas.length;

        frase.value = '';
        autor.value = '';

        mostrarCita(num);
        console.log(citas);
    }

    mostrarCita();

});