// // Function calls and storing results
// function describeCountry(country, population, capitalCity) {

//     return `${country} has ${population} million people and it's capital is${capitalCity}`;
// }
// const Finland = describeCountry('Finland', 6, 'Helsinki');
// const Pakistan = describeCountry('Pakistan', 240, 'Islamabad');
// const Japan = describeCountry('Japan', 125, 'Tokyo');

// // Logging the results
// console.log(Finland);
// console.log(Pakistan);
// console.log(Japan);


// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const percChina = percentageOfWorld1(1441);
// const percPakistan = percentageOfWorld1(240);
// const percUSA = percentageOfWorld1(332);

// console.log(`China: ${percChina.toFixed(2)} %`);
// console.log(`Pakistan: ${percPakistan.toFixed(2)} %`);
// console.log(`USA: ${percUSA.toFixed(2)} %`);

// // Function Expression
// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// };

// const percChina2 = percentageOfWorld2(1441);
// const percPakistan2 = percentageOfWorld2(240);
// const percUSA2 = percentageOfWorld2(332);

// console.log(`China(Expression): ${percChina2.toFixed(2)} %`);
// console.log(`Pakistan(Expression): ${percPakistan2.toFixed(2)} %`);
// console.log(`USA(Expression): ${percUSA2.toFixed(2)} %`);


// // Arrow Function
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const percChina3 = percentageOfWorld3(1441);
// const percPakistan3 = percentageOfWorld3(240);
// const percUSA3 = percentageOfWorld3(332);
// console.log(`China(Arrow): ${percChina3.toFixed(2)} %`);
// console.log(`Pakistan(Arrow): ${percPakistan3.toFixed(2)} %`);
// console.log(`USA(Arrow): ${percUSA3.toFixed(2)} %`);


// // Function that calculates percentage of world population
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// function describePopulation(country, population) {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${percentage.toFixed(1)}% of the world.`;
// }

// const desc1 = describePopulation('China', 1441);
// const desc2 = describePopulation('Pakistan', 240);
// const desc3 = describePopulation('USA', 332);
// console.log(desc1);
// console.log(desc2);
// console.log(desc3);