const isOdd = require("./isOdd");
const not = require("./not");

function compose2(fn, fn2) {
  return function (x) {
    return fn(fn2(x));
  };
}

let isEven = compose2(not, isOdd);

if (isEven(4)) {
  console.log("Correctly prints even numbers");
} else {
  console.log("Does not correctly print out even numbers");
  console.log(isEven(4));
}
if (not(isEven(5))) {
  console.log("Correctly prints odd numbers");
} else {
  console.log("Does not correctly print out odd numbers");
  console.log(not(isEven(5)));
}

module.exports = compose2;
