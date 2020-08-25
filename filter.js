let array = [4, 7, 3, 6, 5, 2, 9, 10, 12];

// let filteredArray = array.filter((x) => x % 2 === 0);

// console.log(filteredArray);

function filter(fn, arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filter((x) => x % 2 === 0, array));
module.exports = filter;
