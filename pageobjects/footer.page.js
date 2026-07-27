const Page = require('./page');

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

    async socialLinksExist() {
        return {
            twitter: await this.twitterLink.isExisting(),
            facebook: await this.facebookLink.isExisting(),
            linkedin: await this.linkedinLink.isExisting()
        };
    }
}

module.exports = new FooterPage();