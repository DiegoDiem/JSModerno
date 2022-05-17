// WeakSet

const weakset = new WeakSet(); // Solo se puede agregar objetos
//No tiene .size, no es iterable
const cliente = {
    nombre: 'diego',
    saldo: 100
}


weakset.add(cliente);
weakset.delete(cliente);



