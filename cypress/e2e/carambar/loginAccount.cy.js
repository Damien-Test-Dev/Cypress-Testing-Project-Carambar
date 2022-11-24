// Login with true and correct id and password

const email = "amandaetamande@gmail.com"
const password = "Am@nde2022"

describe("Simple Login with correct id and password", () => {

    before("Visit the target website Carambar online candy shop", () => {
        cy.visit("https://www.laboutique.carambarco.com/")

    })
    
    it('Login Only', () => {
        cy.login(email, password)
    })

})