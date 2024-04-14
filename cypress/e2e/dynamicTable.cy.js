describe("Dynamic Table",()=>{
    it("Identify the CPU Load and compare it with yellow label",()=>{
        cy.visit("dynamictable");
        cy.contains("[role='columnheader']", "CPU").invoke("index").then((i) => {
            let indexOfCPU=i;
            const resultLabel = cy.get(".bg-warning");
            cy.contains("[role='cell']",'Chrome').parent().within(()=>{
                cy.get("[role='cell']").eq(indexOfCPU).invoke("text").then((txt)=>{
                    resultLabel.should("have.text","Chrome CPU: "+txt);
                });
            });
          });
    });
    });