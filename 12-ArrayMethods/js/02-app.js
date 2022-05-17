// Find index

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
] 


meses.forEach((mes,i)=>{
    if (mes==='Abril') {
        console.log(`Encontrado en el indice ${i}`);
    }
});


// Encontrar el indice de Abril 
const indice = meses.findIndex(mes =>mes ==='Abril')
console.log(indice);
const indice2 = meses.findIndex(mes =>mes ==='Diciembre')
console.log(indice2);

if (indice >0) {
    // Para comprobar si es el caso de que se encuentra
}
const indice3 = carrito.findIndex(producto => producto.precio ===100);
console.log(indice3); // Nos muestra los productos que cuestan 100


// Solamente encuentra el primero y comprueba que haya