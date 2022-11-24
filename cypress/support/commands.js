// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ---------------**-*-*-*-*-*---------------*-*-*-*-*-**-*--*---*-*-*-**-*

// Command for login Carambar

Cypress.Commands.add('login', (email, password) => {
  
    //it("Passing Case : Login with real account", () => {
        cy.get('[class="nq-c-cnilbanner-buttons"]')
        .contains("J'accepte")
        .click()

        cy.get('[class="login"]')
        .contains('Connecte-toi')
        .click()

        cy.get('[name="email"]')
        .first()
        .type(email)
        .should('have.attr', 'type')
        .and('contain', 'email')

        cy.get('[name="password"]')
        .type(password)
        .should('have.attr', 'type')
        .and('contain', 'password')

        cy.get('[data-link-action="sign-in"]')
        // .should('have.attr', 'type')
        // .should('contain', 'submit')
        .contains('Connecte-toi')
        .click()
        
    //})

})