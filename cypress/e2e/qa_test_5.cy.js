describe('Login form tests', () => {
    const correctEmail = 'german@dolnikov.ru';
    const correctPassword = 'iLoveqastudio1';
    const wrongEmail = 'test@example.com';
    const wrongPassword = 'wrongpassword';
    const invalidEmail = 'invalidemail';
    
    beforeEach(() => {
      cy.visit('https://login.qa.studio/');
    });
  
    it('Negative validation test - missing "@" symbol in email', () => {
      cy.get('#mail')
        .type(invalidEmail)
        .should('have.value', invalidEmail);
      cy.get('#pass')
        .type(correctPassword)
        .should('have.value', correctPassword);
      cy.get('#loginButton').click();
      cy.get('#messageHeader').should('contain.text', 'Нужно исправить проблему валидации');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });  
})