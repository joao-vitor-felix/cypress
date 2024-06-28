/// <reference types="cypress" />

const email = 'first@example.com';

describe('Sign In', () => {
  beforeEach(() => {
    cy.task('seed').signIn();
  });
  it('should login into the app', () => {
    cy.location('pathname').should('contain', '/echo-chamber/posts');
    cy.contains('Signed in as ' + email);
  });
});
