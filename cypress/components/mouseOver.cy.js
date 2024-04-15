describe("Mouse Over",()=>{
    it("Check the count of number of clicks showing in the page",()=>{
        cy.visit("mouseover");
        cy.get(".text-primary").trigger('mouseenter');
        cy.get(".text-warning").click();
        cy.get(".text-warning").click();
        cy.get('#clickCount').should('have.text',2);
        
    });
    });