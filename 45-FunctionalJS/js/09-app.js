//* Currying y PArtials

// Dividir una función que toma más de un parametro, en argumentos de forma parcial

const suma = (a, b, c)=> a + b + c;

// const parcial = a => (b,c)=> suma(a,b,c);

// const primerNumero = parcial(5);
// const resultado = primerNumero(4,5);

// console.log(resultado);

const parcial2 = a => b => c =>  suma(a,b,c);

// const primerNum = parcial2(5);

// const segundoNum = primerNum(4);
// const result = segundoNum(3);

const resultadoParcial = parcial2(4)(5)(3);
console.log(resultadoParcial);