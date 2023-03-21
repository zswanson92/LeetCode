/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if(n % 2 === 0 && n % n === 0){
        return n
    } else {
        return smallestEvenMultiple(n * 2)
    }
    
};