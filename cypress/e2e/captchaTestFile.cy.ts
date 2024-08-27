describe("Contact Form", () => {
  beforeEach(() => {
    /* Ignoring specific uncaught exceptions */
    Cypress.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined")) {
        /* Ignoring the error to prevent Cypress from failing */
        return false;
      }
      return true;
    });
  });

  it("should not allow form submission without solving the CAPTCHA", () => {
    /* Visit the contact page */
    cy.visit("https://lastcallmedia.com/contact");

    /* Fill out the form (without solving the CAPTCHA) */

    cy.get('input[name="field_name[0][value]"]').type("testuser");
    cy.get('input[name="mail"]').type("testuser@example.com");
    cy.get('textarea[name="message[0][value]"]').type(
      "This is a test message."
    );

    /* Attempt to submit the form */

    cy.get('input[type="submit"]').first().click();

    /* Check that the form was not successfully submitted*/

    cy.contains(
      "The answer you entered for the CAPTCHA was not correct."
    ).should("exist");

    /* Ensure that the form fields still contain the entered data*/

    cy.get('input[name="field_name[0][value]"]').should(
      "have.value",
      "testuser"
    );
    cy.get('input[name="mail"]').should("have.value", "testuser@example.com");
    cy.get('textarea[name="message[0][value]"]').should(
      "have.value",
      "This is a test message."
    );
  });
});
