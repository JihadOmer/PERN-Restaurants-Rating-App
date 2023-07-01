/* eslint-disable no-undef */
describe("Add restaurant", () => {
  it("Gets, Add new restaurant", () => {
    cy.visit("/");
    // name input
    cy.get(".form-control")
      .eq(0)
      .type("new restaurant")
      .should("have.value", "new restaurant");
    // location input
    cy.get(".form-control")
      .eq(1)
      .type("new Location")
      .should("have.value", "new Location");
    // price range input
    cy.get(".custom-select")
    .eq(0)
    .select("2")
    .should("have.value", "2");

    // submit button
    cy.get(".btn.btn-primary").click();
  });
});
