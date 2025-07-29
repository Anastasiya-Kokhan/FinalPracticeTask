import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToCart() {
    await this.page.click('#nav-cart');
  }

  async verifyProductInCart() {
    return this.page.locator('.sc-list-item').first().isVisible();
  }
}
