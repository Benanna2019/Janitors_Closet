const compose = require("./compose");
const reduce = require("./reduce");

// function reduce(fn, arr, val = 0) {
//     let accum = val;
//     for (let i = 0; i < arr.length; i++) {
//       accum = fn(accum, arr[i]);
//     }
//     return accum;
//   }
let array = [4, 3, 67, 42, 7, 8, 9, 10];
function square(x) {
  return x * x;
}

function addTwo(a) {
  return a + 2;
}

let reduceResult = reduce((accum, el) => accum * el, array, 1);
const reducer = (accum, el) => {
  if (el < accum) {
    return el;
  }
  return accum;
};
let minResult = reduce(reducer, array, array[0]);

// let squareAndAddTwo = compose2(addTwo, square);
// let squareAndAddTwoSquare = compose3(square, addTwo, square);
// let newCompose = compose(square, square, addTwo, square);
// console.log(squareAndAddTwo(20));

console.log(reduceResult);
console.log(minResult);

// console.log(squareAndAddTwoSquare(2));

// console.log(newCompose(2));
