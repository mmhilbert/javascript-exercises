const sumAll = function(firstNum, lastNum) {
    /* list out all numbers between first and last number 
       add all listed numbers together
       return final sum of numbers 
    */
   /* if first or second parameter are not a number, return ERROR
      if first or second parameter are less than 0, return ERROR  */

    if (typeof firstNum != 'number' || typeof lastNum != 'number') {
        return "ERROR"
    }  
    if (firstNum < 0 || lastNum < 0) {
        return "ERROR"
    }

    let smallerNum = 0;
    let largerNum = 0;
    
    if (lastNum > firstNum) {
        smallerNum = firstNum;
        largerNum = lastNum;
    } else {
        smallerNum = lastNum;
        largerNum = firstNum;
    }
    
    let newSum = 0;
       for (let i = smallerNum; i <= largerNum; i++) {
        newSum += i;
       }
    return newSum;

};

// Do not edit below this line
module.exports = sumAll;
