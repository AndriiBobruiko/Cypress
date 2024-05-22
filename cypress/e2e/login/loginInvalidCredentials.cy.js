describe('Login with Invalid Credentials and Assert Snackbar Error', () => {
  beforeEach(() => {
    cy.visit('/login'); // Update with the actual login URL
  });

  it('Should display snackbar error for invalid credentials', () => {
    cy.get('#email').type('wrong@user.com');
    cy.get('#password').type('wrongpassword');
    cy.get('#loginButton').click();
    cy.get('.snackbar-message').should('contain', 'Invalid credentials');
  });
});