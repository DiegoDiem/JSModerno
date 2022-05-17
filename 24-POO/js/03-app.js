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


// HErencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida(){ // Reescribir un método
        return `Bienvenido al cajero de empresas`;
    }
}
const diem = new Cliente('Diego',400);
const empresa = new Empresa ('DieMG', 500,51241242,'Aprendizaje online');
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());