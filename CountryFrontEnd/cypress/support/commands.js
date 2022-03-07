Cypress.Commands.add('budNewCommand_Body', (attr) => { 
    cy.request('GET', `http://api.worldbank.org/v2/country/${attr}?format=json`).its('body')
})
