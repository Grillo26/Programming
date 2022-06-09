
window.addEventListener('scroll', () =>{
    const premiun = document.querySelector('.premium');
    const ubicacion = premiun.getBoundingClientRect(); //En que lugar está el scroll
    if(ubicacion.top <100){
        console.log('El elemento ya está visible');
    }
    else{
        console.log('Aún no, da más scroll');
    }
})