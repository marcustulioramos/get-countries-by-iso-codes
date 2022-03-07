describe("Testing the functionalities", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("Details container should display the correct info", () => {
        // Details info
        cy.get('[data-cy=SearchBar]').type('GB')
        cy.get('[data-cy=SearchBtn]').click().then(() => {
            cy.get('[data-cy=Name]').should('contain', 'United Kingdom')
            cy.get('[data-cy=CountryCode]').should('contain', 'GB')
            cy.get('[data-cy=Region]').should('contain', 'Europe & Central Asia')
            cy.get('[data-cy=CapitalCity]').should('contain', 'London')
            cy.get('[data-cy=Longitude]').should('contain', '-0.126236')
            cy.get('[data-cy=Latitude]').should('contain', '51.5002')
        })
    })

    it("Search button should be disable for empty search bar", () => {
        // Two letters uppercase  
        cy.get('[data-cy=SearchBar]').clear()
        cy.get('[data-cy=SearchBtn]').should('be.disabled')  
    })

    it("Search bar should accept all ISO formats", () => {
        // Two letters uppercase  
        cy.get('[data-cy=SearchBar]').type('GB')
        cy.get('[data-cy=SearchBtn]').click().then(() => {
            cy.get('[data-cy=Name]').should('contain', 'United Kingdom')
        })
        cy.get('[data-cy=ResetBtn]').click()
        
        // Two letters uppercase 
        cy.get('[data-cy=SearchBar]').type('GBR')
        cy.get('[data-cy=SearchBtn]').click().then(() => {
            cy.get('[data-cy=Name]').should('contain', 'United Kingdom')
        })
        cy.get('[data-cy=ResetBtn]').click()
        
        // Three letters lowercase 
        cy.get('[data-cy=SearchBar]').type('gb')
        cy.get('[data-cy=SearchBtn]').click().then(() => {
            cy.get('[data-cy=Name]').should('contain', 'United Kingdom')
        })
        cy.get('[data-cy=ResetBtn]').click()
        
        // Three letters lowercase 
        cy.get('[data-cy=SearchBar]').type('gbr')
        cy.get('[data-cy=SearchBtn]').click().then(() => {
            cy.get('[data-cy=Name]').should('contain', 'United Kingdom')
        })
        cy.get('[data-cy=ResetBtn]').click()
    })

    it("Validation label should display the correct error message", () => {
        // Validation label
        cy.get('[data-cy=SearchBar]').type('123')
        cy.get('[data-cy=SearchBtn]').click().then(() => {
            cy.get('[data-cy=validationLabel]')
            .should('be.visible')
            .and('contain', 'The ISO code is invalid')
        })
        cy.get('[data-cy=Name]').should('not.be.visible')
    })

    it("Reset button should clear all data", () => {
        // Clear details container
        cy.get('[data-cy=SearchBar]').type('GB')
        cy.get('[data-cy=SearchBtn]').click().then(() => {
            cy.get('[data-cy=Name]').should('contain', 'United Kingdom')
        })
        cy.get('[data-cy=ResetBtn]').click().then(() => {
            cy.get('[data-cy=Name]').should('not.be.visible')
        })

        //clear validation label
        cy.get('[data-cy=SearchBar]').type('123')
        cy.get('[data-cy=SearchBtn]').click().then(() => {
            cy.get('[data-cy=validationLabel]')
            .should('be.visible')
            .and('contain', 'The ISO code is invalid')
        })
        cy.get('[data-cy=ResetBtn]').click().then(() => {
            cy.get('[data-cy=validationLabel]').should('not.be.visible')
        })
    })

    afterEach(() => {
        cy.get('[data-cy=ResetBtn]').click()
    })
  })
  