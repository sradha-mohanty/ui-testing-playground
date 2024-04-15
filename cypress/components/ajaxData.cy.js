describe("Ajax Data", () => {
    it("Click on Button, wait for Ajax request to process and the text to appear", () => {
      cy.visit("/ajax");
      cy.intercept("GET","/ajaxdata").as("authenticate");
      cy.get("#ajaxButton").click();
      cy.wait('@authenticate');
      cy.xpath("//p[contains(text(),'Data loaded with AJAX get request.')]").click();
    });
  });