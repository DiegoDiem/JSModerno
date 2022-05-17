
document.addEventListener('visibilitychange',()=>{
    if (document.visibilityState==='visible') {
        console.log('ejecutar la funcion para reprod video...');
    }else{
        console.log('pausar el video');
    }
})