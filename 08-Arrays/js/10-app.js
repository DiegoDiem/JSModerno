const carrito = [
    {nombre: 'Monitor 26 pulgadas', precio:4500, sellers:['doto', 'walmart']},
    {nombre: 'Celular', precio:100, sellers:['walmart', 'amazon']},
    {nombre: 'teclado', precio:312 , sellers:['amazon', 'HEB']},
    {nombre: 'USB', precio:500 , sellers:['doto', 'similares']},
    {nombre: 'Ratón', precio:1250 , sellers:['coso', 'fulano']},
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

const sellers = carrito.map( p => p.sellers)
const sellers2 = carrito.flatMap( p => p.sellers)
console.log(sellers2)
const set = new Set(sellers2)
console.log(Array.from(set))