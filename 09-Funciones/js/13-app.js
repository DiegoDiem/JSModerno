// Convirtiendo arrow funciont el 09-funciones 09-app
const reproductor ={
    // Metodo de propiedad}
    cancion:'',
    reproducir: id =>console.log(`Reproduciendo canción con el id ${id}`),
    pausar: ()=> console.log(`pausando...`),
    borrar : ()=> console.log('Borrando canción...'),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre=> console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
  
}
reproductor.nuevaCancion = 'Enter Sandman'
reproductor.obtenerCancion;

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar();
reproductor.borrar();
reproductor.crearPlaylist('Heavy Metal')
reproductor.crearPlaylist(`Rock 90's`)
reproductor.reproducirPlaylist(`Rock 90's`)