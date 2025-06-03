/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return [...args] = "Hello World";  
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */