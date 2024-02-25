import { chromium, devices, firefox, test } from "@playwright/test";


test.only("Test case to check device emulation with config file change", async () => {

    const mydevice=devices['Galaxy Note 3']
    const browser= await firefox.launch();
    const context=await browser.newContext({...mydevice,viewport:{width:596,height:123}});
    const page=await context.newPage();
    await page.goto("https://www.google.com")


})