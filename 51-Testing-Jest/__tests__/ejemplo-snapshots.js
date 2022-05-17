const cliente = {
    nombre:"Diego M",
    balance:500,
    tipo:"premium"
};

describe('TEsting al cliente',()=>{
    test('Es Diego Mendez',()=>{
        expect(cliente).toMatchSnapshot();
    })
})