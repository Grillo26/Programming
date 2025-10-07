localStorage.setItem('nombre', 'Carlos');
sessionStorage.setItem('nombre', 'Enrique');

const producto = {
    nomre: 'Monitor',
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('Meses', JSON.stringify(meses));