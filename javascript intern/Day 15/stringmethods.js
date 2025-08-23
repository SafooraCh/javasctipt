"use strict";

/////////////////////////strings/////////////////////////////////////////////
//strings are not structures just primitives but when we call a method upon a string
//it is automatically converted to an object

const string = "my name is safoora, age is 21, gender is F";

const newStr = new String(string.slice(-5));
console.log("the new string is: ", newStr, " and it is a ", typeof newStr);
//it will return type as object

/////////////////////////////.length && .indexof()//////////////////////////////
console.log("the length of the string is: ", string.length);
console.log('the index "M" is: ', string.indexOf("M"));
console.log('the last occurrence of "a" is: ', string.lastIndexOf("a"));

///////////////////////////////include(), startwith()///////////////////////////////
//returns true or false
console.log('the string includes "safoora": ', string.includes("safoora"));
console.log('the string starts with "s": ', string.startsWith("s"));
console.log('the string ends with "a": ', string.endsWith("a"));

///////////////////////////////.slice////////////////////////////////////////////
console.log("the name is: ", string.slice(11, 25));
console.log("the word first two letters are", string.slice(0, 2));
console.log("the last part is: ", string.slice(-5)); // last 5 chars

/////////////////////////////////uppercase && Lowercase///////////////////////////
console.log("the string into uppercase is: ", string.toUpperCase());
console.log("the string back to lower case is: ", string.toLowerCase());

////////////////////////////////trim()////////////////////////////////////////////
const university = "      sscaseit        ";
console.log(university.trim());
// ignores the spaces before and after a string

////////////////////////////////replace()////////////////////////////////////////
console.log(
  'the string after replacing "a" with "b" is: ',
  string.replace("a", "b")
); // only replaces the first occurrence

////////////////////////////////replaceALL() and Replace global/////////////////////
console.log(
  'the string after replacing all occurrences of "a" with "b" is: ',
  string.replaceAll("a", "b")
);
console.log(
  'the string after replacing "a" with "b" globally is: ',
  string.replace(/a/g, "b")
);
