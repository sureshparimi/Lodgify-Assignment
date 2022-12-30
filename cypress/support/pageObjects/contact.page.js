class ContactPage {
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  uiSelectors = {
    contactInputs: (name) => cy.get('input[name="' + name + '"]'),
    fromDateInput: () => cy.get('input[placeholder="Arrival"]'),
    toDateInput: () => cy.get('input[placeholder="Departure"]'),
    commentInput: () => cy.get('textarea[placeholder="Comment"]'),
    errorDiv: () => cy.get(".ui.input.error"),
    submitButton: () => cy.get('button[type="submit"]').contains("Send"),
    successMessage: () => cy.get("div.message"),
  };

  inputName(value) {
    this.commonInputs("name", value);
  }

  inputPhone(value) {
    this.commonInputs("phone", value);
  }

  inputEmail(value) {
    this.commonInputs("email", value);
  }

  inputComment(value) {
    this.uiSelectors.commentInput().should("be.visible").clear().type(value);
  }

  commonInputs(field, value) {
    this.uiSelectors
      .contactInputs(field)
      .should("be.visible")
      .clear()
      .type(value);
  }

  verifyPlaceHolder() {
    this.uiSelectors
      .contactInputs("name")
      .invoke("attr", "placeholder")
      .then((placeHolder) => {
        expect(placeHolder).to.contain("*");
      });
    this.uiSelectors
      .contactInputs("phone")
      .invoke("attr", "placeholder")
      .then((placeHolder) => {
        expect(placeHolder).to.contain("*");
      });
    this.uiSelectors
      .contactInputs("phone")
      .invoke("attr", "placeholder")
      .then((placeHolder) => {
        expect(placeHolder).to.contain("*");
      });
  }

  clickSubmitButton() {
    this.uiSelectors.submitButton().should("be.visible").click();
  }

  validateInputs(field, validation) {
    this.uiSelectors.errorDiv().contains(validation).should("be.visible");
  }

  selectDate(fromDate, toDate) {
    this.uiSelectors
      .fromDateInput()
      .should("be.visible")
      .click({ force: true });
    var parsedDate = this.parseDateFromString(fromDate);
    var dMonth =
      this.monthNames[parsedDate.getMonth()] + " " + parsedDate.getFullYear();
    cy.nextMonth(dMonth, parsedDate.getDate());

    parsedDate = this.parseDateFromString(toDate);
    dMonth =
      this.monthNames[parsedDate.getMonth()] + " " + parsedDate.getFullYear();
    cy.nextMonth(dMonth, parsedDate.getDate());
  }

  validateSelectedDates(fromDate, toDate) {
    var parsedDate = this.parseDateFromString(fromDate);
    var month =
      parsedDate.getMonth() + 1 < 10
        ? "0" + (parsedDate.getMonth() + 1).toString()
        : parsedDate.getMonth() + 1;
    var date =
      parsedDate.getDate() + "/" + month + "/" + parsedDate.getFullYear();
    this.uiSelectors.fromDateInput().should("have.value", date);

    parsedDate = this.parseDateFromString(toDate);
    month =
      parsedDate.getMonth() + 1 < 10
        ? "0" + (parsedDate.getMonth() + 1).toString()
        : parsedDate.getMonth() + 1;
    date = parsedDate.getDate() + "/" + month + "/" + parsedDate.getFullYear();
    this.uiSelectors.toDateInput().should("have.value", date);
  }

  validateMessage(successMsg) {
    this.uiSelectors
      .successMessage()
      .should("be.visible")
      .should("have.text", successMsg);
  }

  parseDateFromString(date) {
    var dt = date.split(" ");
    var parsedDate = new Date(
      Date.parse(
        dt[1] + " " + dt[0].substring(0, 3) + " " + new Date().getFullYear()
      )
    );
    var currentMonth = new Date().getMonth();
    var currentDate = new Date().getDate();
    if (currentMonth > parsedDate.getMonth()) {
      parsedDate.setFullYear(parsedDate.getFullYear() + 1);
    }
    if (currentMonth === parsedDate.getFullYear()) {
      if (currentDate > parsedDate.getDate()) {
        parsedDate.setFullYear(parsedDate.getFullYear() + 1);
      }
    }
    var month =
      parsedDate.getMonth() + 1 < 10
        ? "0" + (parsedDate.getMonth() + 1).toString()
        : parsedDate.getMonth() + 1;
    //return parsedDate.getDate() + "/" + month + "/" + parsedDate.getFullYear();
    return parsedDate;
  }
}
export const contactPage = new ContactPage();
