// Eliminar elementos del DOM



// const primerEnlace = document.querySelector('a')
// primerEnlace.remove();



// Eliminar desde el padre....

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[1]);


// * .children ayuda a observar su indice si es que tiene muchos hijos

