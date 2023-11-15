const convertToCelsius = function(degreesFarenheit) {
  let degreesCelsius = (degreesFarenheit - 32)*(5/9);
  degreesCelsius = Math.round(degreesCelsius*10)/10;
  return degreesCelsius
};

const convertToFahrenheit = function(degreesCelsius) {
  let degreesFarenheit = degreesCelsius * (9/5) + 32;
  degreesFarenheit = Math.round(degreesFarenheit*10)/10;
  return degreesFarenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
