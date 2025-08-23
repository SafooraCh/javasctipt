"use strict";

////////////////////////////////////capitalize function////////////////////////////////////
const str = "my name is safoora";

const convert = (s) => {
  let stringArray = s.split(" ");
  let output = "";
  for (let i of stringArray) {
    // capitalize first letter
    output += `${i.replace(i[0], i[0].toUpperCase())} `;
  }
  return output.trim();
};

/////////////////////High Order Function////////////////////////////////////////
function changeTheString(string, fn) {
  // calls another function (callback)
  console.log("Converted string: ", fn(string));
}

changeTheString(str, convert);
// convert is a callback passed to changeTheString

///////////////////High order function returning a function///////////////////////////////

function calculateAge(year) {
  return function (birth) {
    return year - birth;
  };
}

const currentYear = 2025;
const birthYear = 2005;

let AgeCalculator = calculateAge(currentYear);
// returns a function expecting "birthYear"

console.log(
  "The returned function is: ",
  AgeCalculator,
  " and its type is: ",
  typeof AgeCalculator
);

const age = AgeCalculator(birthYear);
console.log("The calculated age is: ", age);

/////////////////// Extra: Combining both ideas /////////////////////////////////
// Function to build a profile with callback + HOF returning function

function profileBuilder(name, birth, gender) {
  const capitalizedName = convert(name); // capitalize using callback
  const getAge = calculateAge(currentYear); // returns a function
  const age = getAge(birth);

  return `Name: ${capitalizedName}, Age: ${age}, Gender: ${gender}`;
}

console.log(profileBuilder("safoora", 2004, "F"));
