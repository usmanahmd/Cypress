//Memory Function Test
import { CalPageObjets } from "./CalPage.cy.js/CalPageObjets.cy";

var calpageobjects = new CalPageObjets()

describe('Basic Arithmetic Operations', () => {
  beforeEach(() => {
    cy.visit("https://www.calculatorsoup.com/calculators/math/basic.php");
    cy.wait(1000);
  });
  //Memory Functions
  it('Memory Recall', () => {
    calpageobjects.MemoryClear()
    calpageobjects.Five()
    calpageobjects.multiplication()
    calpageobjects.Two()
    calpageobjects.Nine()
    calpageobjects.dot()
    calpageobjects.Nine()
    calpageobjects.Five()
    calpageobjects.result()
    calpageobjects.MemoryPlus()
    calpageobjects.Three()
    calpageobjects.multiplication()
    calpageobjects.Four()
    calpageobjects.Nine()
    calpageobjects.dot()
    calpageobjects.Nine()
    calpageobjects.Five()
    calpageobjects.result()
    calpageobjects.MemoryPlus()
    calpageobjects.clear()
    calpageobjects.MemoryRecall()
    cy.get('#cs_display').should('have.value', '299.6')
  });

  //Storing a value in memory
  it('Storing a value in memory', () => {
    calpageobjects.MemoryClear()
    calpageobjects.Six()
    calpageobjects.multiplication()
    calpageobjects.Two()
    calpageobjects.Nine()
    calpageobjects.dot()
    calpageobjects.Nine()
    calpageobjects.result()
    calpageobjects.MemoryPlus()
    calpageobjects.clear()
    calpageobjects.MemoryRecall()
    cy.get('#cs_display').should('have.value', '179.4')
  });

  //Memory Calculation
  it('Calculation from a memory value', () => {
    calpageobjects.MemoryClear()
    calpageobjects.Six()
    calpageobjects.multiplication()
    calpageobjects.Two()
    calpageobjects.Nine()
    calpageobjects.dot()
    calpageobjects.Nine()
    calpageobjects.result()
    calpageobjects.MemoryPlus()
    calpageobjects.clear()
    calpageobjects.MemoryRecall()
    calpageobjects.plus()
    calpageobjects.Two()
    calpageobjects.result()
    cy.get('#cs_display').should('have.value', '181.4')
  });

  //Memory Clearing
  it('Memory Clear', () => {
    calpageobjects.MemoryClear()
    calpageobjects.Eight()
    calpageobjects.multiplication()
    calpageobjects.Two()
    calpageobjects.Two()
    calpageobjects.dot()
    calpageobjects.Five()
    calpageobjects.result()
    calpageobjects.MemoryPlus()
    calpageobjects.clear()
    calpageobjects.MemoryRecall()
    calpageobjects.MemoryClear()
    calpageobjects.MemoryRecall()
    cy.get('#cs_display').should('have.value', '0')
  });

});
