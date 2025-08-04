import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly continueButton: Locator;
  readonly passwordInput: Locator;
  readonly emailInput: Locator;
  readonly signInSubmit: Locator;
  readonly searchResult: Locator;
  readonly productItem: Locator;
  readonly productTitle: Locator;
  readonly addToCartButton: Locator;
  readonly cart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('text=Sign in')
    //this.accountList = page.locator('#nav-link-accountList');
    this.searchInput = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
    this.continueButton = page.locator('#continue input[type="submit"]');
    this.passwordInput = page.locator('#ap_password');
    this.emailInput = page.locator('input[type="email"]');
    this.signInSubmit = page.locator('#signInSubmit');
    this.searchResult = page.locator('h2.a-size-base.a-spacing-small.a-spacing-top-small.a-text-normal')
    this.productItem = page.getByText('Apple iPhone 14, 128GB, Midnight - Unlocked (Renewed)')
    this.productTitle = page.locator('#productTitle')
    this.addToCartButton = page.locator('#add-to-cart-button')
    this.cart = page.locator('.nav-cart-icon');
  }

  async goToHomePage() {
    await this.page.goto('https://www.amazon.com/s?k=headphones');
  }

  async clickSignIn() {
  await this.signInButton.first().click();
}

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.continueButton.click()
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password);
    await this.page.click('input#signInSubmit');
  }

  async searchProduct(product: string) {
    await this.searchInput.fill(product);
    await this.searchButton.click();
    await expect(this.searchResult).toContainText('results for')
  }
  async addProductToCart(page: Page) {
    await this.productItem.first().click()
    await expect (this.productTitle).toContainText('        Apple iPhone 14, 128GB, Midnight - Unlocked (Renewed)       ')
    await this.addToCartButton.first().click()
    await this.cart.click()
    await expect (page.locator('#sc-subtotal-label-activecart')).toContainText('Subtotal')
  }

}

