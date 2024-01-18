let str="liten"
console.log(isAnangram("listen","lsitenf"));
function isAnangram(str1,str2)
{
    console.log(str1.split("").length)
    if(str1.split("").length!==str2.split("").length){
        return false;
    }
    else{
    return true;
    }
    
    
}