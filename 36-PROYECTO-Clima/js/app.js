const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');


window.addEventListener('load',()=>{
    formulario.addEventListener('submit',buscarClima);
})

function buscarClima(e){
    e.preventDefault();

    // Validar 
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad===''||pais==='') {
        // Hubo un error
        mostrarError('Ambos campos son obligatorios');

        return;
    }

    // Consulta API
    consultarAPI(ciudad, pais);

}

function mostrarError(mensaje){
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
        //Crear una alerta
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounder', 'max-w-md', 'mx-auto','mt-6','text-center');

        alerta.innerHTML=`
        <strong class="font-bold">¡Erorr!</strong>
        <span class="block">${mensaje}</span>

        `;

        container.appendChild(alerta);

        //Se elimine la alerta después de 5s

        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
}

function consultarAPI(ciudad,pais){
    const appId = 'f4882dd971de4df4d50ec91eae2aa8d8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner(); //Muestra un spinner de carga

    fetch(url)
        .then(respuesta=> respuesta.json())
        .then(datos=>{
            
            limpiarHTML();//Limpiar el HTML previo
            if (datos.cod==="404") {
                mostrarError('Ciudad no encontrada');
                return;
            }

            // Imprime la respuesta en el HTML
            mostrarClima(datos);
        })
}

function mostrarClima(datos){
    const {name, main:{ temp, temp_max, temp_min }}=datos;

    const centigrados =kelvinACentigrados(temp);
    const max =kelvinACentigrados(temp_max);
    const min =kelvinACentigrados(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent=`Clima en ${name}`;
    nombreCiudad.classList.add('font-bold','text-2xl')
    
    //Mostrar temperatura 
    const actual = document.createElement('p');
    actual.innerHTML=`${centigrados}&#8451;`;
    actual.classList.add('font-bold','text-6xl');

    //Mostrar temperatura maxima
    const tempMax=document.createElement('p');
    tempMax.innerHTML=`Max: ${max}&#8451;`
    tempMax.classList.add('text-xl');

    //Mostrar temperatura minima
    const tempMin=document.createElement('p');
    tempMin.innerHTML=`Min: ${min}&#8451;`
    tempMin.classList.add('text-xl');

    const resultadoDiv=document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);
    

    resultado.appendChild(resultadoDiv);

}

const kelvinACentigrados= grados => parseInt(grados-273.15);


function limpiarHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function Spinner(){
    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-circle');

    divSpinner.innerHTML = `
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
    
    `;

    resultado.appendChild(divSpinner);
}


