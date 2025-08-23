"use strict";

//sets and maps use the same syntax as array

const map = new Map([
  ["name", "safoora"],
  ["Degree", "BSAI"],
  ["Roll No", 20],
  ["Age", 21],
]);

map.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

////////////////now for sets/////////////////////////////////////////////
//NOTE: sets do not have key or index but following syntax of forEach loop we will set the key parameter to '_'

const set = new Set(["DSA", "DLD", "CPS", "DSA", "CPS"]);
set.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
});
