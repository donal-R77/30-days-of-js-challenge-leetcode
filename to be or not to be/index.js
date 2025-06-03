/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  let value_1 = val;
        let toBe = function (value) {
            if (value_1 === value) {
                return  true ;
            }
                throw new Error("Not Equal"); ;
  };
        let notToBe = function(value) {
             if (value_1 !== value) {
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
