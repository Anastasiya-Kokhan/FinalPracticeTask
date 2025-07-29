import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('1.2 Search products', async ({ page }) => {
  const home = new HomePage(page);

  await home.goToHomePage();
  await home.searchProduct('iPhone');

  await expect(page.locator('[data-component-type="s-search-result"]').first()).toBeVisible();
});
