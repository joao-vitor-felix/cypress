/// <reference types="cypress" />

const restaurants = [
  'Chick-fil-A',
  'McDonalds',
  'In-N-Out',
  'KFC',
  'Jack In The Box',
  'Jamba Juice',
  'Starbucks',
  'Dairy Queen',
  'Burger King',
  'Chipotle',
  'Taco Bell',
  'Five Guys',
  'Sonic',
  'Subway',
  'Panera Bread',
];

const properties = [
  'name',
  'whereToOrder',
  'description',
  'secret',
  'ingredients',
  'popularity',
  'price',
  'howToOrder',
];

const ratings = [1, 2, 3, 4, 5, 6, 7];

describe('Secret Menu Items', () => {
  beforeEach(() => {
    cy.visit('/secret-menu');
  });

  it('should exist have the title on the page', () => {
    cy.get('h1').should('contain', 'Secret Menu Items');
  });

  for (const rating of ratings) {
    it.only(`should display restaurants with rating of ${rating} or higher`, () => {
      cy.get('#minimum-rating-visibility').invoke('val', rating).trigger('change');
      cy.get('td[headers="popularity-column"]').each(($el) => {
        expect(+$el.text()).to.be.gte(rating);
        // cy.wrap($el)
        //   .invoke('text')
        //   .then(($val) => cy.wrap(+$val).should('be.gte', rating));
      });
    });
  }
});
