/// <reference types="cypress" />

describe('Meroshare', () => {

  beforeEach(() => {

    cy.visit('/')
    cy.contains('© 2022 CDS and Clearing Limited. All Rights Reserved')

  })

  it('Apply Share', () => {

    cy.login(Cypress.env('DEPOSITORY_PARTICIPANTS'), Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
    cy.apply(Cypress.env('BANK'), Cypress.env('KITTA'), Cypress.env('CRN'), Cypress.env('PIN'))

  })

})
