const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si 2 números son iguales
// No estricto
console.log(numero1 == numero3);

// Comparador estricto

console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));

// Diferente

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 !== parseInt(numero2));