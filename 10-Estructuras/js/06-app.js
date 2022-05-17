// Operador &&

const usuario =true;
const puedePagar = true;

if (usuario&&puedePagar) {
    console.log('Si puedes comprar');
}else if(!puedePagar && !usuario){
    console.log('No puedes comprar');
}else if(!usuario){
    console.log('No eres usuario, inicia sesión o registrate');
}else if(!puedePagar){
    console.log('Fondos insuficientes');
}