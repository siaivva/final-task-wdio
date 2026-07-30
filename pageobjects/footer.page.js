import Page from "./page";

class FooterPage extends Page {
    // CSS selectors
    get footer() { return $('.footer'); }
    get twitterLink() { return $('.social_twitter a'); }
    get facebookLink() { return $('.social_facebook a'); }

    // XPath selector
    get linkedinLink() { return $('//li[@class="social_linkedin"]/a'); }

    async scrollToFooter() {
        await this.footer.scrollIntoView();
    }
}

module.exports = new FooterPage();