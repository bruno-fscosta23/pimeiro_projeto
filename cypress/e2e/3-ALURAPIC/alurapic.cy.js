describe('Login e registro de usuários alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
    })

    it('Verifica mensagem validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full namfee is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User nfeame is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Passworfed is required!').should('be.visible');
    })

    it('verifica menssagem de email inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('bruno');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica menssagem de senha invalida', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifica mensagem de que o nome do usuario deve estar em minusculo', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="user  Name"]').type('Bru');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

})