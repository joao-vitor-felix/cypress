/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
    cy.get('[data-test="filter-items"]').as('filterInput');
    cy.get('[data-test="items"]').as('items');
  });

  it('should set and use an alias', () => {
    const item = 'Deoderant';
    cy.get('@filterInput').type(item);
    cy.get('@items').contains(item);
  });
});
