window.addEventListener('scroll',()=>{
    
    

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top<754) {
        console.log('Ya es visible');
    }else{
       
        console.log('El elemento aun no es visible');
    }
})


// * .getBoundingClientRect() podemos observar las coordeandas y así ubicar 