const removeFromArray = function(inputArray, ...extras) {
  let elementToRemove;
  let indexToRemove;
  for (let i=0; i < extras.length; i++) {
    
    elementToRemove = extras[i];
    indexToRemove = inputArray.indexOf(elementToRemove);
    if (indexToRemove === -1) continue;
    inputArray.splice(indexToRemove,1);
    
  }
  
  return inputArray
};

// Do not edit below this line
module.exports = removeFromArray;
