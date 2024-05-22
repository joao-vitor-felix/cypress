/// <reference types="cypress" />

describe('Create a New Item', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });
  it('should have a form', () => {
    cy.get('form').should('exist');
  });

  it('should have the correct button text', () => {
    cy.contains(/add item/i);
  });

  it('should type in the input', () => {
    cy.get('[data-test="new-item-input"]').type('Novo item');
  });
});
