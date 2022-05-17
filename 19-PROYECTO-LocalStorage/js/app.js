// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets =[];


// Event Listeners
eventListeners();

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit',agregarTweet)

    // CUando el documento esta listo
    document.addEventListener('DOMContentLoaded',()=>{
        tweets=JSON.parse(localStorage.getItem('tweets')) || [];

        crearHTML();
    });
}


// Funciones

function agregarTweet(e){
    e.preventDefault();

    // Text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validacion

    if (tweet==='') {
        mostrarError('Un mensaje no puede ir vacio')

        return; // Evita que se ejecuten más lineas de código
    }
    const tweetObj={
        id:Date.now(),
        tweet
    }
    // Añadir al arreglo de tweets
    tweets=[...tweets,tweetObj]

    // Una vez agregado se crea el html
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}


// Mostrar Mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent=error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta después de 3seg
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}


// Muestra un listado de los tweets
function crearHTML(){
    limpiarHTML();
    if (tweets.length>0) {
        tweets.forEach(tweet =>{

            //Agregar un boton de eliminar
            const btnElimianr=document.createElement('a');
            btnElimianr.classList.add('borrar-tweet');
            btnElimianr.innerText='X';

            // Añadir la funcion de eliminar
            btnElimianr.onclick=()=>{
                borrarTweet(tweet.id);
            }

            // Crear el html
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText=tweet.tweet;

            //Asignar el botón
            li.appendChild(btnElimianr);

            // Insertarlo en html
            listaTweets.appendChild(li);
        });
    }


    sincronizarStorage();
}

//Agrega los tweets actuales a LocalStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet=>tweet.id !== id);
    crearHTML();
}

// Limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}