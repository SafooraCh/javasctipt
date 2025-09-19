"use strict";

const Person = function (name, marks) {
  //the function name always start with capital
  //arrow function cannot be used

  this.Name = name;
  this.percentage = marks / 100;
  //properties are added using this keyword
};

//creating an object using the above function

const person1 = new Person("safoora", 60);
console.log("person-1 is: ", person1);

const person2 = new Person("ch", 80);
console.log("person-2 is: ", person2);
