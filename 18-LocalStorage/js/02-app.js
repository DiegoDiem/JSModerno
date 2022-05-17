const nombre = localStorage.getItem('nombre');
console.log(nombre)

// Un String a objeto cuando tenga forma de objeto

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));


const meses = localStorage.getItem('meses');
console.log(JSON.parse(meses))