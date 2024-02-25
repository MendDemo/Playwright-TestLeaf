import { test } from "@playwright/test";


test.only("Test case to check device emulation with config file change", async ({page}) => {


    await page.goto("https://leafground.com/alert.xhtml");

})