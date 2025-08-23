"use strict";
//the bind method is used to specify the function extracted from an object to be specified for a specific object

//taking the previous example

const person = {
  name: "Safoora",
  age: 20,
  result: [],
  calculateResult(subject, marks) {
    let output = marks > 40 ? "Pass" : "Fail";
    this.result.push(`${output} in ${subject}`);
  },
};

person.calculateResult("DSA", 50);
person.calculateResult("DLD", 30);
console.log(person.name, "Age:", person.age, "Results:", person.result);

const person2 = {
  name: "Zoha",
  age: 20,
  result: [],
};

// extract method
let Result = person.calculateResult;

// bind Result to person2
const resultPerson2 = Result.bind(person2);

// now resultPerson2 is permanently tied to person2
resultPerson2("Bio", 50);
resultPerson2("Che", 35);
resultPerson2("Phy", 55);

console.log(person2.name, "Age:", person2.age, "Results:", person2.result);
