import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I spin up a local server", () => {
  cy.exec("npm run dev-server", { timeout: 5000, failOnNonZeroExit: false });
});

Given("I navigate to Lodgify application", () => {
  cy.visit(Cypress.config().baseUrl);
});
