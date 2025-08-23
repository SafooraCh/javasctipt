"use strict";
//The primary purpose of call() is to explicitly set the this value within the function being invoked.
//The first argument passed to call() becomes the this object inside the function.
//This is particularly useful when you want to "borrow" a method from one object and use it in the context of another object.

const person = {
  name: "SAFOORA",
  age: 21,
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
  name: "SOMEY",
  age: 20,
  result: [],
};

//now i want to call the calculateResult function for person2 but how
//the function has used 'this keyword' which is object scoped and cannot be accessed by person2
//so for that person we use the call method ///////////////////////////////////////////////////

//first i will store that function in a variable as we can assign a first class function to a variable
let Result = person.calculateResult;
//now i will use the call method

Result.call(person2, "SOFTWARE", 60);
Result.call(person2, "DSA", 35);
// the first parameter here means on what object the function is called
console.log(person2.name, "Age:", person2.age, "Results:", person2.result);

///////////////////////////////////the APPLY method/////////////////////////////////////////////
//Same as the call method but here it takes the arguments in the form of an array
let array = ["CPS", 45];
Result.apply(person2, array);
//the first argument is the same as call method but the rest are all taken in the form  of an array
console.log(person2.name, "Age:", person2.age, "Results:", person2.result);
