"use strict ";

const arr = ["apple", "Mango"];
console.log(arr?.[0]); // "apple"
console.log(arr?.[2]); // undefined

////////////////////////////////////objects
const obj = {
  name: "Manahil",
  age: 20,
  height: 5.1,
  marks: {
    DB: 94,
    oop: 91,
    physics: 65,
  },
};

const bioMarks = obj.biomarks?.marks.DSA;
//here before continuing first the ? operator checks if the biomarks property is nullish if so it doesn't continue and returns undefinded immediatly
console.log(bioMarks);

///////////////////////Using nullish coalescing operator to print something instead of undefined

const algebra =
  obj.algebramarks?.marks.physics ?? "Algebra marks not available";
console.log(algebra);

// now it will retunr 'algebra marks not available' instead of undefined

////////////////////////////using for object methods/////////////////////
const obj2 = {
  name: "zoha",
  age: 21,
  current: 2025,
  birthdate() {
    return this.current - this.age;
  },
};

const AhmadBirthdate = obj2.birthdate?.(); //checks if obj.birthdate is available or not then continues if available
console.log(AhmadBirthdate);

const students = {
  name: "zoha",
  age: {
    student1: 20,
  },
};
const Age = students?.age?.student2 ?? 20;
console.log(Age);
