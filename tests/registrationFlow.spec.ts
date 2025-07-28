import { test, expect } from '@playwright/test';
import { SignInPage } from "../pages/SignInPage";

test.describe('Amazon Login Flow', () => {
    test('log in', async ({ page }) => {
        const signInPage = new SignInPage(page);
        await signInPage.navigate()
        await signInPage.register();


});
});

