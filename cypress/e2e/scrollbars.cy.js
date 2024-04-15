describe("ScrollBars", () => {
    it("Scroll to get the button on page", () => {
      cy.visit("scrollbars");
      cy.get("#hidingButton").scrollIntoView().should("be.visible").click();
    });
  });