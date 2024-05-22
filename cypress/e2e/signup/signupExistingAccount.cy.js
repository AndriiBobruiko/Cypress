describe('Signup with an Already Existing Account', () => {
  beforeEach(() => {
    cy.visit('/sign-up'); // Update with the actual signup URL
  });

  it('Should display error for existing account', () => {
    cy.get('#email').type('existing@user.com');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password123');
    cy.get('#signupButton').click();
    cy.get('.error-message').should('contain', 'Email is already registered');
  });
});