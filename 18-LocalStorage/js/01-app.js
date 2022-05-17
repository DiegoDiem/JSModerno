localStorage.setItem('nombre','Diego');
// sessionStorage.setItem('nombre','Diego');


const producto ={
    nombre : "Monitor 24 Pulgadas",
    precio:300
}

const productoString = JSON.stringify(producto); // Convertir objeto a string
localStorage.setItem('producto',productoString);

const meses = ['Eneri','febrero','marzo'];


localStorage.setItem('meses',JSON.stringify(meses));