const btnFlotante = document.querySelector('.btnFlotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click',()=>{
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent('Idioma y Moneda');
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent('X Cerrar');
    }
    
})
console.log(btnFlotante)
console.log(btnFlotante)

