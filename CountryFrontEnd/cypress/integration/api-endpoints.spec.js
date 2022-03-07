describe("Testing API endpoints", () => {
    // In this test I have created a new command "budNewCommand_Body" to make the api request and yields the request body.
    //I am also using aliases instead of .then
    it("API should return the correct status code", () => {
        cy.budNewCommand_Body('GB').as('OK_response')
        cy.get('@OK_response').its('1').its(0).its('id').should('eq', 'GBR')

        cy.budNewCommand_Body('123').as('BAD_response')
        cy.get('@BAD_response').its(0).its('message').its(0).its('id').should('eq', '120')
    })

    it("API should return the correct data", () => {
        cy.budNewCommand_Body('GB').as('OK_response')
        cy.get('@OK_response').its('1').its(0).its('name').should('eq', 'United Kingdom')

        cy.budNewCommand_Body('123').as('BAD_response')
        cy.get('@BAD_response').its(0).its('message').its(0).its('value').should('eq', 'The provided parameter value is not valid')
    })
})
