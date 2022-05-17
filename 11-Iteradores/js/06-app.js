// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto','Estudiar JS'];

pendientes.forEach( (pendiente, indice) => { // El indice se toma como automatico
    
    console.log(`${indice}:${pendiente}`)

}) // Imprime cada uno de los pendientes


const carrito = [
    {nombre: 'Monitor 26 pulgadas', precio:4500},
    {nombre: 'Celular', precio:100},
    {nombre: 'teclado', precio:312},
    {nombre: 'USB', precio:500},
    {nombre: 'Ratón', precio:1250},
]

const nuevoArreglo = carrito.forEach((producto)=>{
    producto.nombre // .nombre es la propiedad a acceder
    // console.log(producto.nombre);
})

const nuevoArreglo2 =  carrito.map((producto)=>{
    producto.nombre // .nombre es la propiedad a acceder
})

// La diferencia map, crea un arreglo nuevo
console.log(nuevoArreglo);
console.log(nuevoArreglo2);