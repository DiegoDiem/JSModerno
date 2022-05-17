//* Singleton
// No crea multiples instancias

let instancia = null;


class Persona{
    constructor(nombre, email){
        if(!instancia){
            this.nombre=nombre;
            this.email=email;
            instancia=this;
        }else{
            return instancia;
        }
    }
}

const persona = new Persona('Diego','correo@correeo.com')
console.log(persona);

const persona2 = new Persona('Karen','correo2@correeo.com')
console.log(persona2);
