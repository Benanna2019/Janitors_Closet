// function prop(key) {
//   return function (obj) {
//     return obj[key];
//   };
// }

// const obj2 = {
//   name: "you",
//   age: 77,
// };

// prop("name")(obj2);
// console.log(prop("name")(obj2));

function prop(key, obj) {
  return obj[key];
}

module.exports = prop;
