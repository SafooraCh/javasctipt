"use strict";

const str = "my name is SAFOORA";

const convert = (s) => {
  let stringArray = s.split(" ");
  let output = "";
  for (let i of stringArray) {
    output += `${i.replace(i[0], i[0].toUpperCase())} `;
  }
  return output.trim();
};

/////////////////////High Order Function////////////////////////////
function changeTheString(string, fn) {
  //this function will call another function when called
  console.log(fn(string));
}
changeTheString(str, convert);
// convert is a callback function passed to changeTheString

///////////////////High order function returning a function//////////////////////////////////////

function calculateAge(year) {
  return function (birth) {
    return year - birth;
  };
}

const currentYear = 2025;
const birthYear = 2005; // so that age = 20

let AgeCalculator = calculateAge(currentYear);
console.log(
  "the returned function is: ",
  AgeCalculator,
  "and its type is: ",
  typeof AgeCalculator
);

const Age = AgeCalculator(birthYear);
console.log("the age is: ", Age); // 20
