import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await this.page.fill('input[type="email"]', email);
    await this.page.click('input#continue');
    await this.page.fill('input[type="password"]', password);
    await this.page.click('input#signInSubmit');
  }
}
