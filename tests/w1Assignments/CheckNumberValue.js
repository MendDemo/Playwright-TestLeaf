//create number check method/function
 numbers=a;
 var a ='0';

function compareANumberWithZero(numbers) {
    console.log(numbers)
    if(numbers > 0){
        console.log('Number received is '+numbers+ `and it's greater than zero`)
    }
    else if(numbers <0){
        console.log('Number received is '+numbers+ `and it's lesser than zero`)
    }
    else if (numbers ===0){
        console.log('Number received is '+numbers)
    }

    else if(typeof(numbers!=Number)) {console.log('Received input is not a number and type of parameter received is '
    +typeof(numbers));
}
    
}
compareANumberWithZero(numbers);