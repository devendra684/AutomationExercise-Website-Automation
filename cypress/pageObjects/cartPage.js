import BasePage from "./basePage";

class CartPage extends BasePage {
  // Locators
  cartProductName = 'a[href*="/product/"]';
  cartProductPrice = 'table tbody tr td:nth-child(3)';
  cartQuantity = 'input[name="quantity"]';
  cartTotal = '.cart_total_price';
  removeFromCartBtn = 'a.cart_quantity_delete';
  continueShopping = 'a[href="/products"]';

  visitCartPage() {
    this.visit("/view_cart");
  }

  verifyProductInCart(productName) {
    this.verifyElementByContains(productName);
  }

  getCartProductNames() {
    return this.getText(this.cartProductName);
  }

  getCartProductPrice() {
    return this.getFirstTextTrimmed(this.cartProductPrice);
  }

  getCartProductPriceByIndex(index) {
    return this.getTextTrimmedAtIndex(this.cartProductPrice, index);
  }

  getCartTotal() {
    return this.getFirstTextTrimmed(this.cartTotal);
  }

  verifyCartTotal(expectedTotal) {
    this.verifyElementContainsText(this.cartTotal, expectedTotal);
  }

  verifyCartEmpty() {
    this.verifyElementByContains('Cart is Empty');
  }

  verifyCartNotEmpty() {
    this.getElementCount(this.cartProductName).should('be.greaterThan', 0);
  }

  verifyProductCountInCart(count) {
    this.getElementCount('.cart_description').should('eq', count);
  }

  clickProceedToCheckout() {
    this.clickElementByText('a', 'Proceed To Checkout');
  }

  removeProductFromCart(index = 0) {
    this.clickElementAtIndex(this.removeFromCartBtn, index);
  }

  updateQuantity(quantity, productIndex = 0) {
    this.updateInputAtIndex(this.cartQuantity, quantity, productIndex);
  }

  clickContinueShopping() {
    this.clickElement(this.continueShopping);
  }

  // Helper method to get all cart items
  getAllCartItems() {
    return this.getElementCount('table tbody tr');
  }

  // Verify specific product details
  verifyProductDetails(productName, expectedPrice) {
    this.verifyElementContainsText(this.cartProductName, productName);
    this.verifyElementContainsText(this.cartProductPrice, expectedPrice);
  }
}

export default CartPage;
