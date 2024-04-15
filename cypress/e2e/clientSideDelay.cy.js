describe("Client Side Delay", () => {
    it("Click on button after load", () => {
      cy.visit("/clientdelay");
      cy.get("#ajaxButton").click();
      cy.get(".bg-success",{timeout:17000}).contains("Data calculated on the client side.").click();
    });
  });