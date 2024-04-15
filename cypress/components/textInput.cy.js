describe("Text Input", () => {
    it("Check the button name is changing as the text changes", () => {
      cy.visit("http://uitestingplayground.com/");
      cy.xpath("//a[@href ='/textinput']").click();
      cy.get("#newButtonName").type("This is Test Data");
      cy.get("#updatingButton").click().should("have.text","This is Test Data");
    });
  });