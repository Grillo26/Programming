

const reproductor = {
    reproducir: function (id){
        console.log(`Reproduciendo canción con el id ${id}...`)
    },
    pausar: function() {
        console.log("pausando...");
    },
    borrar: function(id) {
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reprodcuciendo la playlist ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();

// reproductor.borrar = function(id) {
//     console.log(`Borrando cancion ${id}`);
// }
reproductor.borrar(20);

reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");