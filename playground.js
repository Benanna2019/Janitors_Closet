const compose2 = require("./compose2");

function square(x) {
  return x * x;
}

function addTwo(a) {
  return a + 2;
}

let squareAndAddTwo = compose2(addTwo, square);

console.log(squareAndAddTwo(20));
