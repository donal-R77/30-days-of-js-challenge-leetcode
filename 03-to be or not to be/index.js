/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  let valFnExpect = val;
        let toBe = function (valFnToBe) {
            if (valFnExpect === valFnToBe) {
                return  true ;
            }
                throw new Error("Not Equal"); ;
  };
        let notToBe = function(valFnNotToBe) {
             if (valFnExpect !== valFnNotToBe) {
                return  true;
            }
                throw new Error("Equal") ;
  };
  return { toBe, notToBe };
};

console.log(expect(5).toBe(6));
console.log(expect(5).notToBe(6));


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
