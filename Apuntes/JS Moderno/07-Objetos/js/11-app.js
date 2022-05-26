const producto ={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible: true,
    mostrarInfor: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`); //.this busca las variables dentro del mismo objeto
    }

}
producto.mostrarInfor();