// Forma imperativa
const carrito = [];

// Definir un producto

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio:400
}

const producto2 = {
    nombre: "Celular",
    precio:700
}
const producto3 = {
    nombre: "teclado",
    precio:500
}
const producto4 = {
    nombre: "usb",
    precio:100
}

// Arreglar al final del arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);



carrito.unshift(producto3);
console.table(carrito);



// Eliminar último elemento de un arreglo...

// carrito.pop();

// // Elimina el primer elemento de un arreglo...
// carrito.shift();


// Splice para eliminar de enmedio Sintaxis: (posición, cuantos elementos apartir de la posicion)
carrito.splice(1,1);


console.table(carrito);
