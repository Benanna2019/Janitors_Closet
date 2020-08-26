// function curry(fn) {
//     return function (a) {
//       return function (b) {
//         return function (c) {
//           return fn(a, b, c);
//         };
//       };
//     };
//   }

// function curry(fn) {
//   let args = [];
//   return function currier(arg) {
//     args.push(arg);
//     console.log(arg);
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (argNext) {
//         return currier(argNext);
//       };
//     }
//   };
// }

function curry(fn) {
  let args = [];
  return function currier(arg) {
    args.push(arg);
    if (args.length >= fn.length) return fn(...args);
    return (argNext) => currier(argNext);
  };
}

function add(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}

const curryAdd = curry(add);
console.log(curryAdd(3)(5)(7)(2)(1)(100)(10) === 128);

module.exports = curry;
