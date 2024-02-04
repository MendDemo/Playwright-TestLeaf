import { test, chromium, expect } from "@playwright/test";
import { channel } from "diagnostics_channel";
import { link } from "fs";




test('launch chrome browser',async()=>{
const browser= await chromium.launch({headless:false,channel:'msedge'});
const pageId= await browser.newPage();
const browserContext= await browser.newContext();
//const pageviaContext= await browserContext.newPage()


await pageId.goto("https://login.salesforce.com/")
await pageId.waitForLoadState()
console.log(pageId.url());

await pageId.getByLabel('Username').fill("nandhukumar92@gmail.com")
await pageId.fill('#password','Nandha92@');
await pageId.click("[type='submit']");
await pageId.waitForLoadState()
const pageTitle=await pageId.title();
console.log('Title of the page is' +pageTitle);

const toggleIcon= pageId.locator('.slds-icon-waffle').nth(1);

expect(toggleIcon.waitFor({state:"visible"}));
await pageId.click('.slds-icon-waffle');
await pageId.waitForLoadState();


expect(await pageId.locator("[text='View All']").nth(1).isVisible());
console.log("View all link is visible")

await pageId.click("xpath=(//button[text()='View All'])[1]");

await pageId.waitForLoadState();
const appLauncher= pageId.locator("[text='App Launcher']").nth(2);

await appLauncher.waitFor({state:"visible"});

const individualsLink=  pageId.getByRole('link',{name:'Individuals'});
await individualsLink.click();

await pageId.locator('xpath=//span[contains(text(),"Individuals")]').nth(1).click();
})

