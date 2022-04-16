// *********** assignments 01.LECTURE: Values and Variables
// const country = "egypt";
// const continent = "africa";
// let population = 11000000;

// *********** assignments 02.LECTURE: Data Types
// const isIsland = false;
// let language;
// console.log(typeof language); // undefined
// console.log(typeof isIsland); // boolean
// console.log(typeof country); // string
// console.log(typeof continent); // string
// console.log(typeof population); // number

// *********** assignments 03.LECTURE: let, const and var
// language = "arabic";
/** we can not declare variable with const without assigning a value */

// *********** assignments 04.LECTURE: Basic Operators.
// population += 1;
// console.log(population);
// console.log(600000 > population);
// let description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";

/*********************
 * Coding Challenge #1
 ********************* */
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 95;
// const johnHeight = 1.76;
// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight);
// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// *********** assignments 05.LECTURE: Strings and Template Literals.
// description = `Portugal is in ${Europe}, and its ${11} million people speak ${portuguese}.`;

// *********** assignments 06.LECTURE: Taking Decisions: if / else Statements.
// if (population > 3300000) {
//   console.log("Egypt's population is above average");
// } else {
//   console.log("Egypt's population is below average");
// }
// population = 1300000;
// if (population > 3300000) {
//   console.log("Egypt's population is above average");
// } else {
//   console.log("Egypt's population is below average");
// }

/*********************
 * Coding Challenge #2
 ********************* */
// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log(`Mark's BMI (${markBMI}) is lower than John's (${johnBMI})!`);
// }

// ***********  assignments 07.LECTURE: Type Conversion and Coercion.
// let v1 = "9" - "5"; //:4
// let v2 = "19" - "13" + "17"; //:'23'
// let v3 = "19" - "13" + 17; //: 23
// let v4 = "123" < 57; //:false
// let v5 = 5 + 6 + "4" + 9 - 4 - 2; //: 143

// ***********  assignments 08.LECTURE: Equality Operators: == vs. ===.
// let userInput = prompt("How many neighbour countries does your country have?");
// if (userInput == 1) {
//   console.log("Only 1 border!");
// } else if (userInput > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
// //-------------
// if (userInput === 1) {
//   console.log("Only 1 border!");
// } else if (userInput > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// ***********  assignments 09.LECTURE: Equality Operators: == vs. ===.
// const country = "egypt";
// const continent = "africa";
// let population = 11000000;
// const isIsland = false;
// let language = "arabic";
// console.log(language == "English" && isIsland && population < 5000000);

/*********************
 * Coding Challenge #3
 ********************* */
/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}*/

// ***********  assignments 10.LECTURE: The switch Statement.
// let;
// language = "english";
// switch (language) {
//   case "chinese":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

// ***********  assignments 11.LECTURE: The Conditional (Ternary) Operator.
// let population = 100(population > 33)
//   ? console.log("Egypt's population is above average")
//   : console.log("Egypt's population is below average");

/*********************
 * Coding Challenge #4
 ********************* */

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
