const aplicarDescuento = new Promise( (resolve, reject) =>{

    const descuento = true;

    if (descuento) {
        resolve('Descuento aplicado');
    }else{
        reject('No se pudo aplicar el descuento');
    }
});

aplicarDescuento
    .then( resultado =>descuento(resultado))
    .catch(error=> console.log(error) )

// 3 valores posibles...
// fulfilled - El promise se cumplió
// rejected - No se cumplió
// pending - Aún no se declara 

function descuento(mensaje){
    console.log(mensaje);
}