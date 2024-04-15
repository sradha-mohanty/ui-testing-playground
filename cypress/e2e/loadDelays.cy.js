describe("Load Delays",()=>{
it("Check the button to be appeared and clicked after page load",()=>{
    cy.visit("")
    cy.xpath("//a[@href ='/loaddelay']",{ timeout: 50000 }).click();
    cy.get("button.btn-primary").click();
    //cy.log("Button clicked");
});
});