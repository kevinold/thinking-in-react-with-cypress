// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// check this file using TypeScript if available
// @ts-check

describe("Thinking In React", function() {
  beforeEach(function() {
    cy.fixture("products").as("PRODUCTS");
    cy.visit("/");
  });

  context("Product Table", function() {
    it("renders the product table", function() {
      cy.get("[data-test='product-table']").should("be.visible");
    });

    it("renders complete list of products", function() {
      cy.get("[data-test='product-row']").should(
        "have.length",
        this.PRODUCTS.length
      );
    });

    it("renders all product categories", function() {
      ["Sporting Goods", "Electronics"].forEach(category =>
        cy
          .contains("[data-test='product-category']", category)
          .should("be.visible")
      );
    });

    it("renders a product row", function() {
      cy.get("[data-test='product-row']")
        .first()
        .should("contain", "Football")
        .and("contain", "$49.99");
    });

    it("renders an out of stock product", function() {
      cy.contains("[data-test='product-row'] span", "Basketball")
        .should("be.visible")
        .and("have.css", "color", "rgb(255, 0, 0)");
    });
  });

  context("SearchBar and Filter form", function() {
    it("searches for a product", function() {
      cy.get("[data-test='search']").type("Foot");
      cy.get("[data-test='product-row']").should("have.length", 1);
    });

    it("displays products in stock", function() {
      cy.get("form input[type=checkbox]").check();
      cy.get("[data-test='product-row']").should("have.length", 4);
    });
  });
});
