import { firefox } from "@playwright/test";

type supportedBrowserNames= 'chrome'|'firefox'|'msedge'
type StringOrNumber= string|number;

let aValue:StringOrNumber= 'true';

console.log(printBrowserNames('chrome',3))
function printBrowserNames(browser:supportedBrowserNames,value:StringOrNumber):StringOrNumber{ 

    if(browser=="msedge"){
        value='3'
        console.log(browser +" +>"+value)
    }
    
    return browser;

}