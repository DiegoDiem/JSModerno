// Generadores
//* Si siempre hay un * al inicio del nombre de la función, quiere decir que es un generador
// function *crearGenerador(){
//     yield 1;
//     yield 'Diego';
//     yield 3+3;
//     yield true;
// }
// // Como acceder:
// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);

// Generador para carrito de compras
function *generadorCarrito(carrito){
    for(let i = 0; i<carrito.length; i++){
        yield carrito[i];
    }
}

const carrito =['producto 1','producto2 ','producto3']

const iterador = generadorCarrito(carrito)

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());