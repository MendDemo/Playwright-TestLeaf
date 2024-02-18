import {expect, test} from "@playwright/test"
import path from "path";

test('scenario 1- downloading a file ',async ({page}) => {


    await page.goto("https://leafground.com/file.xhtml");

    const filedDownloader=  page.waitForEvent('download');

    const downloadElement= page.getByRole('button',{name:'Download'});
    
    //page.locator(".ui-button-text ui-c").filter({hasText:'Download'});
    expect(await downloadElement.isVisible());
    await downloadElement.click();

    const filedDownloaded= await filedDownloader;
    
    
    await filedDownloaded.saveAs(path.join(("Downloads/"+ filedDownloaded.suggestedFilename())));

    console.log('Downloaded file name is: '+filedDownloaded.suggestedFilename());

})