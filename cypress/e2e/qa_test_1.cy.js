describe('Login form tests', () => {
    const correctEmail = 'german@dolnikov.ru';
    const correctPassword = 'iLoveqastudio1';
    const wrongEmail = 'test@example.com';
    const wrongPassword = 'wrongpassword';
    const invalidEmail = 'invalidemail';
    
    beforeEach(() => {
      cy.visit('https://login.qa.studio/');
    });
  
    it('Positive login test', () => {
      cy.get('#mail')
        .type(correctEmail.toLowerCase())
        .should('have.value', correctEmail.toLowerCase());
      cy.get('#pass')
        .type(correctPassword)
        .should('have.value', correctPassword);
      cy.get('#loginButton').click();
      cy.get('#message').should('contain.text', 'Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})