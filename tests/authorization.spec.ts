import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LogInPage';

test('1.1 Successful authorization', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);

    await home.goToHomePage();

    await login.login('kokhannastya@gmail.com', 'z8T2B;"^c<"RSY~');

    await expect(page.locator('#nav-link-accountList-nav-line-1')).toContainText('Hello');
});

