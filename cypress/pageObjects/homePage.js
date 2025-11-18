import BasePage from "./basePage";

class HomePage extends BasePage {
  // Locators - ID and attribute selectors are most stable
  productsLink = 'a[href="/products"]';
  searchInput = '#search_product';
  searchButton = '#submit_search';
  cartLink = 'a[href="/view_cart"]';
  testCasesLink = 'a[href="/test_cases"]';

  visitHomePage() {
    this.visit();
  }

  clickProductsLink() {
    this.clickElement(this.productsLink);
  }

  searchProduct(productName) {
    this.typeText(this.searchInput, productName);
    this.clickElement(this.searchButton);
  }

  verifyHomePageLoaded() {
    this.verifyElementVisible(this.productsLink);
  }

  clickCart() {
    this.clickElement(this.cartLink);
  }

  clickTestCases() {
    this.clickElement(this.testCasesLink);
  }
}

export default HomePage;
