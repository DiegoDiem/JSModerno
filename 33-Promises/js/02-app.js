const paises = [];

function nuevoPais(pais, callback){
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}



function mostrarPiases(){
    console.log(paises);
}


function iniciarCallbackHell(){
    setTimeout(() => {
        nuevoPais('Alemania',mostrarPiases);
        setTimeout(() => {
            nuevoPais('Frabcia',mostrarPiases);
            setTimeout(() => {
                nuevoPais('Inglaterra',mostrarPiases);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();