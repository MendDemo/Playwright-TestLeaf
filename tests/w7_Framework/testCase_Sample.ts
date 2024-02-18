/*1. Create a DashboardPage class with:
         A Page object to interact with the browser.
         A url string to store the URL of the dashboard.
2. The class should include:
         A constructor that initializes the Page object and             the URL.
         An asynchronous navigate method to visit the url.
3. Test Execution:
         Write an async function dashboardTest to:
         Launch a browser using Playwright's chromium module (non-headless mode).
         Open a new page.
         Create an instance of DashboardPage, passing the new page and the URL 'https://leafground.com/' to the constructor.
        Call the navigate method of the DashboardPage instance.
        */
        import {Page, chromium, expect, test} from "@playwright/test"
class DashboardPage{

myclasspage:Page
myclassurl:string
    constructor(page:Page, url?:string ){
        this.myclasspage=page;
        this.myclassurl=url??"https://leafground.com/"
    }

    async navigate(){
        await this.myclasspage.goto(this.myclassurl)
    }
}

async function dashBoardTest(){
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    const objDashboardPage=new DashboardPage(page,"https://leafground.com/dashboard.xhtml")

    await objDashboardPage.navigate();
}
dashBoardTest()