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

// Arreglar al final del arreglo
carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: "teclado",
    precio:500
}
carrito.unshift(producto3);

console.table(carrito);
