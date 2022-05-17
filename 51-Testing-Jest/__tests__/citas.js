import Citas from '../js/classes/Citas';

describe('Probar la clase de Citas',()=>{
    const citas = new Citas();
    const id = Date.now();
    test('Agregar una nueva cita', ()=>{
        const citaObj = {
            id,
            mascota: 'Megan',
            propietario: 'Diego',
            telefono: '55122312',
            fecha: '10-12-2020',
            hora:'10:30',
            sintomas: 'Solo duerme'
        };

        citas.agregarCita(citaObj);
        //Prueba
    
        expect(citas).toMatchSnapshot();

    })

    test('Actualizar cita',()=>{
        const citaActualizada = {
            id, 
            mascota: 'Nuevo Name',
            propietario: 'Diego',
            telefono: '55122312',
            fecha: '10-12-2020',
            hora:'10:30',
            sintomas: 'Solo duerme'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', ()=>{
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })
    
})