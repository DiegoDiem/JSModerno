//* Scope

const login = true;

function clienteLogueado(){
    const cliente = 'Diego';
    console.log(cliente);

    if (login) {
        const cliente = 'Admin';
        console.log(cliente);
    }
}
clienteLogueado();