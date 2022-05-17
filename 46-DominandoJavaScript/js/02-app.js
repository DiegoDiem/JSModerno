//* Hoisting

// Function declaration
// Se lee primero las funciones y luego se mandan a llamar
obtenerCliente('Diego');

function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es: ${nombre}`);
}


// Function expression

//Manda error
obtenerCliente2('Luis');
const obtenerCliente2 = function(nombre){
    
    console.log(`El nombre del cliente es: ${nombre}`);
}

