"use strict";
//  Arrow function and regular function

// var firstName = "Matilda";

// regular function..
// const jonas = {
//   firstName: "Adeena",
//   year: 2005,
//   calcAge: function () {
//     console.log(this);
//     console.log(2025 - this.year);

//     // ..Solution 1..
//     /*
//     const self = this; // self or that.
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 2005 && self.year <= 2024);
//     };
// */
//     // ..Solution 2..
//     // parent functiom uses this keyword . in parent scope this keyword is jonas. Arrow function uses the
//     // this keyword inherit from parent function...
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 2005 && this.year <= 2024);
//     };
//     isMillenial();
//   },

//   //  Arrow function..
//   greet: () => {
//     console.log(`Hey! ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // Argument keyword
// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExp(2, 5);
// addExp(2, 5);

/*addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
 };
 addArrow(2, 5, 8);
 */
//  premetive vs object ( premetive vs Refrences type)

// premitive value example...
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// // Refrence value example...
// // it point same object in memory...
// const me = {
//   name: "Adeena",
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log("Friend:", friend);
// console.log("Me:", me);

// // premetive type
// let lastName = "William";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName, oldLastName);

// // Refrence type
// const jessica = {
//   firstName: "Jessica",
//   lastName: "William",
//   age: 27,
// };
// const MarriedJessica = jessica;
// MarriedJessica.lastName = "Davis";

// console.log("Before Marriage:", jessica);
// console.log("After Marriage:", MarriedJessica);

// // copying object
// const jessica2 = {
//   firstName: "Jessica",
//   lastName: "William",
//   age: 27,
//   family: ["Alice", "Bob"],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Davis";

// console.log("Before Marriage:", jessica2);
// console.log("After Marriage:", jessicaCopy);

// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");

// console.log("Before Marriage:", jessica2);
// console.log("After Marriage:", jessicaCopy);

// Destructuring of Array

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Firenze, Italy",
//   categories: ["Italian", "Pizza", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Rice Dish"],

//   order: function (staterIndex, mainIndex) {
//     return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
//   },
// };

// // structuring of array
// const arr = [2, 3, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// /* swaping variables
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);
// */
// [first, second] = [second, first];
// console.log(first, second);

// // receive two return value from the function...
// let [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested distructuring
// let nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// let [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values...
// const [p = 1, q = 2, r = 3] = [8];
// console.log(p, q, r);

// Destructuring of object

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Firenze, Italy",
//   categories: ["Italian", "Pizza", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Rice"],

//   openingHours: {
//     thursday: {
//       open: 11,
//       close: 11,
//     },
//     friday: {
//       open: 11,
//       close: 11,
//     },
//     Saturday: {
//       open: 12, // open 24 hours....
//       close: 12,
//     },
//   },

//   order: function (staterIndex, mainIndex) {
//     return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     staterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your  delicious Pasta with ${ing1} , ${ing2} , ${ing3}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   staterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 1,
// });

// let { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// let {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // default values...
// /* let {
//   menu: [],
//   starterMenu: starters = [],
// } = restaurant;
// console.log(menu, starterMenu);
// */

// // Mutating values...
// let a = 111;
// let b = 999;
// let obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested object...
// let {
//   friday: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// //  Spread Operator

// const arr = [7, 8, 9];
// const badNewarr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewarr);
// const NewArr = [1, 2, ...arr];
// console.log(NewArr);
// console.log(...NewArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // copy Array...
// const mainMenuCopy = [...restaurant.mainMenu];

// // join two array...
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Spread operator work in iterables: (array, strings ,maps , sets, but not objects)...
// const str = "Adeena";
// const letter = [...str];
// console.log(letter);
// console.log(...str);
// console.log(`${str} Waqar`);

// const prompt = require("prompt-sync")();

// const ingredients = [
//   prompt("Ingredient 1? "),
//   prompt("Ingredient 2? "),
//   prompt("Ingredient 3? "),
// ];
