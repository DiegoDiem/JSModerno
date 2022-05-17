// Generar HTML

const enlace = document.createElement('div');

//Agregando el texto
enlace.textContent="Nuevo enlace";

//añadiendo href

enlace.href = '/nuevo-enlace';

enlace.target="_blank";

enlace.setAttribute('data-enlace','nuevo-enlace');
enlace.classList.add('clase-enlace');

// enlace.onclick=miFuncion;

console.log(enlace);

// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace); // Lo inserta al final
navegacion.insertBefore(enlace,navegacion.children[1]); // Para insertarlo con más precisión



// function miFuncion(){
//     alert('Diste click');
// }


// Crear un CARD

const parrafo1 = document.createElement('P');
parrafo1.textContent='Concierto';
parrafo1.classList.add('categoria','concierto');


const parrafo2 = document.createElement('P');
parrafo2.textContent='Concierto de Rock';
parrafo2.classList.add('titulo');



const parrafo3 = document.createElement('P');
parrafo3.textContent='$800 por persona';
parrafo3.classList.add('precio');

// Crear div con clase info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const imagen = document.createElement('img');
imagen.src='img/hacer2.jpg';
imagen.alt="Texto alternativo";

//Crear el card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//asignar la info
card.appendChild(info);


//Insertar emn el HTML

const contenedor =document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card,contenedor.children[0]);