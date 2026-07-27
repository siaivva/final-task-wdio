const LoginPage = require('../../pageobjects/login.page');
const InventoryPage = require('../../pageobjects/inventory.page');
const ProductDetailsPage = require('../../pageobjects/productDetails.page');
const Logger = require('../../utils/logger');

describe('UC-1: Product Details Verification', () => {

    const productName = 'Sauce Labs Fleece Jacket'; // parametrized product name

    beforeEach(async () => {
        // Given user is logged in as standard_user
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory.html'));
    });

    it(`Given user is on Inventory Page, When they open "${productName}", Then Details Page price/description should match Inventory Page`, async () => {
        Logger.logProductCheck(productName);

        // Get data from Inventory Page
        const inventoryData = await InventoryPage.getProductData(productName);

        // When user clicks the product title
        await InventoryPage.openProduct(productName);

        // Then Details Page should be shown with matching data
        const detailsData = await ProductDetailsPage.getDetails();

        await expect(detailsData.title).toBe(inventoryData.title);
        await expect(detailsData.price).toBe(inventoryData.price);
        await expect(detailsData.description).toBe(inventoryData.description);

        Logger.logComparison('Price', inventoryData.price, detailsData.price);
        Logger.logComparison('Description', inventoryData.description, detailsData.description);

        // And user adds the item to the cart from the Details Page
        await ProductDetailsPage.addToCart();

        // Then cart badge should reflect the addition
        const cartBadge = await $('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('1');

        Logger.logSuccess(`"${productName}" added to cart successfully`);
    });

});