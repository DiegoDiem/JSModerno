
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    
}

// const nombre = producto.nombre;

// console.log(nombre);

//Destructuring
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);