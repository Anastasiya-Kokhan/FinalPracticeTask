import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test.describe('validate that products are added', () => {
  test('1.3 Add product to cart', async ({ page }) => {
    const home = new HomePage(page);
    const productPage = new ProductPage(page);

    await home.goToHomePage();
    await home.searchProduct('iPhone');
    await productPage.addFirstProductToCart();

    await expect(page.locator('#nav-cart-count')).toHaveText('1');
  });

  test('1.4 Added product is displayed in the cart', async ({ page }) => {
    const cart = new CartPage(page);

    await cart.goToCart();
    await expect(await cart.verifyProductInCart()).toBeTruthy();
  });
})
