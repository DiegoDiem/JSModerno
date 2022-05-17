

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}


const diego = new Cliente('Diego',500);

function formatearCliente(cliente){
    const {nombre, saldo}= cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}
function formatearEmpresa(empresa){
    const {nombre, saldo, categoria}= empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(diego));


function Empresa(nombre, saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}


const MMG = new Empresa ('MMG',4000,'Alto Flow');
console.log(formatearEmpresa(MMG));