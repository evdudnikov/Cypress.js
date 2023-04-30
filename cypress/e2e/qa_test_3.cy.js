describe('Login form tests', () => {
    const correctEmail = 'german@dolnikov.ru';
    const correctPassword = 'iLoveqastudio1';
    const wrongEmail = 'test@example.com';
    const wrongPassword = 'wrongpassword';
    const invalidEmail = 'invalidemail';
    
    beforeEach(() => {
      cy.visit('https://login.qa.studio/');
    });
  
    it('Negative login test - wrong password', () => {
      cy.get('#mail')
        .type(correctEmail.toLowerCase())
        .should('have.value', correctEmail.toLowerCase());
      cy.get('#pass')
        .type(wrongPassword)
        .should('have.value', wrongPassword);
      cy.get('#loginButton').click();
      cy.get('#messageHeader').should('contain.text', 'Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  
})