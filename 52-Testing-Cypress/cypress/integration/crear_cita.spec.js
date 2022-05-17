/// <reference types ="cypress"/>

describe('Llena los campos para una nueva cita y la muestra',()=>{
    it('Campos nueva cita',()=>{

        cy.visit('/index.html');

        cy.get('[data-cy=mascota-input]')
            .type('Perri');

        cy.get('[data-cy=propietario-input]')
            .type('Diego');
        
        cy.get('[data-cy=telefono-input]')
            .type('51232442112');

        cy.get('[data-cy=fecha-input]')
            .type('2022-12-03');

        cy.get('[data-cy=hora-input]')
            .type('14:00');
        
        cy.get('[data-cy=sintomas-textarea]')
            .type('Ta chiquita');


        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal','Administra tus Citas')

        //Seleccionar la alerta
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal','Se agregó correctamente')

        cy.get('[data-cy=alerta]')
            .should('have.class','alert-success')    
            
    });
});