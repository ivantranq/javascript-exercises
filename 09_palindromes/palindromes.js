const palindromes = function (inputString) {
  // let arrayString = inputString.split('');
  // let puncRemoved = arrayString.filter(char => !!char.match(/[.,:!?]/)).join('');
  let normalisedInput = inputString.split('')
                                    .filter(char => !char.match(/[., :!?]/))
                                    .join('')
                                    .toLowerCase();
  let reversedString = normalisedInput.split('')
                                      .reverse()
                                      .join('');
  console.log(normalisedInput);
  console.log(reversedString);
  return reversedString === normalisedInput;
};

// Do not edit below this line
module.exports = palindromes;
