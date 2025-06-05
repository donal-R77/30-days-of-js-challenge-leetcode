/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = [];
    for (let i = 0; i< arr.length; i++) { 
        returnedArray[i] = fn(arr[i],i);
   
    }
    return returnedArray;
};
function somme(n,i) {
 return n + i;    
}
const newArray = map([1,2,3,4],somme);
console.log(newArray);
