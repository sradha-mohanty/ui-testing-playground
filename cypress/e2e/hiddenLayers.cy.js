describe("Hidden Button",()=>{
it("Check the button should not be clicked twice",()=>{
cy.visit("hiddenlayers");
cy.get("#greenButton").click();
cy.get("#blueButton").click();
});
});