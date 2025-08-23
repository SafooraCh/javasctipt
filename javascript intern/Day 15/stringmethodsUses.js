"use strict";

////////////////////////////////string.split()//////////////////////////////////
// used for taking first and last name
const name = "safoora ch";
console.log("the first and last names are: ", name.split(" "));

////////////////////////////////array method join ////////////////////////////

const array = name.split(" ");
const Name = array.join("--");
console.log("the Name is: ", Name);

/////////////////////capitalization all the first letters of the names in a string
const capitalizeName = (string) => {
  const newArray = string.split(" ");
  let newStr = [];
  for (let word of newArray) {
    newStr.push(word[0].toUpperCase() + word.slice(1));
  }
  return newStr.join(" ");
};

let myName = "eman ch";

console.log("my name is: ", capitalizeName(myName));

///////////////////////////////////padding////////////////////////////////////////

console.log(myName.padEnd(35, "*")); // extends the string length to 35 by adding * at the end
console.log(myName.padStart(35, "*")); // extends the string length to 35 by adding * to the start

////////////////used in credit card masking///////////////////////////

const maskCard = (number) => {
  let masked = String(number);
  return masked.slice(-4).padStart(masked.length, "*");
};

let credit = 9876543210987654;
console.log("the masked credit card number is: ", maskCard(credit));

/////////////////////////////////.repeat()/////////////////////////////////////////////////
// used to repeat a string for certain defined times

const lastName = "ch";
const lastNameRepeated = lastName.repeat(5);
console.log(lastNameRepeated);

////////////////////////////////extra context (age & gender)///////////////////////////////

const age = 20;
const gender = "F"; // can also be "M"

console.log(`Name: ${capitalizeName(myName)}, Age: ${age}, Gender: ${gender}`);
