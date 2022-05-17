
const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio:500},
    {nombre: 'Televisión 50 Pulgadas', precio:700},
    {nombre: 'Tablet', precio:300},
    {nombre: 'Audifonos', precio:500},
    {nombre: 'Teclado', precio:50},
    {nombre: 'Celualr', precio:500},
    {nombre: 'Bocinas', precio:300},
    {nombre: 'Laptop', precio:800},
];


// const resultado = carrito.filter(producto=>{
//     return producto.precio >400;
// });

// console.log(resultado);

const mayor400 = producto =>{
    return producto.precio >400;
}

const resultado = carrito.filter(mayor400);
console.log(carrito);
console.log(resultado);