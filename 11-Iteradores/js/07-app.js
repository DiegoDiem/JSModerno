// For of
const pendientes = ['Tarea', 'Comer', 'Proyecto','Estudiar JS'];



const carrito = [
    {nombre: 'Monitor 26 pulgadas', precio:4500},
    {nombre: 'Celular', precio:100},
    {nombre: 'teclado', precio:312},
    {nombre: 'USB', precio:500},
    {nombre: 'Ratón', precio:1250},
]


for (let pendiente of pendientes ) {
    console.log(pendiente);
    
}

for (let producto of carrito) {
    
    console.log(producto.precio);
}

// For of recorre el arreglo mientras haya elemento