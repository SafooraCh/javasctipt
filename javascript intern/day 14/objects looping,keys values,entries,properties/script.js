"use strict";

const student = {
  name: "Manahil",
  rollno: 69,
  degree: "BSCYS",
  gpa: 3.88,
};
//////////////////////////////////object keys//////////////////////////////
//returns all the keys(names of the properties always strings)
const keys = Object.keys(student);
console.log(keys);

////////////////////////////////object values//////////////////////////////
//returns values of the keys (may be string,int,float etc)
const values = Object.values(student);
console.log(values);
///////////////////////////////object properties///////////////////////////
//returns arrays of properties each contains property name and it's corresponding value
const entries = Object.entries(student);
console.log(entries);

////////////////////////////////////////Looping an object////////////////////////////
for (let i in student) {
  console.log(`${i} :${student[i]}`);
}
///////////////////////////////////////object methods//////////////////////////////
Object.values(student).forEach((value) => {
  console.log(value * 3); //triples each value
});

Object.entries(student).forEach(([keys, values]) => {
  console.log(`${keys}:${values}`);
});
