class PricingPage {
  uiSelectors = {
    currencySelect: () => cy.get(".price-currency-select"),
    billingFrequencyButton: (billingFor) =>
      cy.get("div.tabs-select").contains("li", billingFor),
    rentalInput: () => cy.get("#scroll-prop-plan"),
    starterPlanPrice: () =>
      cy.get(".price-item").contains("Starter").siblings(".plan-price"),
    professionalPlanPrice: () =>
      cy.get(".price-item").contains("Professional").siblings(".plan-price"),
    ultimatePlanPrice: () =>
      cy.get(".price-item").contains("Ultimate").siblings(".plan-price"),
  };

  selectBillingFrequence(billingFor) {
    this.uiSelectors
      .billingFrequencyButton(billingFor)
      .should("be.visible")
      .click();
    this.uiSelectors
      .billingFrequencyButton(billingFor)
      .should("have.class", "active");
  }
  selectCurrency(currency) {
    this.uiSelectors.currencySelect().should("be.visible").select(currency);
    this.uiSelectors
      .currencySelect()
      .find("option:selected")
      .should("have.text", currency);
  }
  slideRentalBar(noOfRentals) {
    this.uiSelectors
      .rentalInput()
      .focus()
      .clear()
      .type(noOfRentals)
      .should("have.value", noOfRentals);
  }
  validateStarterPrice(priceAmount) {
    this.uiSelectors.starterPlanPrice().should("have.text", priceAmount);
  }
  validateProfessionalPrice(priceAmount) {
    this.uiSelectors.professionalPlanPrice().should("have.text", priceAmount);
  }
  validateUltimatePrice(priceAmount) {
    this.uiSelectors.ultimatePlanPrice().should("have.text", priceAmount);
  }
}

export const pricingPage = new PricingPage();
