//* Self

// Self === window

window.onload= ()=>{
    console.log('Ventana Lista');
}

self.onload= ()=>{
    console.log('Ventana Lista');
}



window.lote='Grande';
const producto ={
    nombre: 'Monitor 20 Pulgadas',
    precio:30,
    disponible:true,
    mostrarInfo: function(){
        // const self = this;
        // return `El producto: ${self.nombre} tiene un precio de ${self.precio}`
        return `El lote es: ${self.lote}`
    }
}

console.log(producto.mostrarInfo());