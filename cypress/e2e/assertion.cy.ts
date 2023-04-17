it('Learning assertion', function(){
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get('#query-btn', {timeout: 6000})
        .should('contain', 'Button')
        .should('have.class','query-btn')
        .should('be.visible')
        .should('be.enabled')
    
    cy.get('#query-btn', {timeout: 6000}).invoke('attr','id')
        .should('equal','query-btn')
    
    cy.get('#query-btn', {timeout: 6000})
        .should('contain', 'Button')
        .and('have.class','query-btn')
    //Exoplicit Assertion
    //Exepect
    expect(true).to.be.true 

    let name = 'Raghab'
    expect(name).to.be.equal('Raghab')

    //assert
    assert.equal(4,4,'Not Equal')
    assert.strictEqual(4, 4, 'Not Strictly Equal.')
        
})