class BasePage {
  visit(url = "/") {
    cy.visit(url);
  }

  clickElement(locator) {
    cy.get(locator).click();
  }

  clickElementByText(tag, text, index = 0) {
    cy.get(`${tag}:contains("${text}")`).eq(index).click();
  }

  typeText(locator, text) {
    cy.get(locator).type(text);
  }

  getText(locator) {
    return cy.get(locator).invoke("text");
  }

  getElements(locator) {
    return cy.get(locator);
  }

  getElementCount(locator) {
    return cy.get(locator).then(($els) => $els.length);
  }

  getFirstText(locator) {
    return cy.get(locator).first().invoke('text');
  }

  getFirstTextTrimmed(locator) {
    return cy.get(locator).first().invoke('text').then(text => text.trim());
  }

  getTextAtIndex(locator, index = 0) {
    return cy.get(locator).eq(index).invoke('text');
  }

  getTextTrimmedAtIndex(locator, index = 0) {
    return cy.get(locator).eq(index).invoke('text').then(text => text.trim());
  }

  clickElementAtIndex(locator, index = 0) {
    cy.get(locator).eq(index).click();
  }

  updateInputAtIndex(locator, value, index = 0) {
    cy.get(locator).eq(index).clear().type(value);
  }

  waitForElement(locator, timeout = 10000) {
    cy.get(locator, { timeout }).should("exist");
  }

  clearInput(locator) {
    cy.get(locator).clear();
  }

  verifyElementContainsText(locator, text) {
    cy.get(locator).should("contain", text);
  }

  verifyElementByContains(text, assertType = 'exist') {
    cy.contains(text).should(assertType);
  }

  verifyElementLength(locator, num) {
    cy.get(locator).should('have.length', num);
  }
}

export default BasePage;
