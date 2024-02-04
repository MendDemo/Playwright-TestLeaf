import { test, expect } from "@playwright/test";


test.skip('Test case to return no of the frames avialble', async({page})=>{


    await page.goto("https://leafground.com/frame.xhtml");
    page.waitForLoadState();
    const noOfFrames=page.frames().length;
    console.log(noOfFrames);

    console.log( page.frames().length);
    

})

test.skip('Test case to handle frames', async({page})=>{


    await page.goto("https://leafground.com/frame.xhtml");
    page.waitForLoadState();
    const noOfFrames=page.frames().length;
    await page.frame({url:"https://leafground.com/default.xhtml"})?.click('#click')

    console.log('handling frames using frameLocator------------');

   page.frame({url:'https://leafground.com/page.xhtml'})?.frameLocator('iframe').first()
    .locator('#click').click();
   

})

test('Test case to handle both frames and alerts', async({page})=>{


    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    page.waitForLoadState();
    page.on('dialog',async alert =>{

        console.log('alert type found is: '+alert.type());
        alert.accept();
        

    })
    const noOfFrames=page.frames().length;
    const frame=page.frame({name:'iframeResult'});
    await frame?.locator("text=Try it").click();
    const frameResponse=frame?.locator("#demo").innerText()
    await    expect(frameResponse).toEqual('You pressed OK!')

   

})