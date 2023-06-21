describe("deleteRestaurant", () => {
  it("Deletes a restaurant from the list", () => {
    // Find the delete button of the desired restaurant and click it
    cy.visit("/");
    cy.get(".restaurant-row")
      .contains("new restaurant") // Replace "Restaurant Name" with the actual name of the restaurant
      .parent()
      .find(".btn.btn-danger")
      .click();

    // Confirm the deletion
    // cy.get(".restaurant-row")
    //   .should("be.visible")
    //   .contains("Confirm Delete")
    //   .click();

    // Verify that the restaurant is no longer in the list
    // cy.get(".restaurant-row").should("not.contain", "new restaurant");
  });
});
