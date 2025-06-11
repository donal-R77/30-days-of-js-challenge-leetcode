/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let calls = 0;
  return function (...args) {
    if (calls++ < 1) {
      return fn(...args);
    } else {
      return undefined;
    }
  };
};
fn = (a, b, c) => a * b * c;
const onceFn = once(fn);
console.log(`${onceFn(5, 7, 4)}`);
console.log(`${onceFn(2, 3, 6)}`);
console.log(`${onceFn(4, 6, 8)}`);
