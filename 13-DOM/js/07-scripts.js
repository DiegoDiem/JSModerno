//Modificar CSS

// const encabezado = document.querySelector('h1');
// encabezado.style.backgroundColor ='red';

// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform='Uppercase';


const card = document.querySelector('.card');

card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card);
