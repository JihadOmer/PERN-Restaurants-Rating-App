describe("input", () => {
  it("Gets, types and asserts", () => {
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
    cy.get(".custom-select").eq(0).select("2").should("have.value", "2");
    // submit button
    // cy.get(".btn").eq(0).click();
    // // check if the new restaurant is added
    // cy.get(".restaurant").eq(0).should("contain", "new restaurant");
  });
});

// cy.get("custom-select my-1 mr-sm-2").eq(3).type("new price_range");
