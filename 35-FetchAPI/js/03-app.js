// document.addEventListener('DOMContentLoaded',obtenerDatos)

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click',obtenerDatos)


function obtenerDatos(){
    const url = 'data/empleados.json'

    fetch(url)
        .then(respuesta=> respuesta.json())
        .then(resultado=> mostrarHTML(resultado))
}

function mostrarHTML(empleados){
    const contenido = document.querySelector('.contenido');

    let html ='';

    empleados.forEach(element => {
        const {id, nombre, empresa, trabajo}=element;

        html +=`
            <p>Empleado ${nombre}</p>
            <p>ID ${id}</p>
            <p>empresa ${empresa}</p>
            <p>trabajo ${trabajo}</p>
        `;
    });

    contenido.innerHTML=html;
}