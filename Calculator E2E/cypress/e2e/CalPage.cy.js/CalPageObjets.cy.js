//This class contains calculator objects i.e. numbers, operations etc to be used in the main test suite.

export class CalPageObjets {
    //functions for selecting a number from calculator
    //btn-0
    Zero() {
        return cy.get(':nth-child(7) > :nth-child(1) > .cs_button').click()
    }
    //btn-1
    One() {
        return cy.get(':nth-child(6) > :nth-child(1) > .cs_button').click()
    }
    //btn-2
    Two() {
        return cy.get(':nth-child(6) > :nth-child(2) > .cs_button').click()
    }
    //btn-3
    Three() {
        return cy.get(':nth-child(6) > :nth-child(3) > .cs_button').click()
    }
    //btn-4
    Four() {
        return cy.get(':nth-child(5) > :nth-child(1) > .cs_button').click()
    }
    //btn-5
    Five() {
        return cy.get(':nth-child(5) > :nth-child(2) > .cs_button').click()
    }
    //btn-6
    Six() {
        return cy.get(':nth-child(5) > :nth-child(3) > .cs_button').click()
    }
    //btn-7
    Seven() {
        return cy.get(':nth-child(4) > :nth-child(1) > .cs_button').click()
    }
    //btn-8
    Eight() {
        return cy.get(':nth-child(4) > :nth-child(2) > .cs_button').click()
    }
    //btn-9
    Nine() {
        return cy.get(':nth-child(4) > :nth-child(3) > .cs_button').click()
    }
    //btn-.
    dot() {
        return cy.get(':nth-child(7) > :nth-child(2) > .cs_button').click()
    }


    //Functions for selecting a operation for calculation
    //add
    plus() {
        return cy.get(':nth-child(6) > :nth-child(4) > .cs_button').click()
    }
    //multiply
    multiplication() {
        return cy.get(':nth-child(4) > :nth-child(4) > .cs_button').click()
    }
    //subtract
    subtract() {
        return cy.get(':nth-child(5) > :nth-child(4) > .cs_button').click()
    }
    //Divide
    division() {
        return cy.get(':nth-child(3) > :nth-child(4) > .cs_button').click()
    }

    //function for result or equal-button
    result() {
        //Equal
        return cy.get(':nth-child(7) > :nth-child(4) > .cs_button').click()
    }

    //function for Memory Clear
    MemoryClear() {
        //Memory Clear
        return cy.get('.cs_memory_row > :nth-child(1) > .cs_button').click()
    }

    //function for Memory Recall
    MemoryRecall() {
        //Memory Recall
        return cy.get('.cs_memory_row > :nth-child(2) > .cs_button').click()
    }

     //function for Memory Minus
     MemoryMinus() {
        //Memory Minus
        return cy.get('.cs_memory_row > :nth-child(3) > .cs_button').click()
    }

    //function for Memory Plus
    MemoryPlus() {
        //Memory Plus
        return cy.get('.cs_memory_row > :nth-child(4) > .cs_button').click()
    }

    clear() {
        return cy.get('#clear_display').click()

    }

}