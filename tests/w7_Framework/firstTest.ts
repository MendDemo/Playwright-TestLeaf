import { chromium, Page } from "playwright";


class ProductPage{


    page:Page;
    url: string;


    //Overloaded constructor with optional parameters
    constructor(page: Page, url?: string){
        this.page = page;
        this.url = url ?? "https://leafground.com/list.xhtml" //Default URL


    }


    async navigate(){


        await this.page.goto(this.url);
    }


//Other methods to interact
}
async function runTest(){
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();


    //Using the  constructor with the specific URL
    const product = new ProductPage(page, "https://www.amazon.in/deals?ref_=nav_cs_gb");
    await product.navigate();


    //Using the constructor with the default URL
    const productWithDefURL = new ProductPage(page);
    await productWithDefURL.navigate();


}
runTest();