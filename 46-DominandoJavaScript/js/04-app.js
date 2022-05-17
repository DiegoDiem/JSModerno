// Implicit Binding

const usuario = {
    nombre: 'Juan', 
    edad:23,
    informacion(){
        console.log(`Mi nombre es: ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota:{
        nombre: 'Bora',
        edad:10,
        informacion(){
            console.log(`Mi nombre es: ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();