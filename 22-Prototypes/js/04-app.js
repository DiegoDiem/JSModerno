
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;

    if (this.saldo >10000) {
        tipo ='Gold';
    }else if (this.saldo > 5000) {
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira
}

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo); //* Forma para heredar
    this.telefono = telefono;
}

Persona.prototype= Object.create(Cliente.prototype); //* Pasar toda la funcion

Persona.prototype.constructor = Cliente;

// Instanciarlo
const diego = new Persona('Diego',500, 123121341);
console.log(diego);

console.log(diego.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es: ${this.telefono}`;
}

console.log(diego.mostrarTelefono());