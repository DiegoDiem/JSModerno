


function descargarNuevosClientes() {
    return new Promise(resolve =>{
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('los clientes fueron descargados')
        }, 5000);
    })
}

function descargarNuevosPedidos() {
    return new Promise(resolve =>{
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);
    })
}

//?  ¿Porque las apps corren algo lento o tarda mucho en descargar?
//* Se está haciendo mal

const app = async()=>{
    try {
        //Para consultas independientes
        const respuesta = await Promise.all([descargarNuevosClientes(),descargarNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}
app();