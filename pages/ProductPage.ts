import { Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addFirstProductToCart() {
    await this.page.locator('[data-component-type="s-search-result"]').first().click();
    await this.page.waitForSelector('#add-to-cart-button');
    await this.page.click('#add-to-cart-button');
  }
}
