// IIFE Mantiene las variables localmente

// (function(){
//     console.log('Desde un IIFE');

//     window.nombreCliente ='nombreCliente'; // window asigna a la ventana global
// })();

export const nombreCliente='Diego'; // Permite exportar la variable

export const ahorro =200;


export function mostrarInfo(nombre, ahorro){
    return `Cliente: ${nombre}- Ahorro:${ahorro}`;
}

export function tieneSaldo(ahorro){
    if (ahorro>0) {
        console.log('Si tiene saldo');
    }else{
        console.log('No tiene saldo');
    }
}


export class Cliente {
    constructor(nombre, ahorro){
        this.nombre=nombre;
        this.ahorro=ahorro;
    }
    mostrarInfo(){
        return `Cliente: ${this.nombre}- Ahorro:${this.ahorro}`;
    }
}

export default function nuevaFuncion(){
    console.log('Este es el export default');
}
//! No se peude tener dos export default