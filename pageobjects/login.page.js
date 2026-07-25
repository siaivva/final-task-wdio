import Page from "./page";

class LoginPage extends Page {
    // CSS selectors
    get inputUsername() { return $('#user-name'); }
    get inputPassword() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    async login(username, password){
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    open() {
        return super.open('/');
    }
}

module.exports = new LoginPage();