
const { test, expect } = require('@playwright/test');

test('Перевірка форми входу кастом', async ({ page }) => {
    await page.goto('https://hdrezka.ag/');
    await page.click('.b-tophead__login');
    await page.fill('#login_name', 'irochka.tarasenko2004@gmail.com');
    await page.fill('#login_password', 'password');
    await page.click('.login_button');
    await expect(page.locator('#login-popup-errors')).toBeVisible();
  });
  
test('Перевірка локальної сторінки', async ({ page }) => {
    await page.goto('http://localhost:3000/profile');
    await expect(page.locator('#profile-header')).toBeVisible();
  });
  
  test('ОККТ', async ({ page }) => {
    await page.goto('https://okkt.od.ua/');
    await page.click('.fusion-sb-toggle');
    await expect(page.locator('.fusion-sliding-bar-content-wrapper')).toBeVisible();
  });
  