Cypress.Commands.add('login', (depository_participants, username, password) => {

    cy.task("log", "Login")
    cy.task("log", "Selecting Depository Participants")
    cy.get('#selectBranch').click()
    cy.get('.select2-search__field').type(depository_participants, { log: false })
    cy.get('.select2-results__option').click()

    cy.task("log", "Typing Username, Password and Login")
    cy.get('#username').type(username, { log: false })
    cy.get('#password').type(password, { log: false })
    cy.get('.btn').click()

})

Cypress.Commands.add('apply', (bank, kitta, crn, pin) => {
  cy.task("log", "Visiting 'My ASBA' Page")
  cy.get('.nav').contains('My ASBA').click()
  cy.wait(5000)

  cy.task("log", "Waiting for IPO list or confirming absence")
  cy.get('app-asba').then($container => {
    const hasCompanyList = $container.find('.company-list').length > 0

    if (!hasCompanyList) {
      cy.task("log", "❌ No any shares to apply")
      return
    }

    cy.get('.company-list').each(($el) => {
      const shareBadge = $el.find('.share-of-type').text().trim()
      const shareType = $el.find('span.isin').text()
      const shareName = $el.find('span[tooltip="Company Name"]').text()
      const appliedButton = $el.find('.btn-issue').text()

      const isIPOOrFPO = shareBadge.includes('IPO') || shareBadge.includes('FPO')
      const isOrdinaryShare = shareType.includes('Ordinary Shares')
      const isEligibleToApply = appliedButton.includes('Reapply') || appliedButton.includes('Apply')

      if (isIPOOrFPO && isOrdinaryShare && isEligibleToApply) {
        cy.task("log", `Applying ${shareName} share`)
        $el.find('.btn-issue')[0].click()

        cy.task("log", "Selecting Bank")
        cy.get('#selectBank').select(1, { log: false })
        cy.get('#accountNumber').select(1, { log: false })
        cy.task("log", `Applying ${kitta} kitta`)
        cy.get('#appliedKitta').clear().type(kitta)
        cy.task("log", "Typing CRN number")
        cy.get('#crnNumber').type(crn, { log: false })
        cy.task("log", "Checking disclaimer")
        cy.get('#disclaimer').check()
        cy.get('.card-footer>button[type="submit"]').click()

        cy.task("log", "Typing transaction PIN")
        cy.get('#transactionPIN').type(pin, { log: false })

        cy.get('.btn-primary').contains('Apply').click()
        cy.contains('Share has been applied successfully')

      } else if (!isIPOOrFPO) {
        cy.task("log", `⚠️ [NOTICE] ${shareName} ❌ is not IPO or FPO — Detected as "${shareBadge.toUpperCase()}"`)
      } else if (!isOrdinaryShare) {
        cy.task("log", `⚠️ [NOTICE] ${shareName} share is NOT an Ordinary Share`)
      } else if (appliedButton.includes('Edit')) {
        cy.task("log", `✅ ${shareName} share is already applied`)
      }
    })
  })

  cy.task("log", "Log Out")
  cy.get('.msi-logout').click()
})
