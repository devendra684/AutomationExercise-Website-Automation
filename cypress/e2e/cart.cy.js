import HomePage from "../pageObjects/homePage";
import ProductsPage from "../pageObjects/productsPage";
import CartPage from "../pageObjects/cartPage";

describe("Shopping Cart Functionality", () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    cy.fixture('testData').as('testData');
    homePage.visitHomePage();
  });

  it("should add product to cart and verify in cart page", () => {
    cy.get('@testData').then((data) => {
      const searchKeyword = data.searchKeywords[0]; // "Dress"

      homePage.clickProductsLink();
      productsPage.searchProduct(searchKeyword);
      productsPage.verifySearchResultsDisplayed();

      productsPage.getFirstProductName().then((productName) => {
        cy.log(`Adding Product: ${productName}`);
        productsPage.addFirstProductToCart();
        productsPage.clickViewCart();
        cartPage.verifyProductInCart(productName);

        cartPage.getCartTotal().then((total) => {
          expect(total).to.not.be.empty;
          cy.log(`Cart Total: ${total}`);
        });

        cartPage.verifyProductCountInCart(1);
      });
    });
  });

  it("should display cart total correctly", () => {
    cy.get('@testData').then((data) => {
      const searchKeyword = data.searchKeywords[0]; // "Dress"

      homePage.clickProductsLink();
      productsPage.searchProduct(searchKeyword);

      productsPage.getFirstProductPrice().then((productPrice) => {
        productsPage.addFirstProductToCart();
        productsPage.clickViewCart();

        cartPage.getCartProductPrice().then((cartPrice) => {
          expect(cartPrice).to.equal(productPrice);
          cy.log(`Product Price: ${productPrice}, Cart Price: ${cartPrice}`);
        });

        cartPage.getCartTotal().then((total) => {
          expect(total).to.equal(productPrice);
          cy.log(`Cart Total: ${total}`);
        });
      });
    });
  });


});
