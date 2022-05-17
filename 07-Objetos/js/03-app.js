

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    
}

// Agregar nuevas propiedades al objeto
// Asignar valores
producto.imagen = "imagen.jpg";

//Eliminar propiedades
delete producto.disponible;


console.log(producto);