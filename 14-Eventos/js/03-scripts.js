const busqueda = document.querySelector('.busqueda');


// busqueda.addEventListener('keydown',()=>{ // CUando se escribe dentro del input
//     console.log('escriobiendo');
// })

// busqueda.addEventListener('keyup',()=>{ // Se suelta la tecla
//     console.log('al soltar la tecla');
    
// })

// busqueda.addEventListener('blur',()=>{ // entrar y salir al inpu
//     console.log('entrar y salir al input');
    
// })

// busqueda.addEventListener('copy',()=>{ // detectar cuando copias
//     console.log('detectar cuando copias');
    
// })
// busqueda.addEventListener('paste',()=>{ // detectar cuando pegas
//     console.log('detectar cuando pegas');
    
// })
// busqueda.addEventListener('cut',()=>{ // detectar cuando cortas
//     console.log('detectar cuando cortas');
    
// })

// busqueda.addEventListener('input',()=>{ // se hace alguna accion (evento) dentro del input
//     console.log('detectar acciones');
    
// })

busqueda.addEventListener('input',(e)=>{ // se hace alguna accion (evento) dentro del input
    if (e.target.value==='') {
        console.log('fallo la validacion');
    }
    // console.log(e.target.value); // LO que el usuario está escribiendo
    
})