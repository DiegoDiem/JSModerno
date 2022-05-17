//* Set 
// ! ¿Qué es? Crea una lista de valores sin duplicados

const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
//* .add añadir

carrito.has('Camisa');
//* .has Revisas si un valor existe, devuelve true/false

carrito.delete('Disco #3')
//* .delete Elimina el valor, también para comprobar si es borrado

carrito.clear();
//* .clear Limpia todo el Set

carrito.forEach((producto, index, pertenece) =>{
    // console.log(producto); //* Accede a cada producto
    // console.log(index); //* Los valores
    // console.log(pertenece); //* 3er parametro: Todo el set
})


// console.log(carrito.size); //* .size Permite ver cuanto mide


// Del siguiente arreglo, eliminar los duplicados

const numeros = [10,20,30,40,50,10,20];
const noDuplicados = new Set(numeros);

console.log(noDuplicados); // Elimina los duplicados