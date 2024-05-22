describe('Error Handling of Signup Fields', () => {
  beforeEach(() => {
    cy.visit('/sign-up'); // Update with the actual signup URL
  });

  it('Should display error for invalid email format', () => {
    cy.get('#email').type('invalid-email');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('password123');
    cy.get('#signupButton').click();
    cy.get('.error-message').should('contain', 'Invalid email format');
  });

  it('Should display error for empty password', () => {
    cy.get('#email').type('user@example.com');
    cy.get('#password').clear();
    cy.get('#confirmPassword').type('password123');
    cy.get('#signupButton').click();
    cy.get('.error-message').should('contain', 'Password is required');
  });

  it('Should display error for mismatched passwords', () => {
    cy.get('#email').type('user@example.com');
    cy.get('#password').type('password123');
    cy.get('#confirmPassword').type('differentPassword');
    cy.get('#signupButton').click();
    cy.get('.error-message').should('contain', 'Passwords do not match');
  });
});