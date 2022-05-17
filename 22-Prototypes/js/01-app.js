//OBject literal

const cliente = {
    nombre: 'Diego',
    saldo:500
}


// Object constructor
// Es reutilizable y el otro nou

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}


const diego = new Cliente('Diego',500);
console.log(diego);