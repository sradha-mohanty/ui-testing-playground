describe("Shadow DOM",()=>{
    it("Test to compare the value from the clipboard with the input field",()=>{
        
        cy.visit("shadowdom");
        cy.get("guid-generator").shadow().find("#buttonGenerate").click();      
        cy.get("guid-generator").shadow().find("#buttonCopy").focus().click();
        const copied_val=cy.get("guid-generator").shadow().find("#editField").invoke("val");
        cy.window().then((win) => {
            win.navigator.clipboard.readText().then((clip_text) => {
                copied_val.should("equal",clip_text);
            });
          });
        });
    });
        
       
