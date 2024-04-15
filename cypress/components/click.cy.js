describe("Click", () => {
    it("Click a button multiple time", () => {
      cy.visit("/click");
      cy.get("button.btn-primary").click({ multiple: true}).should("have.css","background-color","rgb(40, 167, 69)");
    });
  });