describe("Testing the design project", () => {
    before(() => {
        cy.visit("/");
    })

    it("should contain the correct colour", () => {
        // Tittle
        cy.get('[data-cy=SearchTittle]')
        .should('be.visible')
        .and('have.class', 'text-orange-500')

        // Buttons colours and behavior
        cy.get('[data-cy=SearchBtn]')
        .should('be.disabled')
        .and('have.class', 'disabled:bg-slate-500')
        cy.get('[data-cy=SearchBar]').type('GB').then(() => {
            cy.get('[data-cy=SearchBtn]')
            .should('not.be.disabled')
            .and('have.class', 'bg-orange-500')
        })
        cy.get('[data-cy=ResetBtn]')
        .should('have.class', 'bg-slate-500')
        
        // Validation messages
        cy.get('[data-cy=SearchBar]').clear()
        cy.get('[data-cy=SearchBar]').type('123')
        cy.get('[data-cy=SearchBtn]').click().then(() => {
            cy.get('[data-cy=validationLabel]')
            .should('be.visible')
            .and('have.class', 'text-red-500')
        })

        // Details info
        cy.get('[data-cy=countryDetails]').should('contain', 'Country details')
        cy.get('[data-cy=SearchBar]').type('GB')
        cy.get('[data-cy=SearchBtn]').click().then(() => {
            cy.get('[data-cy=Name]')
            .should('be.visible')
            .and('have.class', 'text-orange-500')
        })
    })

    after(() => {
        cy.get('[data-cy=ResetBtn]').click()
    })
  })
  