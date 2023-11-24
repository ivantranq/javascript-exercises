const findTheOldest = function(people) {
  let ages = people.map(person => {
    if (!person.yearOfDeath) {
      let currentDate = new Date(); 
      let currentYear = currentDate. getFullYear();
      return currentYear - person.yearOfBirth
    }
    
    return person.yearOfDeath - person.yearOfBirth});
  console.log(ages);
  let index = ages.indexOf(Math.max(...ages));
  return people[index];
  
};

// Do not edit below this line
module.exports = findTheOldest;
