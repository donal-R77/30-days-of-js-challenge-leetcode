/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i],i)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;       
};
arr = [-2,-1,0,1,2], fn = function greaterThan10(n) { return n  + 1; }
const newArray = filter(arr, fn);
console.log(newArray);
