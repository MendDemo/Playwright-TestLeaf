import { test, expect } from "@playwright/test";


test('Assert a text box', async({page})=>{


    page.goto("https://leafground.com/waits.xhtml");
    /**
     * Multiple occurrances of locators
     * first()
     * last()
     * nth()
     * filter()
     * 
     * 
     * Locator chainingcd
     */
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});


    await cardToSelect.click();
    const hiddenButton = cardToSelect.getByRole("button").filter({hasText:"I am here"});
    await expect(hiddenButton).toBeVisible({timeout:10000});

})