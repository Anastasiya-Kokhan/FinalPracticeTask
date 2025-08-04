import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

let home: HomePage;

test.describe('Amazon e2e flow validation', () => {
  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    await home.goToHomePage();
    await home.clickSignIn();
    await home.login('kokhannastya@gmail.com', 'z8T2B4gftD6');
    await expect(page.locator('#nav-link-accountList-nav-line-1')).toContainText('Hello');
  });

  test('1.1 Successful authorization', async ({ page }) => {
    // already logged in by beforeEach
    await expect(page.locator('#nav-link-accountList-nav-line-1')).toContainText('Hello');
  });

  test('1.2 Search the products', async ({ page }) => {
    await home.searchProduct('iPhone');
  });

  test('1.3 Add a product to cart', async ({ page }) => {
    await home.searchProduct('iPhone');
    await home.addProductToCart(page);
  });
});
