

const reproductor = {
    reproducir: id =>  console.log(`Reproduciendo canción con el id ${id}...`),
    pausar: () => console.log("pausando..."),
    borrar: id => console.log(`Borrando cancion ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reprodcuciendo la playlist ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();

// reproductor.borrar = function(id) {
//     console.log(`Borrando cancion ${id}`);
// }
reproductor.borrar(20);

reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");