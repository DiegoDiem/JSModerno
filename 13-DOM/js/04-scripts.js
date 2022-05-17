// QuerySelector

//Clases:

//Retorna 1 elemento, es el primero
const card = document.querySelector('.card');
console.log(card);

//Podemos tener selectores específicos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);


// Seleccionar el segundo card de hospedaje
const segundoCard   = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// ID:

//Selecciona el formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

//Seleccionar elementos HTML
const navegacion = document.querySelector('nav');