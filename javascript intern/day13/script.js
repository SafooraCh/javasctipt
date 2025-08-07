// "use strict";

// // Using an object inside another
// let person2 = {
//   name: "safoora",
//   age: 20,
// };

// let players = {
//   person1: {
//     name: "safoora",
//     age: 20,
//   },
//   person2, // no need to do anything else, just put the name of the object
// };

// console.log("The players are: ", players);

// // Declaring function inside object
// let obj = {
//   name: "safoora",
//   printThestring() {
//     console.log(`${this.name} is a good person`);
//   },
// };
// obj.printThestring();

// // Accessing variables by names
// let Name = "safoora";
// let lastName = "ch";
// let age = 20;
// let numbers = [1, 2, 3, 4];

// let obj2 = {
//   Name,
//   lastName,
//   age,
//   numbers,
// };

// console.log("The object2 is: ", obj2);

// // const numbers=[1,2,3,4,5,6,7,8];
// // for(const i of numbers)console.log(i);
// const fruits = ["Apple", "Banana", "Orange"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// /////////////////////////////////////////AND (&& ) Operator////////////////////////////////////////////////
// // 🔹 Rule of && (Logical AND) in JavaScript:
// // 👉 It also evaluates from left to right
// // 👉 It returns the first falsy value it finds
// // 👉 If no falsy value is found, it returns the last value
// const A = 0 && 1; // the left element is 0(falsy value) so it will return 0 which is the falsy value without checking the right one
// console.log("A = ", A);

// const B = "safoora" && null; //it will return null which is falsy value because the both sides must be true to return truthy value
// console.log("B = ", B);

// const C = "safoora" && "ch"; //this will return the right value because both side are truthy values and the right side is the last one it evaluated
// console.log("C = ", C);

// /////////////////////////////////////OR (||) Operator//////////////////////////////////////////////////////
// //🔹 Rule of || (Logical OR) in JavaScript:
// // 👉 It evaluates left to right
// // 👉 It returns the first truthy value it finds
// // 👉 If no truthy value is found, it returns the last value (even if falsy)
// const D = 0 || 1; // the left element is 0(falsy value) so it will return the right value  which is the truthy one
// console.log("D = ", D);

// const E = "safoora" || null; //it will return the left value  which is truthy without checking the right side
// console.log("E = ", E);

// const F = "safoora" || "ch"; //it will return the left value  which is truthy without checking the right side
// console.log("F = ", F);

// const G = undefined || NaN; //it will check both values which are falsy then it returns the left one whether it is falsy or truthy
// console.log("G = ", G);

// const I = NaN || undefined; //it will check both values which are falsy then it returns the left one whether it is falsy or truthy
// console.log("I = ", I);

// const H = null || undefined; //it will check both values which are falsy then it returns the left one whether it is falsy or truthy
// console.log("H = ", H);

// //////////////////////////  Nullish Coalescing Operator////////////////////////////////////////////////////
// // The ?? operator works left to right, just like || and &&.

// // Final Rule for ??:
// // 1️⃣ If the left value is null or undefined, it returns the right value.
// // 2️⃣ If the left value is anything else (even 0, false, empty string), it returns the left value.
// // 3️⃣ It does not evaluate the right side if the left side is not null/undefined (short-circuiting)

// console.log(null ?? "default"); // "default"  (because null)
// console.log(undefined ?? "default"); // "default"  (because undefined)
// console.log(0 ?? 100); // 0          (because 0 is NOT null/undefined)
// console.log(false ?? true); // false      (because false is NOT null/undefined)
// console.log("" ?? "text"); // ""         (because "" is NOT null/undefined)

// /////////////////////////////short brain storming//////////////////////////////////
// //think about these before executing
// console.log("safoora" || undefined || "ch");
// console.log("safoora" && null && "ch");
// console.log("safoora" ?? null ?? "ch");

// ///////////////////function finding maximum frequency of a number//////////

// // function findMaxFrequency(...rest) {
// //   let frequencies = new Array(rest.length).fill(1); //set default frequenies to 1

// //   for (let i = 0; i < rest.length; i++) {
// //     for (let j = i + 1; j < rest.length; j++) {
// //       if (rest[i] == rest[j]) {
// //         frequencies[i]++;
// //       }
// //     }
// //   }
// //   console.log("array is: ", frequencies);
// //   let maxFrequency = frequencies[0];
// //   for (let i = 0; i < frequencies.length; i++) {
// //     if (frequencies[i] > maxFrequency) {
// //       maxFrequency = frequencies[i];
// //     }
// //   }

// //   return maxFrequency;
// // }

