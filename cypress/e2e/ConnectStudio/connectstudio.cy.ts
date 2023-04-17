it('CS Regression', function(){
    cy.visit('https://connectstudio-admin-dev.world-television.com/dashboard')
    cy.get('#email').type('sadiqul.alam@wtvglobal.com')
    cy.get('#password').type('123456')
    cy.get('.login-button').click()
    cy.get('.show > .d-flex > :nth-child(2)').click()
    cy.get('[data-testid="branding-org-select"]').click()
    cy.get("div[title='QA Org']").click()
    cy.wait(100)
    cy.get("div[data-testid='branding-client-select']").click()
    cy.wait(100)
    cy.get("div[title='Sadiq Client'] div[class='ant-select-item-option-content']").click()
    const f = "photo1.jpg"
    cy.get("input[type='file']").attachFile(f)
    cy.get('.ant-modal-footer > .custom-save-btn').click()

})