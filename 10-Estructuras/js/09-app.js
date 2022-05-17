// Operador ternario

const autenticado = true;
const puedePagar = true;

// console.log(autenticado ? 'Si esta autenticado' :'No está autenticado'); // original
// console.log(autenticado&&puedePagar ? 'Si puede pagar' :'No está autenticado'); // compara dos
// console.log(autenticado||puedePagar ? 'Si puede pagar' :'No está autenticado'); // or


// ternario anidado
console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar':'Si autenticado, no puede pagar' :'No está autenticado');







const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;
// if anidado
if(efectivo>totalPagar|| credito>totalPagar || disponible>totalPagar){
    if(efectivo>totalPagar){
        console.log('Si pagaste con efectivo');
    }else{
        console.log('Otra forma de pago');
    }
}else{
    console.log('Fondos insuficientes');
}