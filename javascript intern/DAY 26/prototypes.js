"use strict";

const Person = function (name, birthyear, marks) {
  this.name = name;
  this.age = 2025 - birthyear;
  this.percentage = marks / 100;
};

//new object

const person1 = new Person("safoora", 2005, 90);
console.log(person1);

//now creating a prototype

Person.prototype.welcome = function () {
  this.percentage > 0.4
    ? console.log(" you have passed")
    : console.log(" We are sorry to inform that you have failed");
};
//calling prototype on person1
person1.welcome();

Person.prototype.lastname = "ch";
console.log(person1); //if you are using node js in terminal then it wouldnot show the __proto__ property but instead if use console in chrome then you will see the __proto__ property also inside the person1 object
console.log(person1.__proto__); // will return the prototype function
console.log(Person.prototype); // will return the prototype function
console.log(person1.__proto__ === Person.prototype); //it should be true

console.log(Person.prototype.isPrototypeOf(person1)); //returns true
