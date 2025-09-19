"use strict";

//----------parent class
class Person {
  constructor(firs_name, birth) {
    this.firs_name = firs_name;
    this.birthYear = birth;
  }
  // method for calculating age
  age() {
    return 2025 - this.birthYear;
  }
}

//for setting prototypes we use extend keyword
class Student extends Person {
  constructor(firs_name, birth, marks) {
    super(firs_name, birth); //for inhereting properties from parent class
    this.marks = marks;
  }
  //method for calculating percentage outof 200
  calPercentage() {
    const percentage = (this.marks * 100) / 200;
    return percentage;
  }
}

//-----------------------------creating new student
const Manahil = new Student("safoora", 2004, 120);
console.log(safoora);
//calling the age method which is inhereted from parent class
const age = safoora.age();
console.log(age); //returns  age
//calling the calPercentage method
const percentage = safoora.calPercentage();
console.log(percentage);
