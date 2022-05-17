
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(registrado => console.log('Se instaló correctamente... ', registrado))
        .catch(error=>console.log('falló instalación... ', error))
}else{
    console.log('Service Workers no soportados');
}