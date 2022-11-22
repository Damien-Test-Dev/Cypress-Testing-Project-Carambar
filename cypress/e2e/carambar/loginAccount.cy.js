// Login with true and correct id and password

const email = "amandaetamande@gmail.com"
const password = "Am@nde2022"

describe("Simple Login with correct id and password", () => {

    before("Visit the target website Carambar online candy shop", () => {
        cy.visit("https://www.laboutique.carambarco.com/")

    })
    it("Passing Case : Login with real account", () => {
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
        
    })
})