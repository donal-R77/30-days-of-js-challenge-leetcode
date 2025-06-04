/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let valIncDec = init;
    let resetValue = init;
    let increment = function() {
            return ++valIncDec;
        }
    let decrement = function() {
            return --valIncDec;
        }
    let reset = function() {
        return valIncDec = resetValue;
    }
    return {increment, decrement, reset};
};
// const counter = createCounter(0);
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.decrement()); // 1
// console.log(counter.reset()); // 0
// console.log(counter.reset()); // 0



//   const counter = createCounter(5)
//  console.log(counter.increment()); // 6
//   console.log(counter.reset()); // 5
//   console.log(counter.decrement()); // 4
 