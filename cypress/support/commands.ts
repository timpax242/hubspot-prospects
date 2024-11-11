/// <reference types="cypress" />

Cypress.Commands.add("login", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("/login");
    cy.get("input[id='email']").type(username);
    cy.get("input[id='password']").type(password);
    cy.contains("Log in").click();
    cy.contains("Prospective customers");
  });
});
