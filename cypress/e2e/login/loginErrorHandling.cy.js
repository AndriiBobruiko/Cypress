describe('Error Handling of Login Fields', () => {
  beforeEach(() => {
    cy.visit('/login'); // Update with the actual login URL
  });

  it('Should display error for invalid email format', () => {
    cy.get('#email').type('invalid-email');
    cy.get('#password').type('password123');
    cy.get('#loginButton').click();
    cy.get('.error-message').should('contain', 'Invalid email format');
  });

  it('Should display error for empty password', () => {
    cy.get('#email').type('user@example.com');
    cy.get('#password').clear();
    cy.get('#loginButton').click();
    cy.get('.error-message').should('contain', 'Password is required');
  });
});