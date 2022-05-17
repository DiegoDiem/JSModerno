const cliente = {
    nombre: 'Diego Mendez',
    balance:500
}

describe('Testing al cliente',()=>{
    test('El cliente es premium',()=>{
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Diego Mendez',()=>{
        expect(cliente.nombre).toBe('Diego Mendez');
    });

    test('No es otro cliente',()=>{
        expect(cliente.nombre).not.toBe('Luis');
    });

    test('No tiene 500',()=>{
        expect(cliente.balance).not.toBe(400);
    })
});