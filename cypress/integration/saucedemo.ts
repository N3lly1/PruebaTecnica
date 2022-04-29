/// <reference types="cypress" />

import pages from '../fixtures/pages.json'
import assertions from '../support/assertions'

describe("Saucedemo", function() {
 
    const Assertions = new assertions()
 
    it("saucedemo", function() {
        cy.visit(pages.login)
        Assertions.login()
        Assertions.addToCard()
        Assertions.checkout()
    })
})
