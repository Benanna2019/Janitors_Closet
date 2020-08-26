const compose = require("./compose");

function pipe(...fns) {
  return compose(...fns.reverse());
}

module.exports = pipe;
