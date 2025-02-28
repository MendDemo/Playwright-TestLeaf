import { test as base,expect } from '@playwright/test';
import { attachFixWithAI } from './callAItohelp.spec'


export const test = base.extend<{ fixWithAI: void }>({
  fixWithAI: [async ({ page }, use, testInfo) => {
    await use();
    await attachFixWithAI(page, testInfo);
  }, { scope: 'test', auto: true }],
});


test.describe.serial("Standard contribution E2E Validation", {
    tag: '@AI'
}, () => {


    //NB validation
    test("Validate sample test ", { tag: ['@AI'] }, async ({ page },testInfo) => {
        testInfo.annotations.push({ type: 'AI', description: 'Validate AI' });
        page.setDefaultTimeout(1000);
        await page.goto('https://playwright.dev');
        await page.getByRole('link', { name: 'Get started' }).click();
        await expect(page.getByRole('link', { name: 'Installation' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Installation' })).toBeVisible();
        await expect (page.locator("//h1[@id='introduction']")).toBeVisible();
        
        await expect(page.getByRole('link', { name: 'How how to install Playwright' })).toBeVisible();
        await expect(page.getByRole('button', { name: ' run the example test' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'You will learn tell' })).toBeVisible();
        
        
    }
        );

});

test.describe.serial("Standard contribution E2E Validation", {
  tag: '@AI-2'
}, () => {


  //NB validation
  test("Validate sample test -2 ", { tag: ['@AI'] }, async ({ page },testInfo) => {
      testInfo.annotations.push({ type: 'AI', description: 'Validate AI' });
      page.setDefaultTimeout(1000);
      await page.goto('https://playwright.dev');
      await page.getByRole('link', { name: 'Get started' }).click();
      await expect(page.getByRole('button', { name: 'Installation' })).toBeVisible();
      
  }
      );

});
