// function logger() {
//     console.log('my name is jonas');
// }
// //calling function
// logger();
// logger();
// logger();
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// //function decleration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// //function expresssion
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);
// //arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;

// }
// console.log(yearsUntilRetirement(1991, 'jonas'));
// console.log(yearsUntilRetirement(1991, 'jonas'));
//funtion calling other function
// function cutPeiceFruit(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePeice = cutPeiceFruit(apples);
//     const orangePeice = cutPeiceFruit(oranges);
//     console.log(apples, oranges)
// //     const juice = `juice with ${applePeice} apples and ${orangePeice} oranges`;
// //     return juice;
// // };
// // console.log(fruitProcessor(2, 3));