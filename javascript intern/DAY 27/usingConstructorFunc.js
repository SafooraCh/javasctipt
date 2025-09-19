"use strict";

//Parent constructor
const Person = function (first_name, birth) {
  this.first_name = first_name;
  this.birthYear = birth;

  this.age = function () {
    return 2025 - this.birthYear;
  };
};

//child constructor
const Student = function (first_name, birth, marks) {
  //   this.first_name = first_name;
  //   this.birthYear = birth;
  //to avoid duplication the inheretence is used

  Person.call(this, first_name, birth); //this will attach all the properties and methods defined in the parent constructor to the child constructor

  this.marks = marks;
};

Student.prototype = Object.create(Person.prototype);
const student1 = new Student("safoora", 2004, 90);
console.log(student1);

console.log(student1.age());
