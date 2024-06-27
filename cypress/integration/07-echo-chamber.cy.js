/// <reference types="cypress" />

describe('Initial Page', () => {
  beforeEach(() => {
    cy.visit('/echo-chamber');
  });

  it('should have the title of the application in the header', () => {
    cy.get('[data-test="application-title"]').should('contain', 'Echo Chamber');
  });

  it('should have the title of the application in the window', () => {
    cy.title().should('contain', 'Echo Chamber');
  });

  it('should navigate to "/sign-in" when you click the "Sign In" button', () => {
    cy.get('[data-test="sign-in"]').click();
    cy.location('pathname').should('contain', '/sign-in');
  });

  it('should navigate to "/sign-up" when you click the "Sign Up" button', () => {
    cy.get('[data-test="sign-up"]').click();
    cy.location('pathname').should('contain', '/sign-up');
  });
});

describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/echo-chamber/sign-up');
  });

  it('should require an email', () => {
    cy.get('[data-test="sign-up-submit"]').click();
    cy.get('[data-test="sign-up-email"]').then(($el) => {
      expect($el[0].validationMessage).to.eq('Please fill out this field.');
    });
  });

  it('should require that the email actually be an email address', () => {
    const email = 'teste';
    cy.get('[data-test="sign-up-email"]').as('emailInput').type(email);
    cy.get('[data-test="sign-up-submit"]').click();
    cy.get('@emailInput').then(($el) => {
      expect($el[0].validationMessage).to.eq(
        `Please include an '@' in the email address. '${email}' is missing an '@'.`,
      );
    });
  });

  it('should require a password when the email is present', () => {
    const email = 'teste@teste.com';
    cy.get('[data-test="sign-up-email"]').as('emailInput').type(email);
    cy.get('[data-test="sign-up-submit"]').click();
    cy.get('[data-test="sign-up-password"]').then(($el) => {
      expect($el[0].validationMessage).to.eq('Please fill out this field.');
    });
  });
});
