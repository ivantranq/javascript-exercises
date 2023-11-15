const repeatString = function(inputString, numToRepeat) {
  let outputString = '';
  if (numToRepeat < 0) {
    return 'ERROR'
  }
  for (let i = 0; i < numToRepeat; i++) {
    outputString += inputString;
  }
  return outputString
};

// Do not edit below this line
module.exports = repeatString;
