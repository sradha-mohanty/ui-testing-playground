describe("Dynamic ID",()=>{
it("Button with Dynamic ID",()=>{
    cy.visit("dynamicid");
    cy.xpath("//button[@type='button'][contains(text(),'Button with Dynamic ID')]").click();
    //cy.get(btn.btn-primary)//Alternate option to get the web-element
});
});