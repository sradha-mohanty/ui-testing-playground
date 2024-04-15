describe("Progress Bar Test", () => {
  it("Click on Start button wait for the progress to reach 75% and then clicks on Stop button", () => {
    cy.visit("progressbar");
    cy.get("#startButton").click();
    cy.get("#progressBar").contains("[aria-valuenow]","75",{timeout: 60000});
    cy.get("#stopButton").click();
    cy.get("#progressBar").contains('75%');
  });
});
