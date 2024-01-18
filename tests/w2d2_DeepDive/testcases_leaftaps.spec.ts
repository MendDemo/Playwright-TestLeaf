import {chromium, expect, test} from '@playwright/test';


test('launch chrome browser',async()=>{

const browser= await chromium.launch({headless:false, channel:'chrome'});
const browserContext= await browser.newContext();

const page= await browserContext.newPage();

await page.goto('http://leaftaps.com/opentaps/');

console.log( page.url);
await page.waitForTimeout(10);

await page.getByLabel('Username').fill('demosalesmanager');
await page.getByLabel('Password').fill('crmsfa');
await page.click('.decorativeSubmit');
await page.waitForTimeout(5000);
await page.getByRole('link',{name:'CRM/SFA'}).click();

//clicking on leads tabs

const leadsTab= page.getByRole('link',{name:'Leads',exact:true});

await leadsTab.click();

await page.getByText("Create Lead").nth(0).click();

   //Enter the company name
await page.fill("#createLeadForm_companyName", "Fidelity Investment");
//Enter the last name

await page.fill("#createLeadForm_lastName", "A");

   //Enter the first name
await page.locator("[name='firstName']").nth(2).fill("Nandhakumar");


   //Locate the dropdown

//Select the dropdown value from the preferred currency
await page.selectOption("#createLeadForm_currencyUomId", {label:'DKK - Danish Krone'});
  

//select options from source dropdown
  //Select the dropdown value from the preferred currency
await page.selectOption("#createLeadForm_dataSourceId", {label:'Direct Mail'});
  

await page.locator('#createLeadForm_dataSourceId').selectOption({value:"LEAD_OTHER"});


const dropdown=  page.locator('#createLeadForm_dataSourceId option');
//const noOfOption = await page.locator('#createLeadForm_dataSourceId').count();

console.log('All innertext of dropdown ' + await dropdown.allInnerTexts())
const noOfOption= await dropdown.count();
console.log('no.of options exists in data source are ' +noOfOption);

for(let index=0;index<noOfOption;index++ ){
   console.log('options ofthe dropdown are '+ await dropdown.nth(index).innerText());
}


await page.click("[value='Create Lead']");


const status = await page.innerText("#viewLead_statusId_sp");
    console.log(`The status of the lead is ${status}`);
    await page.waitForTimeout(3000);
})
