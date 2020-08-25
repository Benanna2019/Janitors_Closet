function compose3(fn, fn2, fn3) {
  return function (x) {
    return fn(fn2(fn3(x)));
  };
}

function compose(...fns) {
  return function (x) {
    let accum = x;
    for (let i = 0; i < fns.length; i++) {
      let currentFunction = fns[fns.length - i - 1];
      accum = currentFunction(accum);
    }
    return accum;
  };
}

module.exports = compose;
