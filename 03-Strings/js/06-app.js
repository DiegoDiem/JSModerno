

const producto = 'Monitor 20 pulgadas';

// repetear te va a permitir repetir una cadena de texto...

const texto = ' en Promoción'.repeat(3);

// si se le pone un float ej. .repeat(3.2) se redondea el numero de veces que se repetirá

console.log(texto);

console.log(`${producto} ${texto}!!!`);

// Split, dividir un string

const actividad = "Estoy aprendiendo javascript moderno";

console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo Javascript moderno #AprendiendoOsiOsi";
console.log(tweet.split('#'));