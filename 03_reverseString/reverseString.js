const reverseString = function(inputString) {
  let reversedString='';
  let i = inputString.length -1;
  while (i >= 0) {
    reversedString += inputString[i];
    i--;
  }
  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
