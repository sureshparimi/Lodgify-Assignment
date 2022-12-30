import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { pricingPage } from "../pageObjects/pricing.page";

Given("I am on the pricing plan page", () => {
  cy.visit("/pricing.html");
});

When("I set the billing frequency as {string}", (billingFor) => {
  pricingPage.selectBillingFrequence(billingFor);
});

When("I set the currency as {string}", (currency) => {
  pricingPage.selectCurrency(currency);
});

When("I slide to {int}", (noOfRentals) => {
  pricingPage.slideRentalBar(noOfRentals);
});

Then(
  "I should see pricing plans display the values for {string}, {string}, {string}",
  (starterPricing, professionalPricing, ultimatePricing) => {
    pricingPage.validateStarterPrice(starterPricing);
    pricingPage.validateProfessionalPrice(professionalPricing);
    pricingPage.validateUltimatePrice(ultimatePricing);
  }
);
