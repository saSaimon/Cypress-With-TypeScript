
export class LoginPage{

    navigate(url: string){
        cy.visit(url)
    }
    enterUsername(username: string){
        cy.get('#uname').type(username)
    }
    enterPassword(password: string){
        cy.get('#pwd').type(password)      
    }
    clickLogin(){
        cy.get('[type="submit"]').click()
    }
    
}