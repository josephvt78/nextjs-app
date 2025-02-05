describe('Home Page Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the home page with the Hello World heading', () => {
    cy.get('h1', { timeout: 10000 }) // Increase timeout
      .should('be.visible')
      .and('contain.text', 'Hello World');
  });

  it('should render the Button component', () => {
    cy.get('button', { timeout: 10000 }).should('exist'); // Wait longer
  });
});
