// Class declaration

class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return`Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }

}

const diem = new Cliente('Diego',400);
console.log(diem.mostrarInformacion());
console.log(diem);

console.log(Cliente.bienvenida());

// Class expression

const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return`Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
}

const diem2= new Cliente2('Diego',400);
console.log(diem2.mostrarInformacion());
console.log(diem2);