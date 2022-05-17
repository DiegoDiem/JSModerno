//Symbols
//* Los symbols nunca son iguales
const sym = Symbol();

const sym2 = Symbol();

// if (sym===sym2) {
//     console.log('Son iguales');
// }else{
//     console.log('Son diferentes');
// }

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//Agregar nombre y aepllido como llaves del objeto
persona[nombre]='Diego';
persona[apellido]='Mendez';
persona.tipocliente ='Premium';
persona.saldo=500;
console.log(persona);
console.log(persona[nombre]);

//! Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
    console.log(i);
}

//Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente ={};

cliente[nombreCliente]='pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
