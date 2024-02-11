
const reverseString = function(string) {
    /* turn string into array 
    reverse the array 
    put reversed array together 
    return output */

    let tempArray = string.split("") 
    let reverseArray = []
    for (let i = 1; i <= tempArray.length; i++) {
        reverseArray.push(tempArray[tempArray.length-i])
    }

    return reverseArray.join("")
};

// Do not edit below this line
module.exports = reverseString;
