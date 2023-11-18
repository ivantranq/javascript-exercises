const fibonacci = function(nthNum) {
  if (typeof(nthNum) === 'string') nthNum = parseInt(nthNum);
  if (nthNum < 1) return 'OOPS';
  const fibSequence = [1,1];
  let l = fibSequence.length;
  while (l < nthNum) {
    fibSequence.push(fibSequence[l-1] + fibSequence[l-2]);
    l = fibSequence.length;
  } 
  
  return fibSequence[l-1];
};

// Do not edit below this line
module.exports = fibonacci;
