"use strict";

// let champion = false;
// const winFinal = true;

// if (winFinal) champion = true;
// if (champion) console.log("iam the champion now");

// function checkChampion() {
//   let champion = false;
//   const winFinal = true;

//   if (winFinal) champion = true;
//   if (champion) console.log("iam the champion now");
// }
// checkChampion();
// checkChampion();
//--------------------Function declaration-------------------------
// function getFullName(first, second) {
//   return `hi ${first} + ${second}`;
// }
// const returnedValue = getFullName("ali", "youssef");
//--------------------Function expression-------------------------
// function getFullName(first, second) {
//   return `hi ${first} + ${second}`;
// }
// const returnedValue = getFullName("ali", "youssef");
// const getFullName = function (first, second) {
//   return `hi ${first} + ${second}`;
// };
//--------------------Arrow Function-------------------------
// const getFullName = (first, second) => `hi ${first} + ${second}`;
// console.log(getFullName('ali', 'mohamed'))

//--------------------Assignments-------------------------
// ***********  assignments 01.LECTURE: Functions.
// 1)
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its
//   capital city is ${capitalCity}`;
// }
// // 2)
// let v1 = describeCountry("egypt", 110, "cairo");
// let v2 = describeCountry("iran", 90, "tahran");
// let v3 = describeCountry("qatar", 10, "doha");
// console.log(v1)
// console.log(v2)
// console.log(v3)

// ***********  assignments 02.LECTURE:  Function Declarations vs. Expressions.
// 1)
// function percentageOfWorld1(population) {
//   return (population / 80000000) * 100;
// }

// // 2)
// const value = percentageOfWorld1(14410000);
// console.log(value);
// // 4)
// const percentageOfWorld1 = function (population) {
//   return (population / 80000000) * 100;
// };
// const value2 = percentageOfWorld1(14410000);
// console.log(value2);

// ***********  assignments 02.LECTURE: Arrow Functions.
// 1)
// const percentageOfWorld3 = (population) => {
//   return (population / 80000000) * 100;
// };
// const value3 = percentageOfWorld3(14410000);
// console.log(value3);

// ***********  assignments 03.LECTURE: Functions Calling Other Functions
// 1)
// function describePopulation(country, population) {
//   return `${country} has ${percentageOfWorld1(population)} million people`;
// }

// // 2)
// function percentageOfWorld1(population) {
//   return (population / 80000000) * 100;
// }
// // 3)
// console.log(describePopulation('egypt', 100000000))

// ***********  assignments 02.LECTURE: Introduction to Arrays.
// // 1)
// const populations = [100, 90, 80, 155];
// //2)
// console.log(populations.length > 4);
// //3)
// function percentageOfWorld1(population) {
//   return (population / 80000000) * 100;
// }
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// ***********  assignments 02.LECTURE: Basic Array Operations (Methods).
//1)
const neighbours = ["egypt", "moroco", "lebya", "qatar"];
//2)
neighbours.push("Utopia");
//3)
neighbours.pop();
//4)
const isItGermany = neighbours.includes("‘Germany’");
if (isItGermany) console.log("Probably not a central European country :D");
//5)
neighbours.indexOf(1)= 'alegria';


//............................................................
//.............................................................
/*********************
 * Coding Challenge #1
 ********************* */
//1)
const calcAverage = (point1, point2, point3) => {
  return (point1 + point2 + point3) / 3;
};
//2)
const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
//3)
const checkWinner = (avgKoalas, avgDolhins) => {
  if (avgKoalas > 2 * avgDolhins)
    return `kolas wins ${avgKoalas} VS ${avgDolhins}`;
  if (avgDolhins > 2 * avgKoalas)
    return `Dolhins wins ${avgDolhins} VS ${avgKoalas}`;
  return "no teams win....";
};
//4)
const result = checkWinner(avgKoalas, avgDolhins);
console.log(result);
