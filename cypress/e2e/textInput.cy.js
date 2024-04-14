describe("Text Input", () => {
    it("Check the button name is changing as the text changes", () => {
      cy.visit("http://uitestingplayground.com/");
      cy.xpath("//a[@href ='/textinput']").click();
      cy.get("#newButtonName").type("Hello");
      cy.get("#updatingButton").click().should("have.text","Hello");
    });
  });