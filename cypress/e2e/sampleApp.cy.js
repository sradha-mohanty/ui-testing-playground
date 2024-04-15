describe("Sample App",()=>{
    let data;
it("Fill and submit the form",()=>{
cy.fixture("sampleApp_TestData.json").then((data)=>{
cy.visit("sampleapp");
cy.get(".form-control[name=UserName]").type(data.username);
cy.get(".form-control[name=Password]").type(data.password);
cy.get("#login").click();
cy.get("#loginstatus").should("contain",data.username)
});
});
it("Fill and submit the form without Name feild and check the message",()=>{
    cy.fixture("sampleApp_TestData.json").then((data)=>{
    cy.visit("sampleapp");
    cy.get(".form-control[name=Password]").type(data.password);
    cy.get("#login").click();
    cy.get("#loginstatus").should("have.text",data.errormsg)
    });
    });
});