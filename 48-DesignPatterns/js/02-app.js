//* Constructor Pattern

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Diego','correo@correo.com')

const cliente = new Cliente('Roberto','cliente@cliente.com','DiemG')
console.log(persona);
console.log(cliente);