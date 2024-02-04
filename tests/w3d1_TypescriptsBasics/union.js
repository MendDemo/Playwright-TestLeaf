"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aValue = 'true';
console.log(printBrowserNames('chrome', 3));
function printBrowserNames(browser, value) {
    if (browser == "msedge") {
        value = '3';
        console.log(browser + " +>" + value);
    }
    return browser;
}
