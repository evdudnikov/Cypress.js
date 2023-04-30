describe('Login form tests', () => {
    const correctEmail = 'german@dolnikov.ru';
    const correctPassword = 'iLoveqastudio1';
    const wrongEmail = 'test@example.com';
    const wrongPassword = 'wrongpassword';
    const invalidEmail = 'invalidemail';
    
    beforeEach(() => {
      cy.visit('https://login.qa.studio/');
    });
  
    it('Password recovery test', () => {
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot')
        .type(correctEmail)
        .should('have.value', correctEmail);
      cy.get('#restoreEmailButton').click();
      cy.get('#messageHeader').should('contain.text', 'Успешно отправили пароль на e-mail');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });  
})