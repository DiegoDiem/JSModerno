// Modificar textos

const encabezado = document.querySelector('h1');
// const encabezado = document.querySelector('h1').textContent; --> encadenamiento o chaining
console.log(encabezado);

console.log(encabezado.innerText);// Si en el CSS -visibility:hidden; no lo va a encontrar
console.log(encabezado.textContent);// Si lo va a encontrar
console.log(encabezado.innerHTML); // Se trae el HTML



// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('h1').textContent = nuevoHeading; //Modifica ya reflejado en html


//Modificar textos

const imagen = document.querySelector('.card img');
imagen.src ='img/hacer2.jpg'; 