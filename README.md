# AutomationExercise Website Automation

This automation project implements specific business scenarios for the [AutomationExercise](https://www.automationexercise.com/) website using Cypress framework with complete Page Object Model (POM) structure.

## Requirements & Deliverables
    
### ✅ Requirements Fulfilled:
- **Framework**: Cypress automation framework
- **Scenario 1**: Open homepage → Search for a product → Verify results appear
- **Scenario 2**: Add a product to cart → Go to cart page → Assert product name and price
- **Assertions**: Product search returns expected results & cart reflects correct item and total
- **Organization**: Code structured with Page Object Model (POM) pattern

### 📦 Deliverables:
- **Automation Script**: Complete test suite in Cypress POM structure
- **Documentation**: This README with setup and execution instructions

## Features Tested

### Test Scenarios

1. **Product Search Validation**
   - Navigate to homepage
   - Search for a product using the search functionality
   - Verify that search results appear correctly
   - Assert that the searched product appears in the results

2. **Add to Cart and Verification**
   - Navigate to homepage
   - Search for a product or navigate to products page
   - Add a specific product to the cart
   - Navigate to the cart page
   - Assert that:
     - Product name matches the added product
     - Product price is displayed correctly
     - Cart total reflects the correct amount

## Project Structure

```
cypress-automation-project/
├── cypress/
│   ├── e2e/
│   │   ├── search.cy.js
│   │   └── cart.cy.js
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── fixtures/
│   │   └── testData.json
│   └── pageObjects/
│       ├── basePage.js
│       ├── homePage.js
│       ├── productsPage.js
│       └── cartPage.js
├── cypress.config.js
├── package.json
├── README.md
└── .gitignore
```

## Setup

1. Clone or download the project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run all tests:
```bash
npm run cypress:run
```

### Run specific test file:
```bash
# Search tests
npm run cypress:run:search

# Cart tests
npm run cypress:run:cart
```

### Run tests with browser UI (interactive mode):
```bash
npm run cypress:open
```

### Run tests in headed mode:
```bash
npm run cypress:run:headed
```

### Run tests with specific browser:
```bash
npx cypress run --browser chrome
```

## Page Object Model

The project follows Page Object Model design pattern:
- **BasePage**: Contains common methods and utilities
- **HomePage**: Handles homepage interactions
- **ProductsPage**: Handles product search and listing
- **CartPage**: Handles cart operations and verifications

## Test Data

Test data is stored in `cypress/fixtures/testData.json` and loaded using `cy.fixture()` for data-driven test parameterization:

```json
{
  "searchKeywords": ["Dress", "T-shirt", "Jeans"],
  "invalidSearchKeywords": ["abc*#@", "xyz123"]
}
```

## Assertions

Tests include various assertions to verify:
- Search results display correctly
- Product names match search criteria
- Cart contents reflect added items
- Correct pricing information

## Browser Support

Tests run on multiple browsers:
- Electron (default)
- Chrome
- Firefox
- Edge

## Tools Used

- **Cypress**: v15.6.0 - Modern E2E testing framework (equivalent to Selenium)
- **Node.js**: JavaScript runtime environment
- **npm**: Package manager for dependency management

## Reporting

Cypress auto-generates screenshots and videos on test failures in the `cypress/screenshots` and `cypress/videos` directories.
