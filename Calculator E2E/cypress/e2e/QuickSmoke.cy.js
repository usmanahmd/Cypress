import { CalPageObjets } from "./CalPage.cy.js/CalPageObjets.cy"

var calpageobjects = new CalPageObjets()

describe('Basic Arithmetic Operations', () => {
    beforeEach(() => {
        cy.visit("https://www.calculatorsoup.com/calculators/math/basic.php");
        cy.wait(100);
    });

    //Number Buttons visibility 
    it('Buttons visibility', () => {
    //btn-0
    cy.get(':nth-child(7) > :nth-child(1) > .cs_button').click().should('be.visible','OK')
    //btn-0
    cy.get(':nth-child(6) > :nth-child(1) > .cs_button').click().should('be.visible','OK')
    //btn-2
    cy.get(':nth-child(6) > :nth-child(2) > .cs_button').click().should('be.visible','OK')
    //btn-3
    cy.get(':nth-child(6) > :nth-child(3) > .cs_button').click().should('be.visible','OK')
    //btn-4
    cy.get(':nth-child(5) > :nth-child(1) > .cs_button').click().should('be.visible','OK')
    //btn-5
    cy.get(':nth-child(5) > :nth-child(2) > .cs_button').click().should('be.visible','OK')
    //btn-6
    cy.get(':nth-child(5) > :nth-child(3) > .cs_button').click().should('be.visible','OK')
    //btn-7
    cy.get(':nth-child(4) > :nth-child(1) > .cs_button').click().should('be.visible','OK')
    //btn-8
    cy.get(':nth-child(4) > :nth-child(2) > .cs_button').click().should('be.visible','OK')
    //btn-9
    cy.get(':nth-child(4) > :nth-child(3) > .cs_button').click().should('be.visible','OK')
    });
//Simple Addittion 
it('Addition', () => {
    calpageobjects.Five()
    calpageobjects.plus()
    calpageobjects.Nine()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '14').and('be.visible')
  });
//Simple Multiplication
it('Multiplication', () => {
    calpageobjects.Six()
    calpageobjects.multiplication()
    calpageobjects.Three()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '18').and('be.visible')
  });
//Simple Subtraction
it('Subtraction', () => {
    calpageobjects.Nine()
    calpageobjects.subtract()
    calpageobjects.Nine()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '0').and('be.visible')
  });
//Simple Division
it('Division', () => {
    calpageobjects.Six()
    calpageobjects.division()
    calpageobjects.Three()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '2').and('be.visible')
  });
//User input remove
it('Input Remove', () => {
    calpageobjects.Six()
    calpageobjects.Seven()
    calpageobjects.Three()
    calpageobjects.clear()
    cy.get('#cs_display').should('have.value', '0').and('be.visible')
  });

});
