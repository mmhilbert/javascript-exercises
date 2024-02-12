let testArray = []
let remove = []

const removeFromArray = function(...args) {
   const myArray = args.shift()
   return myArray.filter(function(item){
    return !args.includes(item)
   })

};

removeFromArray(testArray, remove)

// Do not edit below this line
module.exports = removeFromArray;
