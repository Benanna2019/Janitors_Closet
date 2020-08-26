function curry3(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curryAdd = curry3(add);
console.log(curryAdd(3)(5)(7) === 15);

module.exports = curry3;
