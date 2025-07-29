import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly accountList: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountList = page.locator('#nav-link-accountList');
    this.searchInput = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
  }

  async goToHomePage() {
    await this.page.goto('https://www.amazon.com/');
  }

  async clickSignIn() {
  const signIn = this.page.locator('text=Sign in');
  await signIn.first().click();
}


  async searchProduct(product: string) {
    await this.searchInput.fill(product);
    await this.searchButton.click();
  }
}

