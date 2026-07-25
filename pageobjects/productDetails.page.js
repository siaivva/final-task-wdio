import Page from "./page";

class ProductDetailsPage extends Page{
    //CSS selectors
    get title() { return $('.inventory_details_name'); }
    get description() { return $('.inventory_details_desc'); }
    get price() { return $('.inventory_details_price'); }

    //XPath selector
    get btnAddToCart() { return $('//button[starts-with(text(),"Add to cart")]'); }

    async getDetails() {
        return {
            title: (await this.title.getText()).trim(),
            description: (await this.description.getText()).trim(),
            price: (await this.price.getText()).trim()
        };
    }

    async addToCart() {
        await this.btnAddToCart.click();
    }
}

module.exports = new ProductDetailsPage();