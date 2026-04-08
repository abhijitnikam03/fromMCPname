import { test, expect } from '@playwright/test';

test('Purchase iPhone X', async ({ page }) => {
  // 1. Open site "https://rahulshettyacademy.com/loginpagePractise/"
  await page.goto('/loginpagePractise/');

  // 2. Login with valid credentials
  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('Learning@830$3mK2');
  await page.locator('input[value="user"]').check(); // Select User role
  await page.locator('#terms').check(); // Agree to terms and conditions
  await page.locator('#signInBtn').click();

  // Wait for navigation
  await page.waitForLoadState('networkidle');

  // 3. Select product "iphone X"
  // Find the product card for iphone X and click the Add button
  await page.locator('.card').filter({ hasText: 'iphone X' }).locator('button').click();

  // 4. Add product to cart (already done by clicking Add)
  // Navigate to cart
  await page.locator('a').filter({ hasText: 'Checkout' }).click();

  // 5. Add user details on checkout
  // Fill name
  await page.locator('//input[@name="name"]').fill('John Doe');
  // Fill email
  await page.locator('//input[@name="email"]').fill('john@example.com');
  // Fill country
  await page.locator('#country').fill('India');
  // Select India from dropdown
  await page.locator('.suggestions li').filter({ hasText: 'India' }).click();
  // Click Purchase
  await page.locator('.btn-success').click();

  // Assert success message
  await expect(page.locator('.alert-success')).toBeVisible();
});