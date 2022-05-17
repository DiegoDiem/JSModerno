
// If

const puntaje = 1000;
const puntaje2 = "1000";
console.log(typeof puntaje);
console.log(typeof puntaje2);


// if (puntaje !=1000) {  // != diferente == igual a
//     console.log('Si es diferente');
// }

if (puntaje ==="1000") {  // === de forma estricta
    console.log('Si es igual');
}else{
    console.log('no es igual');
}

// == operador no tan estricto
// === operador estricto