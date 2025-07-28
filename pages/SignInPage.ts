import { Locator, Page, expect} from '@playwright/test'

export class SignInPage {
    readonly page: Page;

    readonly accountAndLists: Locator;
    readonly signInButton: Locator;
    readonly emailInput: Locator;
    readonly continueButton: Locator;
    readonly passwordInput: Locator;
    readonly signInSubmit: Locator;
    readonly searchInput: Locator;
    readonly searchIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountAndLists = page.locator('.nav-line-2 ');
        this.signInButton = page.getByText('Sign in');
        this.emailInput = page.locator('#ap_email_login');
        this.continueButton = page.locator('.a-button-input');
        this.passwordInput = page.locator('#ap_password');
        this.signInSubmit = page.locator('#signInSubmit');
        this.searchInput = page.getByPlaceholder('Search Amazon');
        this.searchIcon = page.locator('#nav-search-submit-button')

    }
    async navigate () {
        await this.page.goto('https://www.amazon.com');
    }
    async register () {
        await this.accountAndLists.hover();
        await this.signInButton.click();
        await this.emailInput.fill('kokhannastya@gmail.com');
        await this.continueButton.click();
        await this.passwordInput.fill('z8T2B;"^c<"RSY~');
        await this.signInSubmit.click();
    }
    async productsSearch () {
        await this.searchInput.fill('iPhone');
        await this.searchIcon.click();
        await expect 

    }

}

