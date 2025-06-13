/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = new Map();
  return function (...args) {
    let keyArgs = JSON.stringify(args);
    if (cache.has(keyArgs)) {
      return cache.get(keyArgs);
    }
    let result = fn(...args);
    cache.set(keyArgs, result);
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
