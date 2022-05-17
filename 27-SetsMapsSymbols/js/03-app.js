// Maps

//* Listas ordenadas en llave y valor (Objeto con 1 propiedad)
//* Diseñados para agregar o qutiar elementos

const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);


console.log(cliente.size);

console.log(cliente.has('nombre2'));

console.log(cliente.get('nombre'));

cliente.delete('saldo');

console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));

cliente.clear();

console.log(cliente);


const paciente = new Map([['nombre','paciente'],['cuarto','no definido']])
paciente.set('dr','Dr Asignado');
paciente.set('nombre','Luis');

console.log(paciente);

paciente.forEach(datos =>{
    console.log(datos);
})