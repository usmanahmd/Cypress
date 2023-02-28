
import { CalPageObjets } from "./CalPage.cy.js/CalPageObjets.cy"

var calpageobjects = new CalPageObjets()

describe('Arithmetic Operations', () => {
  beforeEach(() => {
    cy.visit("https://www.calculatorsoup.com/calculators/math/basic.php");
    cy.wait(200);
  });
  //Addittion
  it('Addition of two numbers', () => {
    calpageobjects.Three()
    calpageobjects.plus()
    calpageobjects.Nine()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '12').and('be.visible')
  });
  it('Addition of three numbers', () => {
    calpageobjects.Three()
    calpageobjects.plus()
    calpageobjects.Nine()
    calpageobjects.plus()
    calpageobjects.Eight()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '20').and('be.visible')
  });

  //Multiplication    
  it('Multiplication of two numbers', () => {
    calpageobjects.Three()
    calpageobjects.multiplication()
    calpageobjects.Nine()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '27').and('be.visible')
  });
  //Subtraction
  it('Subtraction of two numbers', () => {
    calpageobjects.Three()
    calpageobjects.subtract()
    calpageobjects.Nine()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '-6').and('be.visible')
  });

  //Division
  it('Division of two numbers', () => {
    calpageobjects.Nine()
    calpageobjects.Zero()
    calpageobjects.division()
    calpageobjects.Three()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '30').and('be.visible')
  });
  // Order of Operations
  it('Order of operations', () => {
    calpageobjects.Three()
    calpageobjects.multiplication()
    calpageobjects.Five()
    calpageobjects.subtract()
    calpageobjects.Five()
    cy.wait(100)
    calpageobjects.division()
    calpageobjects.Two()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '5').and('be.visible')
  });
  // Multiple Operations
  it('Multiple operations i.e. *, -, +', () => {
    calpageobjects.Five()
    calpageobjects.multiplication()
    calpageobjects.Three()
    calpageobjects.result()
    calpageobjects.subtract()
    calpageobjects.Five()
    calpageobjects.plus()
    calpageobjects.Two()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '12')
  });

  it('Multiple operations i.e. /, +, *', () => {
    calpageobjects.Nine()
    calpageobjects.division()
    calpageobjects.Three()
    calpageobjects.result()
    calpageobjects.plus()
    calpageobjects.Three()
    calpageobjects.multiplication()
    calpageobjects.Three()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '18')
  });

  // Negative Numbers
  it('Negative numbers i.e. (9-10)', () => {
    calpageobjects.Nine()
    calpageobjects.subtract()
    calpageobjects.One()
    calpageobjects.Zero()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '-1')
  });

  it('Negative numbers i.e.(5-10)', () => {
    calpageobjects.Five()
    calpageobjects.subtract()
    calpageobjects.One()
    calpageobjects.Zero()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '-5')
  });

  //Decimal Operations
  it('Decimal Multiplication operation', () => {
    calpageobjects.MemoryClear()
    calpageobjects.Zero()
    calpageobjects.dot()
    calpageobjects.Two()
    calpageobjects.multiplication()
    calpageobjects.Two()
    calpageobjects.dot()
    calpageobjects.Two()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '0.44')
  });
  //
  it('Decimal Addition operation ', () => {
    calpageobjects.MemoryClear()
    calpageobjects.Zero()
    calpageobjects.dot()
    calpageobjects.Three()
    calpageobjects.Six()
    calpageobjects.plus()
    calpageobjects.Two()
    calpageobjects.dot()
    calpageobjects.Two()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '2.56')
  });

  //Division by Zero
  it('Division by zero', () => {
    calpageobjects.MemoryClear()
    calpageobjects.Six()
    calpageobjects.Two()
    calpageobjects.division()
    calpageobjects.Zero()
    calpageobjects.result()
    //cy.get('#cs_display').should('have.value', 'O')
    if (cy.get('#cs_display').should('have.value', 'NaN')) {
      console.log('Error! Divison by zero is not handled')
    } else {
      console.log('Division by zero is not logical')
    }
  });

  //Display clear from keyboard
  it('Display clear by backspace key', () => {
    calpageobjects.MemoryClear()
    calpageobjects.Eight()
    calpageobjects.multiplication()
    calpageobjects.Two()
    calpageobjects.result()
    cy.get('#cs_display').type('Cypress.io{del}')
    cy.get('#cs_display').should('have.value', '0')
  });

  //Calculation with large numbers
  it('Large number calculation', () => {
    calpageobjects.MemoryClear()
    calpageobjects.Eight()
    calpageobjects.Zero()
    calpageobjects.Zero()
    calpageobjects.Zero()
    calpageobjects.Zero()
    calpageobjects.Zero()
    calpageobjects.Zero()
    calpageobjects.multiplication()
    calpageobjects.Two()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '16,000,000')
    calpageobjects.multiplication()
    calpageobjects.Two()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '32,000,000')

  });
  //Clears the display after each test
  afterEach(() => {
    calpageobjects.clear()
    cy.get('#cs_display').should('have.value', '0')
  });
})