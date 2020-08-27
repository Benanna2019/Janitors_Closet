function takeLast(num,arr) {
    return arr.slice(arr.length - num, arr.length)
}

console.log(takeLast(3, [1, 2, 3, 4, 5, 6]));