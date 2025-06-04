/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let valIncrement = init;
    let valDecrement = init;
    let resetValue = init;
    let increment = function() {
            return ++valIncrement;
        }
    let decrement = function() {
            return --valDecrement;
        }
    let reset = function() {
        return resetValue;
    }
    return {increment, decrement, reset};
};
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */