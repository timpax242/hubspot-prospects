/// <reference types="cypress" />

describe("submit prospect form", () => {
  beforeEach(() => {
    cy.login(Cypress.env("test_username"), Cypress.env("test_password"));
    cy.visit("/prospects/add");
  });

  it("should show error if company field is left empty", () => {
    cy.contains("Create prospect").click();
    cy.contains("Missing Fields. Failed to create a new prospect.").should(
      "be.visible"
    );
  });

  it("should not show error when submit successful with mock", () => {
    cy.intercept("POST", "http://localhost:3000/prospects/add", {
      fixture: "add-prospect.json",
    });
    cy.get("input[id='company']").type("Test Company");
    cy.contains("Create prospect").click();
    cy.contains("Missing Fields. Failed to create a new prospect.").should(
      "not.exist"
    );
  });
});
