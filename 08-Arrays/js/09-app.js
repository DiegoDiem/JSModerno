const carrito = [
    {nombre: 'Monitor 26 pulgadas', precio:4500},
    {nombre: 'Celular', precio:100},
    {nombre: 'teclado', precio:312},
    {nombre: 'USB', precio:500},
    {nombre: 'Ratón', precio:1250},
]



for(let i =0; i<carrito.length; i++){
    // console.log(carrito[i].nombre);
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}


carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
}  );