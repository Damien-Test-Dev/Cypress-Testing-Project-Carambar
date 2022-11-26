// Add an item in the cart



const email = "amandaetamande@gmail.com"
const password = "Am@nde2022"

describe('Ajout d\'un article dans le panier', () => {
    before("Visit the target website Carambar online candy shop", () => {
        cy.visit("https://www.laboutique.carambarco.com/")

    })

    it('Login and add an item in the cart', () => {
        cy.login(email, password)

        // add an item in the cart
        cy.get('[class="nq-c-Header-menu-item-label"]')
        .contains('Marques')
        .click()

        // choose brand : carambar
        cy.get('[href="https://www.laboutique.carambarco.com/69-carambar"]')
        .eq(2)
        .click()
        .should('have.attr', 'href')

        // choose an item from the brand : carambar
        cy.get('[alt="Sirop Carambar saveur Cola"]')
        .click({force:true})
        
        // add one more item in the quantity
        cy.get('[data-type="increment"]')
        .click()

        // add to the cart with the button add cart : AJOUTER AU PANIER
        cy.get('[data-button-action="add-to-cart"]')
        .contains('Ajouter au panier')
        .click()

        // pop-up window click add button
        // -- hard challenge --
        /*
        The button for adding an item in the cart is a type submit button
        so the data is send somewhere
        then the result is a pop up window
        in this new window : it is posssible to do some more actions
        */

        // need to do some research

        // cy.window and cy.response

        // testing solution 1 : get the pop up window
        
        // cy.get('[class="nq-c-Popin-content"]')

        // never found : why ??

        // testing solution 2
        // cy.window()

        cy.window().then(function(element){
            cy.stub(element, 'prompt').returns('Carambar')
            cy.get('[href="//www.laboutique.carambarco.com/panier?action=show"]').click()
            // cy.get('[class="nq-c-CartPopin-actions"]').contains('Je commande !')
        })

        // click button 'Je commande'
        


    })
    
})