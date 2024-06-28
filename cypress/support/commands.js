Cypress.Commands.add('signIn', (email = 'first@example.com', password = 'password123') => {
  cy.visit('/echo-chamber/sign-in');
  cy.get('[data-test="sign-in-email"]').type(email);
  cy.get('[data-test="sign-in-password"]').type(password);
  cy.get('[data-test="sign-in-submit"]').click();
});
