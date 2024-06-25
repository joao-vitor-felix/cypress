/// <reference types="cypress" />

describe('Input obstacles', () => {
  beforeEach(() => {
    cy.visit('/obstacle-course');
  });

  it('should input text into the input field', () => {
    const thought = 'Ravioli are a form of pop tart.';

    cy.get('[data-test="text-input"]').type(thought);
    cy.get('[data-test="text-result"]').contains(thought);
  });

  it('should control a select input', () => {
    const avenger = 'Captain America';
    cy.get('[data-test="select-input"]').select(avenger);
    cy.get('[data-test="select-result"]').should('have.text', avenger);
  });

  it('should find and control a checkbox input', () => {
    cy.get('[data-test="checkbox-tomato"]').check();
    cy.get('[data-test="checkbox-result"]').as('checkboxResult').should('have.text', 'Tomato');
    cy.get('[data-test="checkbox-onion"]').check();
    cy.get('@checkboxResult').should('have.text', 'Tomato, Onion');
  });

  it('should find and control a radio input', () => {
    cy.get('[data-test="radio-john"]').check();
    cy.get('[data-test="radio-result"]').should('have.text', 'John');
  });

  it('should find and control a color input', () => {
    cy.get('[data-test="color-input"]').invoke('val', '#ff0000').trigger('change');
    cy.get('[data-test="color-result"]').should('have.text', '#FF0000');
  });

  it('should find and control a date input', () => {
    cy.get('[data-test="date-input"]').type('2021-01-01');
    cy.get('[data-test="date-result"]').should('have.text', '2021-01-01');
  });

  it('should find and control a range input', () => {
    cy.get('[data-test="range-input"]').invoke('val', '6').trigger('change');
    cy.get('[data-test="range-result"]').should('have.text', '6');
  });

  it('should find and control a file input', () => {
    const fileName = 'tsconfig.json';
    cy.get('[data-test="file-input"]').selectFile(fileName);
    cy.get('[data-test="file-result"]').should('have.text', `C:\\fakepath\\${fileName}`);
  });
});
