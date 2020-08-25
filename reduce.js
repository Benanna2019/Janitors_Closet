let array = [2, 3, 6, 7, 9, 4, 5, 10, 11];

// let reducedArray = array.reduce((accum, element) => accum + element);

// console.log(reducedArray);

function reduce(fn, arr, val = 0) {
  let accum = val;
  for (let i = 0; i < arr.length; i++) {
    accum = fn(accum, arr[i]);
  }
  return accum;
}

// console.log(reduce((accum, el) => accum + el, array, 50));

module.exports = reduce;
