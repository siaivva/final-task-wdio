import Page from "./page";

class InventoryPage extends Page {
    // CSS selectors
    get inventoryItems() { return $$('.inventory_item'); }

    // XPath selector: find a specific product card by its title text
    getProductByName(name) {
        return $(`//div[@class="inventory_item"][.//div[text()="${name}"]]`);
    }

    // Within a product card, price/title (CSS, scoped from the item element)
    async getProductData(name) {
        const item = await this.getProductByName(name);
        const title = await item.$('.inventory_item_name');
        const price = await item.$('.inventory_item_price');
        const description = await item.$('.inventory_item_desc');

        return {
            title: (await title.getText()).trim(),
            price: (await price.getText()).trim(),
            description: (await description.getText()).trim()
        };
    }

    async openProduct(name) {
        const item = await this.getProductByName(name);
        const titleLink = await item.$('.inventory_item_name');
        await titleLink.click();
    }
}

module.exports = new InventoryPage();
