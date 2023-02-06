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

    cy.task("log", "Applying 'Ordinary Share'")
    cy.get('.company-list').each(($el, index, $list) => {

        const shareType = $el.find('.share-of-type').text()
        const shareGroup = $el.find('span.isin').text()
        const shareName = $el.find('span[tooltip="Company Name"]').text()
        const appliedButton = $el.find('.btn-issue').text()

        if (shareType.includes('IPO') && shareGroup.includes('Ordinary Shares') && appliedButton.includes('Apply')) {
            cy.task("log", `Applying ${shareName} share`)
            $el.find('.btn-issue').click()

            cy.task("log", "Selecting Bank")
            cy.get('#selectBank').select(1, { log: false })
            cy.task("log", `Applying ${kitta} kitta`)
            cy.get('#appliedKitta').type(kitta)
            cy.task("log", "Typing CRN number")
            cy.get('#crnNumber').type(crn, { log: false })
            cy.task("log", "Checking disclaimer")
            cy.get('#disclaimer').check()
            cy.get('.card-footer>button[type="submit"]').click()

            cy.task("log", "Typing transaction PIN")
            cy.get('#transactionPIN').type(pin, { log: false })

            cy.get('.confirm-page-btn > .btn-primary').click()
            cy.contains('Share has been applied successfully')

        } else if (!shareType.includes('IPO')) {
            cy.task("log", `${shareName} share is not an IPO`)
        } else if (!shareGroup.includes('Ordinary Shares')) {
            cy.task("log", `${shareName} share is not an Ordinary Share`)
        } else if (appliedButton.includes('Edit')) {
            cy.task("log", `${shareName} share is already applied`)
        }

    })
    cy.screenshot()
    cy.task("log", "Log Out")
    cy.get('.msi-logout').click()
})
