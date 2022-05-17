

const producto = 'Monitor 20 pulgadas';

// Reemplazar un texto 

console.log(producto);
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));


// Slice para cortar de posición a posición
console.log(producto.slice(0, 10));

// alternativa a slice - substring si deja poner numero mayor y luego menor

console.log(producto.substring(0,10));


const usuario = "Diem";

console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));