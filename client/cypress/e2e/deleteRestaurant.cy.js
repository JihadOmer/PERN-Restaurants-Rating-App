/* eslint-disable no-undef */
describe("deleteRestaurant", () => {
  it("Deletes a restaurant from the list", () => {
    // Find the delete button of the desired restaurant and click it
    cy.visit("/");

    cy.get(".restaurant-row").find(".btn.btn-danger").click();
  });
});
