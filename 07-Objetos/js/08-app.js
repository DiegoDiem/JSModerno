"use strict";
// Modo estricto
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
Object.freeze(producto);



console.log(producto);
console.log(Object.isFrozen(producto));