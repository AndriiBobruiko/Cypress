describe('Login with Invalid Credentials and Assert Snackbar Error', () => {
  beforeEach(() => {
    cy.visit('http://internaltrainings-vm.ipa.dataart.net/sign-in'); // Update with the actual login URL
  });

  it('Should display snackbar error for invalid credentials', () => {
    cy.get('#email').type('wrong@user.com');
    cy.get('#password').type('wrongpassword');
    cy.get('#loginButton').click();
    cy.get('.snackbar-message').should('contain', 'Invalid credentials');
  });
});