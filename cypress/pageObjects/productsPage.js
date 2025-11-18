import BasePage from "./basePage";

class ProductsPage extends BasePage {
  // Locators using reliable selectors
  searchInput = '#search_product';
  searchButton = '#submit_search';
  productsList = '.product-image-wrapper';
  productName = '.productinfo p';
  productPrice = '.productinfo h2';
  addToCartBtn = 'a.add-to-cart';
  viewCartBtn = 'a[href="/view_cart"]';
  continueShoppingBtn = '.btn-continue';
  noProductsFound = '.text-center';

  visitProductsPage() {
    this.visit("/products");
  }

  searchProduct(productName) {
    this.typeText(this.searchInput, productName);
    this.clickElement(this.searchButton);
  }

  verifySearchResultsDisplayed() {
    this.getElementCount(this.productsList).should("be.greaterThan", 0);
  }

  verifyProductNameInResults(productName) {
    this.verifyElementContainsText(this.productName, productName);
  }

  getProductCount() {
    return this.getElementCount(this.productsList);
  }

  addFirstProductToCart() {
    this.clickElementByText('a', 'Add to cart', 0);
    this.verifyElementByContains('Continue Shopping', 'be.visible');
  }

  addProductToCartByIndex(index) {
    this.clickElementAtIndex(this.addToCartBtn, index);
    this.verifyElementByContains('Continue Shopping', 'be.visible');
  }

  clickViewCart() {
    this.clickElementByText('a', 'View Cart');
  }

  clickContinueShopping() {
    this.clickElementByText('button', 'Continue Shopping');
  }

  getFirstProductName() {
    return this.getFirstText(this.productName);
  }

  getFirstProductPrice() {
    return this.getFirstTextTrimmed(this.productPrice);
  }

  verifyNoProductsFound() {
    this.verifyElementLength(this.productsList, 0);
  }

}

export default ProductsPage;
