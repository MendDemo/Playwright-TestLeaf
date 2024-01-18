import {chromium, test} from '@playwright/test';

test('launch chrome browser',async()=>{

const browser= await chromium.launch({headless:false, channel:'chrome'});
const browserContext= await browser.newContext();
const secondWindow= await browser.newContext();
const page= await browserContext.newPage();
const secondwindowPage= await secondWindow.newPage();
await page.goto('https://www.amazon.com/');

console.log( page.url);
await page.waitForTimeout(10);

const page1= await browserContext.newPage();

 await page1 .goto('https://www.flipkart.com');
 await secondwindowPage.goto('https://www.testleaf.com')
 console.log( page1.url);
 await page1.waitForTimeout(10);

})
