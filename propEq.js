function propEq(key, val) {
  return function (obj) {
    return obj[key] === val;
  };
}

let obj1 = {
  1: "hello",
  2: "goodbye",
};
let newFunction = propEq(1, "hello");
console.log(newFunction(obj1));

module.exports = propEq;
