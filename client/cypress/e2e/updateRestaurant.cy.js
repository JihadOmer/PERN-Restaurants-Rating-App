/* eslint-disable no-undef */
describe("Update Restaurant", () => {
  it("Updates a restaurant and navigates back to the main page", () => {
    cy.visit("/");
    
    cy.get(".restaurant-row") // 
      .contains("new restaurant") 
      .parent() // Assuming the update button is a child of the restaurant item or  
      // function is used to move up to the parent element, which should contain the update button.
      .find(".btn.btn-warning") // Assuming there is an update button inside each restaurant item
      .click();

    // Assert that the browser has navigated to the update page
    cy.url().should("include", "/update");

    // Update the name field
    cy.get(".form-control") 
      .eq(0) //   give input a unique id
      .clear()
      .type("Updated Restaurant Name");

    // Update the location field
    cy.get(".form-control") 
      .eq(1)
      .clear()
      .type("Updated Location");

    // Update the price range field
    cy.get(".form-control") 
      .eq(2)
      .clear()
      .type("4"); 

    // Submit the update
    cy.get(".btn.btn-primary") 
      .click();

    // Assert that the browser has navigated back to the main page
    cy.url().should("eq", Cypress.config().baseUrl + "/");

    // Assert that the updated restaurant is displayed with the new details
    cy.get(".restaurant-row") // 
      .contains("Updated Restaurant Name") 
      .should("exist");
  });
});
