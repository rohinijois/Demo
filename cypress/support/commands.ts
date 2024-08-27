///<reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password, { log: false });
  cy.get('button[type="submit"]').click();
});

// -- This is a child command --
Cypress.Commands.add("drag", { prevSubject: "element" }, (subject, options) => {
  cy.wrap(subject).trigger("mousedown", { which: 1 });
  cy.get(options.target).trigger("mousemove").trigger("mouseup");
});

// -- This is a dual command --
Cypress.Commands.add(
  "dismiss",
  { prevSubject: "optional" },
  (subject, options) => {
    cy.wrap(subject).find(".close").click();
  }
);

// -- This will overwrite an existing command --
Cypress.Commands.overwrite("visit", (originalFn, url, options) => {
  if (url.includes("admin")) {
    options.auth = {
      username: "admin",
      password: "admin123",
    };
  }
  return originalFn(url, options);
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      drag(
        subject: string,
        options?: Partial<{ target: string }>
      ): Chainable<Element>;
      dismiss(
        subject?: any,
        options?: Partial<{ delay: number }>
      ): Chainable<Element>;
      visit(
        originalFn: CommandOriginalFn,
        url: string,
        options?: Partial<VisitOptions>
      ): Chainable<Element>;
    }
  }
}
