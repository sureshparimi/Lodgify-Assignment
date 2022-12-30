// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("nextMonth", (month, date) => {
  cy.get("div.CalendarMonth_caption")
    .first()
    .then(($ele) => {
      var calmonth = $ele.text();
      if (calmonth === month) {
        cy.get("td.CalendarDay").contains(date).first().click({ force: true });
      } else {
        cy.get(
          "div.DayPickerNavigation_rightButton__horizontalDefault"
        ).click();
        cy.nextMonth(month, date);
      }
    });
});
