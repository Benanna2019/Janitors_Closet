function prop(key) {
  return function (obj) {
    return obj[key];
  };
}

const obj2 = {
  name: "you",
  age: 77,
};

prop("name")(obj2);
console.log(prop("name")(obj2));
