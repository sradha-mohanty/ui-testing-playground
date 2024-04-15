describe("Class Attribute",()=>{
it("Identify and click on Blue button",()=>{
    cy.visit("/classattr")
    cy.xpath("//button[contains(@class,'btn-primary')]").click();
    //cypress will handle the alert automatically
});
});