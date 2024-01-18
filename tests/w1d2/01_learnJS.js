const browserName ='chrome';
getBrowserVersion(browserName);
switch(browserName){
    case 'chrome':
        return getBrowserVersion('chrome')

    case 'firefox':
        return getBrowserVersion ('firefox')
    
    default:
        console.log('default block executed')
}



function getBrowserVersion(browserName) {
    let BrowserVersion; 
    
    if(browserName==="chrome"){
         
         BrowserVersion='120.45.23'
    }
    else if(browserName==='firefox'){
        BrowserVersion='1325'
    }
    console.log(BrowserVersion);
}




