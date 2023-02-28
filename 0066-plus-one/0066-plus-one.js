/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let abc = digits.join('')
    
    
    let bigIntNum = BigInt(abc) + BigInt(1)
    let numSplit = String(bigIntNum).split('')
    
    return numSplit
};