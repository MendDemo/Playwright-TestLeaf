import { test } from "@playwright/test";


test.only("Test case to check device emulation with config file change", async ({page}) => {

    page.on('console',message=>{
        
        console.log(`Received message >>> ${message.type()} and ${message.text()} `)

    })

    await page.goto("https://testleaf.com");

})