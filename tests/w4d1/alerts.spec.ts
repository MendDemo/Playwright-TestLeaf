



/**
 * Dialog - event based
 * 
 *  Automatically dismiss
 *  You cannot inpect an Alert - javacript
 * 
 * 
 * 
 */
import { test, expect } from "@playwright/test";


test('Test case to handle the dialog', async({page})=>{


    await page.goto("https://leafground.com/alert.xhtml");
    await page.locator("text = Show").first().click();
    await page.waitForTimeout(2000);
    const cardLocator = page.locator(".card").filter({hasText:"Alert (Confirm Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(2000);
    const cardLocator1 = page.locator(".card").filter({hasText:"Alert (Prompt Dialog)"});
    await cardLocator1.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(2000);
})


/**
 * 
 * Types of Alert
 *  1. Modal Alert
 *      - Simple Alert --> 1 value --> Ok --> accept the dialog
 *      - Confirm Alert --> 2 values --> OK/Cancel --> either accept or dismiss
 *      - Prompt Alert --> 1 text box, 2 values --> Ok/Cancel 
 *  2. Non Modal Alert
 *      - Sweet Alert --> inspectable (without handling the sweet alert, you cannot interact with 
 *                          the web page)
 * 
 * Methods
 * 1. To accept the dialog --> dialog.accept()
 * 2. To dismiss the dialog --> dialog.dismiss()
 * 3. To enter a value in the dialog --> dialog.accept("Ranjini")
 * 4. To retrieve a text from the dialog --> dialog.message();
 * 5. To get the type --> dialog.type()
 * 
 * 
 * 
 * 
 */
test.only("Test case to handle dialogs", async ({page}) => {


    await page.goto("https://leafground.com/alert.xhtml");


    // page.on('dialog', async dialog =>{
    //     const text = dialog.message();
    //     console.log(`The text present in the dialog is ${text}`);
    //     const typeOfAlert = dialog.type();
    //     console.log(`Dialog type: ${typeOfAlert}`);
    //     await dialog.accept();
    // })


    
    page.once('dialog', async dialog =>{
        const text = dialog.message();
        console.log(`The text present in the dialog is ${text}`);
        const typeOfAlert = dialog.type();
        console.log(`Dialog type: ${typeOfAlert}`);
        await dialog.accept();


    })
    await page.locator("text = Show").first().click();
    await page.waitForTimeout(2000);
    
    page.once('dialog', async dialog =>{
        const text = dialog.message();
        console.log(`The text present in the dialog is ${text}`);
        const typeOfAlert = dialog.type();
        console.log(`Dialog type: ${typeOfAlert}`);
        await dialog.accept();


    })
   
    const cardLocator = page.locator(".card").filter({hasText:"Alert (Confirm Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(2000);


    page.once('dialog', async dialog =>{
        const text = dialog.message();
        console.log(`The text present in the dialog is ${text}`);
        const typeOfAlert = dialog.type();
        console.log(`Dialog type: ${typeOfAlert}`);
        await dialog.dismiss();


    })
    const cardLocator1 = page.locator(".card").filter({hasText:"Alert (Prompt Dialog)"});
    await cardLocator1.locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(2000);
    
})