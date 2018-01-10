describe('simple smoke test', function() {
  
  it('navigate to user page and confirm users have loaded', function() {

    //home page
    cy.visit('http://localhost:5010');
    cy.contains('Users').click();

    //users page
    cy.contains('Bruce Banner');
  });

});