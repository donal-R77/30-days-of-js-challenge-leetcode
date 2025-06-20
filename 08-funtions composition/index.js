/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {      
        return (functions.length === 0)?x:[...functions].reduceRight((acc,fn) => fn(acc),x);
    }
};
const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4));
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */