//* Module Pattern

// const mostrarCliente = nombre=>{
//     console.log(nombre);
// }

// export default mostrarCliente;



//! Antiguo
const modulo1 = (function () {
    const nombre = 'diego';

    function hola() {
        console.log('Hola');
    }

    return{
        nombre,
        hola
    }
})();