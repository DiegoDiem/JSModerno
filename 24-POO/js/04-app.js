// Class declaration

class Cliente {
    #nombre; //* # Hace la propiedad priuvada

    // constructor(nombre, saldo){
    //     this.#nombre = nombre;
    //     this.saldo = saldo;
    // }

    // mostrarInformacion(){
    //     return`Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`
    // }

    // static bienvenida(){
    //     return `Bienvenido al cajero`;
    // }

    setNombre(nombre){
        this.#nombre=nombre;

    }
    getNombre(){
        return this.#nombre;
    }

}


const diem = new Cliente();

diem.setNombre('Diego');
console.log(diem.getNombre());  //* Accediendo desde la clase




// console.log(diem.mostrarInformacion());
// // console.log(diem.nombre);