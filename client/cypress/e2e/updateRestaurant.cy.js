/* eslint-disable no-undef */
describe("Update Restaurant", () => {
  it("Updates a restaurant and navigates back to the main page", () => {
    cy.visit("/");
    // Find the update button for a specific restaurant (assuming it has a unique identifier or class)
    cy.get(".restaurant-row") // Assuming each restaurant has a class "restaurant-item"
      .contains("new restaurant") // Replace "Restaurant Name" with the name of the restaurant you want to update
      .parent()
      .find(".btn.btn-warning") // Assuming there is an update button inside each restaurant item
      .click();

    // Assert that the browser has navigated to the update page
    cy.url().should("include", "/update");

    // Update the name field
    cy.get(".form-control") // Assuming the name input has an id "name"
      .eq(0)
      .clear()
      .type("Updated Restaurant Name");

    // Update the location field
    cy.get(".form-control") // Assuming the location input has an id "location"
      .eq(1)
      .clear()
      .type("Updated Location");

    // Update the price range field
    cy.get(".form-control") // Assuming the price range input has an id "price-range"
      .eq(2)
      .clear()
      .type("4"); // Assuming it is a select input with options

    // Submit the update
    cy.get(".btn.btn-primary") // Assuming the submit button has a class "btn btn-primary"
      .click();

    // Assert that the browser has navigated back to the main page
    cy.url().should("eq", Cypress.config().baseUrl + "/");

    // Assert that the updated restaurant is displayed with the new details
    cy.get(".restaurant-row") // Assuming each restaurant has a class "restaurant-item"
      .contains("Updated Restaurant Name") // Replace "Updated Restaurant Name" with the updated restaurant name
      .should("exist");
  });
});
