const add = require("./add");
function zipWith(fn, arr1, arr2) {
  let fnArray = [];
  let length;
  if (arr1.length < arr2.length) {
    length = arr1.length;
  } else {
    length = arr2.length;
  }
  for (let i = 0; i < length; i++) {
    fnArray.push(()=>fn(arr1[i], arr2[i]));
  }
  return fnArray;
}

let array1 = [2,4,6,8]; 
let array2 = [1,3,5,7]; 
let array3 = [6,5,4,7,8,2,3]; 

console.log(zipWith(add, array1, array2)); 

console.log(zipWith(add, array3, array1)); 

console.log(zipWith(add, array1, array3)); 

module.exports = zipWith; 