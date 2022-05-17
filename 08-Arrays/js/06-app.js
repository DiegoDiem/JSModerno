// Forma declarativa (no modifica la variable, crea una nueva)
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

let resultado;
resultado = [producto2,...carrito, producto];


console.table(resultado);
