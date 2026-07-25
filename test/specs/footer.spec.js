const LoginPage = require('../../pageobjects/login.page');
const FooterPage = require('../../pageobjects/footer.page');
const Logger = require('../../utils/logger');

describe('UC-2: Footer & Social Links', () => {

    beforeEach(async () => {
        // Given user is logged in and on a page with a footer
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory.html'));
    });

    it('Given user is on the Inventory Page, When they scroll to the footer, Then social links should exist', async () => {
        Logger.logInfo('Verifying footer social links');

        // When user scrolls to the footer
        await FooterPage.scrollToFooter();

        // Then Twitter, Facebook, and LinkedIn links should exist
        await expect(FooterPage.twitterLink).toExist();
        await expect(FooterPage.facebookLink).toExist();
        await expect(FooterPage.linkedinLink).toExist();

        Logger.logSuccess('All three social links confirmed present');
    });

    it('Given the footer is visible, When user checks each social link href, Then it should point to the correct platform', async () => {
        // Bonus: verify the actual target URL without needing to open a new tab
        const twitterHref = await FooterPage.twitterLink.getAttribute('href');
        const facebookHref = await FooterPage.facebookLink.getAttribute('href');
        const linkedinHref = await FooterPage.linkedinLink.getAttribute('href');

        await expect(twitterHref).toContain('twitter.com');
        await expect(facebookHref).toContain('facebook.com');
        await expect(linkedinHref).toContain('linkedin.com');

        Logger.logSuccess('All three social links verified');
    });

});