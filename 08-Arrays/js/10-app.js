const carrito = [
    {nombre: 'Monitor 26 pulgadas', precio:4500},
    {nombre: 'Celular', precio:100},
    {nombre: 'teclado', precio:312},
    {nombre: 'USB', precio:500},
    {nombre: 'Ratón', precio:1250},
]

// No crea un nuevo arreglo
const nuevoArreglo =carrito.forEach( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
}  );

// crea un nuevo arreglo
const nuevoArreglo2 = carrito.map( function(producto){
    return`${producto.nombre} - Precio: ${producto.precio}`;
}  );

console.log(nuevoArreglo)
console.log(nuevoArreglo2)