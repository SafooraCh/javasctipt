// //array
// const friend1 = 'micheal';
// const friend2 = 'steven';
// const friend3 = 'peter';
// const friends = ['micheal', 'steven', 'peter'];
// console.log(friends);
// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends(friends.length - 1));
// friends[2] = 'jay';
// console.log(friends);
// const firstName = 'jonas';
// const jonas = [firstName, 'shedmen', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// //exercise
// const calAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// // console.log(calAge(years));
// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years(years.length - 1));
// console.log(age1, age2, age3);
// const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];
// console.log(ages);




// //object
// // const jonasArray = [
// //     'jonas',
// //     'shedman',
// //     2037 - 1991,
// //     'teacher',
// //     ['micheal ', 'peter', 'streaven']
// // ];
// // console.log(jonasArray);
// // const jonas = {
// //     firstName: 'jonas',
// //     lastName: 'shedman',
// //     age: 2037 - 1991,
// //     job: 'teacher',
// //     friends: ['micheal ', 'peter', 'streaven']
// // };
// // console.log(jonas)
// // console.log(jonas.job)
// // console.log(jonas.lastName);
// // const namekey = 'Name';
// // console.log(jonas['first' + namekey]);
// // console.log(jonas['last' + namekey]);
// // const intrestedIn = prompt('what do you want to know about jonas? choose between firstname,lastname,age,job and friends');
// // console.log(jonas[intrestedIn]);
// // if (jonas[intrestedIn]) {
// //     console.log(jonas[intrestedIn]);
// // }
// // else {
// //     console.log('wrong request');
// // };
// // jonas.location = 'portugal';
// // jonas['twitter'] = '@jonasshedman';
// // console.log(jonas);
// // //challenge
// // console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his bestfriend is called ${jonas.friends[0]} `)


// // object methods
// const jonas = {
//     firstName: 'jonas',
//     lastName: 'shedman',
//     birthyear: 1991,
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['micheal ', 'peter', 'streaven'],
//     hasDriversLicense: true,
//     calAge: function (birthYear) {
//         return 2037 - birthyear;
//     }
//     calAge: function () {
//         console.log(this);
//         return 2037 - this.birthyear;
//     }
//     calAge: function () {
//         this.age = 2037 - this.birthyear;
//         return this.age;
//     }
// };
// console.log(jonas.calAge(1991));
// console.log(jonas['calAge'](1991));