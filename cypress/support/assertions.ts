/// <reference types="cypress" />

import components from '../fixtures/components.json'
import string from '../fixtures/strings.json'

class Assertions {

    login() {  
        cy.get(components.inputs.userName).type('standard_user')  
        cy.get(components.inputs.password).type('secret_sauce')
        cy.get(components.buttons.login).click()  
    }

    addToCard() {
        cy.get(components.buttons.sauceLabBackback).click()
        cy.get(components.buttons.sauceLabsFleeceJacket).click()
        cy.get(components.buttons.shopping).click()

        cy.get(components.texts.sauceLabBackback).should("contain.text",string.cart.sauceLabBackback)
        cy.get(components.texts.sauceLabBackbackDescription).should("contain.text",string.cart.sauceLabBackbackDescription)
        cy.get(components.texts.sauceLabBackbackPrice).should("contain.text",string.cart.sauceLabBackbackPrice)

        cy.get(components.texts.sauceLabsFleeceJacket).should("contain.text",string.cart.sauceLabsFleeceJacket)
        cy.get(components.texts.sauceLabsFleeceJacketDescription).should("contain.text",string.cart.sauceLabsFleeceJacketDescription)
        cy.get(components.texts.sauceLabsFleeceJacketPrice).should("contain.text",string.cart.sauceLabsFleeceJacketPrice)

        cy.get(components.buttons.remove).click()
    }

    checkout() {
        cy.get(components.buttons.checkout).click()  
        
        cy.get(components.inputs.firstName).type('Blanca Nelly')
        cy.get(components.inputs.lastName).type('Salas Roblero')
        cy.get(components.buttons.continue).click()

        cy.get(components.containers.error).should("be.visible")
        cy.get(components.texts.postalCodeError).should("contain.text",string.checkout.postalCodeError)

        cy.get(components.inputs.postalCode).type('11230')
        cy.get(components.buttons.continue).click()
        
        cy.get(components.buttons.finish).click()

        cy.get(components.texts.thankYouForYourOrder).should("contain.text",string.checkout.thankYouForYourOrder)
        cy.get(components.texts.thankYouForYourOrderDescription).should("contain.text",string.checkout.thankYouForYourOrderDescription)

        cy.get(components.buttons.backHome).click()
    }
}

export default Assertions;