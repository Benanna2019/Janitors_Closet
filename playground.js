const compose = require("./compose");
const reduce = require("./reduce");
const prop = require("./prop");
const add = require("./add");
const zipWith = require("./zipWith"); 
const map = require("./map"); 

// function reduce(fn, arr, val = 0) {
//     let accum = val;
//     for (let i = 0; i < arr.length; i++) {
//       accum = fn(accum, arr[i]);
//     }
//     return accum;
//   }
// let array = [4, 3, 67, 42, 7, 8, 9, 10];
// function square(x) {
//   return x * x;
// }

// function addTwo(a) {
//   return a + 2;
// }

// let reduceResult = reduce((accum, el) => accum * el, array, 1);
// const reducer = (accum, el) => {
//   if (el < accum) {
//     return el;
//   }
//   return accum;
// };
// let minResult = reduce(reducer, array, array[0]);

// console.log(reduceResult);
// console.log(minResult);

// let squareAndAddTwo = compose2(addTwo, square);
// let squareAndAddTwoSquare = compose3(square, addTwo, square);
// let newCompose = compose(square, square, addTwo, square);
// console.log(squareAndAddTwo(20));

// console.log(squareAndAddTwoSquare(2));

// console.log(newCompose(2));

// const obj2 = {
//   name: "you",
//   age: 77,
// };

// console.log(prop("name", obj2));



let array1 = [2,4,6,8]; 
let array2 = [1,3,5,7]; 
let array3 = [6,5,4,7,8,2,3]; 

let zippedFunctions = zipWith(add, array1, array2)

console.log(zippedFunctions); 

let functionResults = map(fn=>fn(), zippedFunctions)

console.log(functionResults); 

let reducer = (accum, el) => accum + el
let reducedResults = reduce(reducer, functionResults)
console.log(reducedResults);   