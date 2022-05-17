// Explicit Binding...

function persona(el1, el2){
    console.log(`Mi nombre es: ${this.nombre} y Escucho ${el1} y ${el2}`);
}

const informacion ={
    nombre:'Diego'
}

const musicaFavorita = ['Electronica', 'Clásica'];

// Call
persona.call(informacion, musicaFavorita[0], musicaFavorita[1] );


//Apply
persona.apply(informacion, musicaFavorita);

//Bind
const nuevaFn=persona.bind(informacion, musicaFavorita[0], musicaFavorita[1] )
nuevaFn()

//! Diferencia Call - Apply, Call: Puede pasar cada elemento de forma individual, Apply: Puede pasar un arreglo completo, Bind te crea una nueva función