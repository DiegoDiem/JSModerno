"use strict";
// Modo estricto
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
Object.seal(producto);
producto.disponible=false;
console.log(producto);

console.log(Object.isSealed(producto));