function take(num, arr) {
//   let newArray = [];
//   for (let i = 0; i < num; i++) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
    return arr.slice(0,num); 
}


console.log(take(3, [1, 2, 3, 4, 5, 6]));


module.exports = take; 