function curry2(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

function add(a, b) {
  return a + b;
}

const curryAdd = curry2(add);
console.log(curryAdd(3)(5) === 8);

module.exports = curry2;
