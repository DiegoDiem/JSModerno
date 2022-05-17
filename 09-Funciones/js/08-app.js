

//

function sumar (a,b){
    return a+b;
}

const resultado= sumar(2,3);
console.log(resultado);

// Ejemplo avanzado

let total = 0;
function agregarCarrito(precio){
    return total +=precio;
}

function calcularImpuesto(total){
    return total*1.15;
}

total =agregarCarrito(399);
total =agregarCarrito(199);

const totalPagar = calcularImpuesto(total);
console.log(`el total a pagar es de ${totalPagar}`);
console.log(total);