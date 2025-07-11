// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;

//     const populations = [240, 84, 6, 1441];

//     console.log(populations.length === 4);

//     const percentages = [
//         percentageOfWorld1(populations[0]),
//         percentageOfWorld1(populations[1]),
//         percentageOfWorld1(populations[2]),
//         percentageOfWorld1(populations[3])
//     ];

//     console.log(percentages);

//     const neighbours = ['India', 'Afghanistan', 'Iran', 'China'];


//     neighbours.push('Utopia');
//     console.log(neighbours);

//     neighbours.pop();
//     console.log(neighbours);

//     if (!neighbours.includes('Germany')) {
//         console.log('Probably not a central European country :D');
//     }

//     const index = neighbours.indexOf('Iran');
//     if (index !== -1) {
//         neighbours[index] = 'Islamic Republic of Iran';
//     }
//     console.log(neighbours);

//     const myCountry = {
//         country: 'Pakistan',
//         capital: 'Islamabad',
//         language: 'Urdu',
//         population: 240,
//         neighbours: ['India', 'Afghanistan', 'Iran', 'China']
//     };

//     console.log(myCountry);

//     const myCountry = {
//         country: 'Finland',
//         capital: 'Helsinki',
//         language: 'Finnish',
//         population: 6,
//         neighbours: ['Sweden', 'Norway', 'Russia']
//     };

//     console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} - speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

//     myCountry.population += 2;
//     console.log(`After increase: ${myCountry.population} million `);

//     myCountry['population'] -= 2;
//     console.log(`After decrease: ${myCountry.population} million`);

//     const myCountry = {
//         country: 'Finland',
//         capital: 'Helsinki',
//         language: 'Finnish',
//         population: 6,
//         neighbours: ['Sweden', 'Norway', 'Russia'],

//         describe: function () {
//             console.log(`${this.country} has ${this.population} million ${this.language} - speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//         },

//         checkIsland: function () {
//             this.isIsland = this.neighbours.length === 0 ? true : false;
//         }
//     };

//     myCountry.describe();

//     myCountry.checkIsland();
//     console.log(`Is ${myCountry.country} an island ?, myCountry.isIsland`);