// For ... in


const pendientes = ['Tarea', 'Comer', 'Proyecto','Estudiar JS'];

// Reporta indices (Itera sobre objetos)
for (let pendiente in pendientes ) {
    console.log(pendiente);
    
}


const automovil={
    modelo:'Camaro',
    year:1969,
    motor:'6.0'
}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`); // Imprime los valores
}


// Imprimer llave y valor de una forma para iterar sobre los valores de un objeto
for(let [llave,valor] of Object.entries(automovil)){
    console.log(valor);
}