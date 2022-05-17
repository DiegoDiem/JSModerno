// For loop

// for (let i = 0; i < 10; i++) {
//    console.log(`Numero: ${i}`);
    
// }

// for (let i = 1; i <= 20; i++) {
//     if (i%2===0) { // Es Par
//         console.log('El numero '+i+ 'Es par');
//     }else{
//         console.log('El numero'+i+'Es impar');
//     }
    
// }

const carrito = [
    {nombre: 'Monitor 26 pulgadas', precio:4500},
    {nombre: 'Celular', precio:100},
    {nombre: 'teclado', precio:312},
    {nombre: 'USB', precio:500},
    {nombre: 'Ratón', precio:1250},
]
console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre); // Imprime cada nombre del elemento del arreglo
    
}