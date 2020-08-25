let array = [2, 3, 56, 3, 5, 7, 8];

function map(fn, arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    newArr.push(fn(currentElement));
  }
  return newArr;
}

console.log(map(addTwo, array));
console.log(map(multiplyTwo, array));
console.log(map((x) => x * x, array));
function addTwo(x) {
  return x + 2;
}

function multiplyTwo(x) {
  return x * 2;
}
module.exports = map;
