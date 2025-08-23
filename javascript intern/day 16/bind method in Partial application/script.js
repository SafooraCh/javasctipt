"use strict";
//partial applications are those in which some of the arguments are predefined and just the rest are required during calling the function

function CalculateAge(current, birth) {
  return current - birth;
}

// bind current year = 2025
const AgeCalculator = CalculateAge.bind(null, 2025);

// pass birth year = 2005 so result is 20
let age = AgeCalculator(2005);

console.log("the age is: ", age); // 20
