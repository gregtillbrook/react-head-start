/* global Cypress */
//This is a extreme simple example of a cypress e2e test - it barely scratches the surface
//See the docs at https://docs.cypress.io/guides/overview/why-cypress.html# 
// import config from 'config';

//'port' should match the values set in the produciton and test config files
//This is because the 'npm run test:e2e' uses a different port so that e2e tests can be run in 
//parrallel with your dev server etc
//TODO: figure out a nicer way to get the port from config
const port = Cypress.env().env === 'production' ? '5000' : '5010';

describe('simple smoke test', function() {
  
  it('navigate to user page and confirm users have loaded', function() {

    //home page
    cy.visit(`http://localhost:${port}`);
    cy.contains('Users').click();

    //users page
    cy.contains('Bruce Banner');
  });

});