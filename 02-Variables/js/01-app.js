// Inicializar una variable con un valor

var producto = "Monitor de 24 Pulgadas";
console.log(producto);

// Se puede reasignar
producto = 'Monitor de 19 Pugladas';
console.log(producto);

// JavaScript es un lenguaje de tipo dinamico, no se especifica tipo de dato
producto = 20;

console.log(producto);

// Se pueden inicializar sin valor y asignarlo después

var disponible;

disponible = true;
disponible= false;

// Inicializar múltiples variables
var categoria = 'Computadoras',
    marca = "Marca famosa",
    calificacion = 5;

// Reglas

// var 99dias;  No se puede iniciar con números
var dias99;

// var 01_;
var _01; // Si se puede

var _usuario;
var __usuario;

var nombreproducto; //No tan recomendado

var nombreProducto; // Camelcase, más utilizada.

var nombre_producto_categoria; //Underscut o serpiente

var NombreProducto; //Pascal case, o en clases.

