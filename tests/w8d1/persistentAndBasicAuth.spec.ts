import { chromium, test } from "@playwright/test";


test(`Persistent Context`, async () => {


    const userDataDir = "./myUserDataDir";


    //Launch a persistent context
    const context = await chromium.launchPersistentContext(userDataDir, {
        headless:false,
        httpCredentials:{
            username: "admin",
            password: "testleaf",
            origin: "http://leafground.com:8090"
        }
    });


    const page = await context.newPage();
    await page.goto("https://leafground.com/auth.xhtml");


    await page.getByRole('button', {name:'Basic Auth'}).click();


     await page.waitForTimeout(5000);



    
})