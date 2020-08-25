function compose3(fn, fn2, fn3) {
  return function (x) {
    return fn(fn2(fn3(x)));
  };
}

module.exports = compose3;
