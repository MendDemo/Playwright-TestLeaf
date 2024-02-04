import {expect, test} from "@playwright/test"
import path from "path";

test('scenario 1- uploading a file when filetype is exists',async ({page}) => {


    await page.goto("https://leafground.com/file.xhtml");

    const chooseBtnUnderFile=  page.locator(".card").filter({hasText:'Basic Upload'});
    await expect(chooseBtnUnderFile).toBeVisible();

        await chooseBtnUnderFile.locator('[type="file"]').setInputFiles([path.join(__dirname,'image.jpg')])


        await expect(page.locator(".card").filter({hasText:'Basic Upload'}).
        locator('.ui-fileupload-filename')).toContainText("image");

        await page.waitForTimeout(10000);


})