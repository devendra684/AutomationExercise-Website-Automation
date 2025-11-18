import HomePage from "../pageObjects/homePage";
import ProductsPage from "../pageObjects/productsPage";

describe("Product Search Functionality", () => {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();

  beforeEach(() => {
    cy.fixture('testData').as('testData');
    homePage.visitHomePage();
  });

  it("should search for a product and verify results appear", () => {
    cy.get('@testData').then((data) => {
      const searchKeyword = data.searchKeywords[0]; // "Dress"

      homePage.clickProductsLink();
      cy.url().should('include', '/products');
      productsPage.searchProduct(searchKeyword);
      productsPage.verifySearchResultsDisplayed();
      productsPage.verifyProductNameInResults(searchKeyword);
    });
  });

  it("should display 'no products found' for invalid search", () => {
    cy.get('@testData').then((data) => {
      const invalidKeyword = data.invalidSearchKeywords[0];

      homePage.clickProductsLink();
      productsPage.searchProduct(invalidKeyword);
      productsPage.verifyNoProductsFound();
    });
  });

  it("should display correct product count after search", () => {
    cy.get('@testData').then((data) => {
      const searchKeyword = data.searchKeywords[0]; // "Dress"

      homePage.clickProductsLink();
      productsPage.searchProduct(searchKeyword);
      productsPage.getProductCount().then((count) => {
        expect(count).to.be.greaterThan(0);
        cy.log(`Found ${count} products`);
      });
    });
  });
});
