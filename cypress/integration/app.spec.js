// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// check this file using TypeScript if available
// @ts-check

describe("Thinking In React", function() {
  beforeEach(function() {
    cy.visit("/");
  });

  context("Product Table", function() {
    it("renders the product table", function() {
      cy.get("[data-cy='product-table']").should("be.visible");
    });

    it("renders complete list of products", function() {
      cy.get("[data-cy='product-row']").should("have.length", 6);
    });

    it("renders a product category", function() {
      cy.get("[data-cy='product-category']")
        .first()
        .should("contain", "Sporting Goods");
    });

    it("renders a product row", function() {
      cy.get("[data-cy='product-row']")
        .first()
        .should("contain", "Football")
        .and("contain", "$49.99");
    });

    it("renders an out of stock product", function() {
      cy.get("[data-cy='product-row']")
        .eq(2)
        .get("span")
        .should("contain", "Basketball")
        .and("have.css", "color", "rgb(255, 0, 0)");
    });
  });

  context("SearchBar and Filter form", function() {
    it("renders a search box", function() {
      cy.get("[data-cy='search']");
    });

    it("renders a checkbox filter", function() {
      cy.get("form input[type=checkbox]");
    });

    it("searches for a product", function() {
      cy.get("[data-cy='search']").type("Foot");
      cy.get("[data-cy='product-row']").should("have.length", 1);
    });

    it("displays products in stock", function() {
      cy.get("form input[type=checkbox]").check();
      cy.get("[data-cy='product-row']").should("have.length", 4);
    });
  });
});
