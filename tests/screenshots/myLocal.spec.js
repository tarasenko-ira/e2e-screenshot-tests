const { test, expect } = require('@playwright/test');

test('Перевірка змін сторінки за скриншотом', async ({ page }) => {
    await page.goto('http://localhost:3000/profile');
    expect(await page.screenshot()).toMatchSnapshot('screenshots/local-page/profile-page.png');
  });

  test('Порівняння скриншота елемента', async ({ page }) => {
    await page.goto('http://localhost:3000/profile');
    const element = await page.locator('img');
    expect(await element.screenshot()).toMatchSnapshot('screenshots/local-page/profile-page-element-h1.png');
  });
   