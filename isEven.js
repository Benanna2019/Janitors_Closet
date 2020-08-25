const compose2 = require("./compose2");
const isOdd = require("./isOdd");
const not = require("./not");

const isEven = compose2(not, isOdd);

console.log(isEven(4));
console.log(isEven(5));

module.exports = isEven;
