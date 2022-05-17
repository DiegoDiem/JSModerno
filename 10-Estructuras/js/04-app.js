// Operador Mayor que y menor que

const dinero = 300;
const totalAPagar =500;
const tarjeta=false;
const cheque= true;

if (dinero > totalAPagar) {
    console.log('Si podemos pagar');
}else if(tarjeta){
    console.log('Si puedo pagar xq tengo la tarjeta');
}else if(cheque){
    console.log('Si puedo pagar con el cheque');
}

else{
    console.log('Fondos insuficientes');
}