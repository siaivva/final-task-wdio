# Final task

**Project Description**

This project contains end-to-end automated tests for the Product Details and Footer flows of
https://www.saucedemo.com/

The tests cover dynamic content verification and footer link validation, using:
- Test automation tool - WebdriverIO
- Test framework - Mocha (BDD-style describe/it, structured as Given-When-Then)
- Pattern - Page Object Model (POM)
- Locators - Mix of CSS and XPath selectors
- Browsers - Edge, Firefox (run in parallel)
- Logger - Custom logger tracking product under verification
- Reporter - JUnit (XML reports in ./results)

__Test Scenarios__

_UC-1 — Product Details Verification_
- Login with standard_user
- Click on a product title (parametrized, e.g. "Sauce Labs Fleece Jacket") to go to the Product Details Page
- Validate that the Price and Description on the Details Page match the data from the Inventory Page
- Add the item to the cart from the Details Page

_UC-2 — Footer & Social Links_
- Scroll to the footer
- Verify that the Twitter, Facebook, and LinkedIn links exist
- (Optional/Bonus) Verify that clicking a social link opens the correct URL in a new tab/window

**Project Structure**

```sh
project/
│
├── test/
│   └── specs/
│       ├── productDetails.spec.js    # UC-1 test suite
│       └── footer.spec.js            # UC-2 test suite
│
├── pageobjects/
│   ├── login.page.js                 # Page Object for Login page
│   ├── inventory.page.js             # Page Object for Inventory page
│   ├── productDetails.page.js        # Page Object for Product Details page
│   ├── footer.page.js                # Page Object for Footer
│   └── page.js                       # Base Page class (shared open() method)
│
├── utils/
│   └── logger.js                     # Custom logger for tracking verified products
│
├── results/                          # JUnit XML reports (generated after test run, gitignored)
├── wdio.conf.js                      # WebdriverIO config (Edge + Firefox parallel)
├── package.json
└── README.md
```

**How to Run**

1. npm install
2. npx wdio run wdio.conf.js

This runs both Edge and Firefox capabilities in parallel automatically.

**Test Reports**

After running the tests, JUnit XML reports are generated automatically in the `./results` directory
(one file per browser/spec combination — Edge and Firefox run in parallel). This directory is
gitignored since reports are regenerated on each run.
