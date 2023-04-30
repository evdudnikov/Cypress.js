describe('Login form tests', () => {
    const correctEmail = 'german@dolnikov.ru';
    const correctPassword = 'iLoveqastudio1';
    const wrongEmail = 'test@example.com';
    const wrongPassword = 'wrongpassword';
    const invalidEmail = 'invalidemail';
    
    beforeEach(() => {
      cy.visit('https://login.qa.studio/');
    });
  
    it('Login test with capitalized email', () => {
      cy.get('#mail')
        .type(correctEmail.toUpperCase())
        .should('have.value', correctEmail.toUpperCase());
      cy.get('#pass')
        .type(correctPassword)
        .should('have.value', correctPassword);
      cy.get('#loginButton').click();
      cy.get('#messageHeader').should('contain.text', 'Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });  
})