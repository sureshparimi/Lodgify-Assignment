import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { contactPage } from "../pageObjects/contact.page";

Given("I am on the contact page", () => {
  cy.visit('/contact.html');
});

Then("I should see * mark for mandatory fields", () => {
  contactPage.verifyPlaceHolder();
});

When("I input the name {string}", (nameStr) => {
  contactPage.inputName(nameStr);
});

When("I send the user contact details", () => {
  contactPage.clickSubmitButton();
});

Then(
  "I should see the text message in RED color displayed for the mandatory fields:",
  (table) => {
    table.hashes().forEach((fieldValidations) => {
      contactPage.validateInputs(
        fieldValidations.Field,
        fieldValidations.Validation
      );
    });
  }
);

When("I pick the arrival date as {string} and departure date as {string}", (fromDate,toDate) => {
  contactPage.selectDate(fromDate,toDate);
});

When("I pick the arrival date as {string}", (date) => {
  contactPage.selectDate(date);
});

When("I pick the departure date as {string}", (date) => {
  contactPage.selectDate(date);
});

Then(
  "I should see the selected dates display in arrival date and departure dates {string} {string}",
  (fromDate, toDate) => {
    contactPage.validateSelectedDates(fromDate, toDate);
  }
);

When(
  "I fill mandatory fields {string},{string},{string} with valid inputs",
  (name, phone, email) => {
    contactPage.inputName(name);
    contactPage.inputPhone(phone);
    contactPage.inputEmail(email);
  }
);

When("I add {string} into the comments message box", (comments) => {
  contactPage.inputComment(comments);
});

When("I submit the contact form", () => {
  contactPage.clickSubmitButton();
});

Then("I should see the success message {string}", (msgAfterCompletion) => {
  contactPage.validateMessage(msgAfterCompletion);
});