// function findMaxFrequency(...rest) {
//   let frequencies = [];

//   for (let i = 0; i < rest.length; i++) {
//     if (rest[i] === null) continue; // Skip already counted elements

//     let count = 1;
//     for (let j = i + 1; j < rest.length; j++) {
//       if (rest[i] === rest[j]) {
//         count++;
//         rest[j] = null; // Mark as counted
//       }
//     }
//     frequencies.push(count); // Store frequency only once
//   }

//   console.log("Frequencies array:", frequencies);

//   return Math.max(...frequencies);
// }

// const number = [1, 5, 2, 3, 3, 5, 5, 5, 4, 6, 7, 1, 2, 8, 9, 5];
// let maxFrequency = findMaxFrequency(...numbers);
// console.log("Maximum frequency of the array is:", maxFrequency);

// //////////////////////////////////finding Maximum value/////////////////////
// function findMax(...rest) {
//   let max = rest[0];
//   for (let i = 0; i < rest.length; i++) {
//     if (rest[i] > max) {
//       max = rest[i];
//     }
//   }
//   return max;
// }

// ///////////////////////////////finding Minimum value///////////////////////
// function findMin(...rest) {
//   let min = rest[0];
//   for (let i = 0; i < rest.length; i++) {
//     if (rest[i] < min) {
//       min = rest[i];
//     }
//   }
//   return min;
// }

// const number = [2, 4, 7, 1, 5, 9, 2, 4, 6, 4, 2];
// let maximum = findMax(...numbers);
// let minimum = findMin(...numbers);
// console.log("Maximum number in the array is: ", maximum);
// console.log("Minimum number in the array is: ", minimum);

// ////////////////////////////adding array elements using rest parameter
// const add = function (...array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// };
// ///////////////////////////finding average/////////////////////////////
// function findAverage(...array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// }

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = add(...numbers);
// console.log("the sum is: ", sum);

// let average = findAverage(...numbers);
// console.log("average is: ", average);

// ///////////////pivot index is the one at which the total sum of the right side is equal to the total sum of the leftside of an array
// function findPivotIndex(...array) {
//   let totalsum = 0;
//   let leftsum = 0;
//   for (let i = 0; i < array.length; i++) {
//     totalsum += array[i];
//   }

//   for (let i = 0; i < array.length; i++) {
//     let rightsum = totalsum - leftsum - array[i];
//     if (leftsum === rightsum) {
//       return i;
//     }
//     leftsum += array[i];
//   }
// }

// const number = [1, 2, 3, 5, 6];
// const pivot = findPivotIndex(...numbers);
// console.log("pivot index of the arrays is: ", pivot);

// ////////////Unique value means a value defined by a certain condition such as in this case unique the one which is greater than the twice of each indivisual element og the array
// function findingUnique(...array) {
//   let unique = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > unique * 2) {
//       unique = array[i];
//     }
//   }
//   return unique;
// }

// const number = [1, 4, 7, 11, 88, 415, 2, 44, 101, 207];
// let unique = findingUnique(...numbers);
// console.log("the unique element of the array is: ", unique);

// let obj1 = {
//   people: 13,
//   laguage: "pashto",
// };

// let obj2 = {
//   people: 20,
//   language: "english",
// };

// //////////////////////////////using logical and assignment &&= operator//////
// //logical and assignment works only if the initial value is a truthy value

// obj1.people &&= 20; //object1.people is now 20 because initialy people variable is true

// obj2.religion &&= "islam"; //it will not initialize because initially religion is undefined means false

// console.log("object 1 is: ", obj1);
// console.log("object 2 is: ", obj2);

// /////////////////////////////using logical OR assignment ||=/////////////////
// //works only if the initial value is a falsy value

// obj1.cars ||= 10; //this will now add a new variable cars to the obj1 and initilaize it with value 10, because initially there was no variable named cars so it's initial value is falsy

// obj2.language ||= "pashto"; //this will not work since the initial value f language variable is true

// console.log("object1 after OR assignment is: ", obj1);
// console.log("object2 after OR assignment is: ", obj2);

// //////////////////////////using logical nullish assignment///////////////////
// //works only if the initial value is either null o undefined

// let x = 1;
// let y = null;
// let a = 0;
// let b = NaN;
// let c = undefined;

// y ??= x; // this will assign y with value 1 as initial value of y is null
// b ??= x; //this wouldnot work since initial value of b is not undefined or null b retains it's original value which is Nan
// c ??= a; //this will assign c with a value 0 since initail value of c is undefined
// console.log("y is: ", y);
// console.log("b is: ", b);
// console.log("c is: ", c);
