// //for loop
// console.log('lifting wieghts repetetion 1');
// console.log('lifting wieghts repetetion 2');
// console.log('lifting wieghts repetetion 3');
// console.log('lifting wieghts repetetion 4');
// console.log('lifting wieghts repetetion 5');
// console.log('lifting wieghts repetetion 6');
// console.log('lifting wieghts repetetion 7');
// console.log('lifting wieghts repetetion 8');
// console.log('lifting wieghts repetetion 9');
// console.log('lifting wieghts repetetion 10');
// //for loop running condition
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting wieght repetetion${rep}`);
// }
// //looping array continueing and breaking
// const jonas = [
//     'jonas',
//     'shedman',
//     2037 - 1991,
//     'teacher',
//     ['micheal ', 'peter', 'streaven']
// ];
// const types = [];
// // console.log(jonas[0])
// // console.log(jonas[1])
// // console.log(jonas[4])
// // for (let i = 0; i < 5; i++) {
// //     console.log(jonas[i]);
// // }
// for (let i = 0; i < jonas.length; i++) {
//     //reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);
//     //filling type array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
// console.log(types);
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);
// //continue and break
// console.log('----Only String----')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     //reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);
// };
// console.log('-----break the number----')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'number') break;
//     //reading from jonas array

//     console.log(jonas[i], typeof jonas[i]);
// }
// const jonas = [
//     'jonas',
//     'shedman',
//     2037 - 1991,
//     'teacher',
//     ['micheal ', 'peter', 'streaven']
// ];
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----starting exersice ${exercise}`)
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`----starting repetation ${rep}`)
//     }
// }
// //while loop
// for (let rep = 1; rep < 6; rep++) {
//     console.log(`----starting repetation ${rep}`);
// }
// let rep = 1;
// while (rep <= 10) {
//     console.log(`----starting repetation ${rep}`);
//     rep++;
// }
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`you rollled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('loop is about to end....');
// }
