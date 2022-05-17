const paises = [];

const nuevoPais = pais => Promise(resolve=>{
    setTimeout(() => {
        paises.push(pais);
        resolve(`Resultado es: ${pais}`)
    }, 3000);
})

nuevoPais('Alemania')
    .then(resultado => {
        console.log(resultado)
        console.log(paises);
        return nuevoPais('Francia')
    })
    .then( resultado =>{
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra');
    } )
    .then(resultado =>{
        console.log(resultado);
        console.log(paises);
    })