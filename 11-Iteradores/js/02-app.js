// for (let i = 0; i < 10; i++) {
//     if (i===5) {
//         console.log('Este es el 5');
//         // break; // Break interrumple el for y deja de ejecutarse

//         continue; // Rompe el ciclo 

//     }

//    console.log(`Numero: ${i}`);
    
// }

const carrito = [
    {nombre: 'Monitor 26 pulgadas', precio:4500},
    {nombre: 'Celular', precio:100},
    {nombre: 'teclado', precio:312, descuento:true},
    {nombre: 'USB', precio:500},
    {nombre: 'Ratón', precio:1250},
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log('El articulo '+carrito[i].nombre + ' tiene descuento');
        continue;
    }
    
}