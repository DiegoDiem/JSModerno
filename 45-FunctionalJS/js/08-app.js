//* Closures

const obtenerCliente = () =>{
    const nombre = "Diego";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();