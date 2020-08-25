const compose2 = require("./compose2");
const compose3 = require("./compose3");
function square(x) {
  return x * x;
}

function addTwo(a) {
  return a + 2;
}

let squareAndAddTwo = compose2(addTwo, square);
let squareAndAddTwoSquare = compose3(square, addTwo, square);
// console.log(squareAndAddTwo(20));

console.log(squareAndAddTwoSquare(2));

module.exports = compose3;
