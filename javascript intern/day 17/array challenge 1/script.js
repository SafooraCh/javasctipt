"use strict";

const checkDogs = function (arr1, arr2) {
  arr1 = arr1.slice(1, -2);
  const array = [...arr1, ...arr2];

  array.forEach(function (value, i) {
    value >= 3
      ? console.log(
          `Dog Number ${i + 1} is an adult and it is ${value} years old`
        )
      : console.log(
          `Dog Number ${i + 1} is still a Puppy and it is ${value} years old`
        );
  });
};
let arr1 = [3, 5, 2, 12, 7];
let arr2 = [4, 1, 15, 8, 3];

checkDogs(arr1, arr2);
console.log(
  "-------------------------------Second Data-----------------------------"
);
arr1 = [9, 16, 6, 8, 3];
arr2 = [10, 5, 6, 1, 4];
checkDogs(arr1, arr2);
