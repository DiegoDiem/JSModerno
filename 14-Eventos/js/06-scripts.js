// Event bubbling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');


cardDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('click en c ard');
})

infoDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('click en info');
})

tituloDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('click en titulo');
})

//* Event bubbling sucede cuando se ejecutan más funciones, y e.stopPropagation(); sirve para evitarlo