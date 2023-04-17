it('google test', function(){
    cy.visit('https://google.com')
    cy.get('[name="q"]')
        .type('Automation Step by step')
        .type('{enter}')
})