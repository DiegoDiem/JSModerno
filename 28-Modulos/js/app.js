import nuevaFuncion,{nombreCliente, ahorro,mostrarInfo,tieneSaldo, Cliente} from './cliente.js';
// nombreCliente as clientenombrenombreCliente
// Importar Empresa
import {Empresa} from './empresa.js';

nuevaFuncion();

console.log(nombreCliente);

console.log(ahorro);

console.log(mostrarInfo(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInfo());



const empresa = new Empresa('Codigo con Diem',100, 'Aprendizaje JS');
console.log(empresa.mostrarInfo());