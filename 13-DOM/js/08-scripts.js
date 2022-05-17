//Traversing the DOM


const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion.childNodes );//LOs espacios en blanco (Saltos de linea) son considerados elementos
// console.log(navegacion.children );


// console.log(navegacion.children[0].nodeName );
// console.log(navegacion.children[0].nodeType );

const card = document.querySelector('.card');
// card.children[1].children[1].textContent ='Nuevo heading desde traversing the DOM';


// card.children[0].src= 'img/hacer3.jpg'
// console.log(card.children[0]);


//Traversing de hijo al padre

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement)




// ****** Nota: Con .children va recorriendo hijos, .parentElement hacia el padre, .nextElementSibling hacia el hermano, .previousElementSibling hacia el hermano anterior *****

// * Nota2: .firstChild trae el primer elemento y .lastElementChild trae el ultimo elemento. Si se usa [#] accedemos al específico con su respectivo indice

// console.log(card.nextElementSibling);
// console.log(card);


// const ultimoCard = document.querySelector('.card:nth-child(4)');

// console.log(ultimoCard.previousElementSibling);