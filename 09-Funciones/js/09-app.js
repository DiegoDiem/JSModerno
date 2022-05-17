
const reproductor ={
    // Metodo de propiedad
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log(`pausando...`);
    },
    borrar : function(){
        console.log('Borrando canción...');
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar();

// reproductor.borrar = function(){
//     console.log('Borrando canción...');
// }

reproductor.borrar();
reproductor.crearPlaylist('Heavy Metal')
reproductor.crearPlaylist(`Rock 90's`)
reproductor.reproducirPlaylist(`Rock 90's`)