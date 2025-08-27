/// <reference types="cypress" />

describe('Meroshare', () => {

  beforeEach(() => {
    // Clear all cookies, local storage, and session storage
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })

    cy.visit('/')
    cy.contains('CDS and Clearing Limited. All Rights Reserved')

  })

  it('Apply Share', () => {

    cy.login(Cypress.env('DEPOSITORY_PARTICIPANTS'), Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.apply(Cypress.env('BANK'), Cypress.env('KITTA'), Cypress.env('CRN'), Cypress.env('PIN'))

  })

})
