describe('Login Successfully via the UI', () => {
  beforeEach(() => {
    cy.visit('http://internaltrainings-vm.ipa.dataart.net/sign-in'); // Update with the actual login URL
  });

  it('Should login successfully and redirect to the dashboard', () => {
    cy.get('#email').type('staff@qa-trainings.com');
    cy.get('#password').type('123123123');
    cy.get('#loginButton').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });
});