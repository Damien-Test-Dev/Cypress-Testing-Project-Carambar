// Carambar account creation

const { faker } = require('@faker-js/faker');

//const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz



describe('Account Creation', () => {
    
    beforeEach('Carambar web site', () => {
        cy.visit('https://www.laboutique.carambarco.com/')
    })
    

    it('Account Creation - Creation OK', () => {

        // Cookies Acceptance Button : Accepted
        cy.get('[class="nq-c-Btn button acceptBtn"]')
        .find('span')
        .contains('J\'accepte')
        .should('not.have.class', 'disabled')
        .and('not.have.class', 'position')
        .click()

        // Sign In Button in the Header
        cy.get('.nq-c-HeaderUser > a')
        .should('have.class', 'login')
        .find('span')
        .contains('Connecte-toi')
        .click()

        // New User : new account creation

        // Creation of a new account

        // All working 😀😀

        /*
        // No should = no Assert
        cy.get('[data-link-action="display-register-form"]')
        .contains('Pas de compte ? Créez-en un')
        .click()
        */

        // BEST !! 😎😎😎
        
        // With should = with Assert
        cy.get('[data-link-action="display-register-form"]')
        .should('contain', 'Pas de compte ? Créez-en un')
        .click()
        

        // Easiest way !!
        /*
        cy.get('[data-link-action="display-register-form"]')
        .click()
        */

        // contains some text 
        /*
        cy.contains('a', 'Pas de compte ? Créez-en un')
        .click()
        */


        // Start filling the form for account creation

        // Choose 
        cy.get('[type="radio"]')
        .should('have.value', '1')
        .first()
        .check({force:true})

        // First name
        cy.get('[name="firstname"]')
        .type('Henry')
        .should('have.attr', 'name')
        


        // Last name
        cy.get('[name="lastname"]')
        .type('RATATA')
        .should('have.attr', 'name')

        // Particular type
        cy.get('[name="customer_type"]')
        .should('have.value', 'particular')
        .eq(0)
        .check({force:true})

        // Email input
        cy.get('[name="email"]')
        .eq(0)
        .type(randomEmail)
        .should('have.attr', 'type')

        // Password input
        cy.get('[name="password"]')
        .type('Jambon@2')
        .should('have.attr', 'type')

        // Checkbox validation newsletter
        cy.get('[name="newsletter"]')
        .check({force:true})

        // Sign Up Validation == Last Step
        cy.get('[type="submit"]')
        .contains('Enregistrer').click()

        

        

        // Cypress problem : cannot go further
        
        
        // End of Script ---        
    })
})