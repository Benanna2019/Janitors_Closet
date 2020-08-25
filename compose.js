const reduce = require("./reduce");

// function compose3(fn, fn2, fn3) {
//   return function (x) {
//     return fn(fn2(fn3(x)));
//   };
// }

// function reduce(fn, arr, val = 0) {
//     let accum = val;
//     for (let i = 0; i < arr.length; i++) {
//       accum = fn(accum, arr[i]);
//     }
//     return accum;
//   }

// function compose(...fns) {
//   return function (x) {
//     let accum = x;
//     for (let i = 0; i < fns.length; i++) {
//       let currentFunction = fns[fns.length - i - 1];
//       accum = currentFunction(accum);
//     }
//     return accum;
//   };
// }

function compose(...fns) {
  return function (x) {
    return reduce((accum, fn) => fn(accum), fns.reverse(), x);
  };
}

module.exports = compose;
