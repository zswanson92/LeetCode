/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let abc = digits.join('')
    let num = Number(abc) + 1
    console.log(num)
    
    let bigIntNum = BigInt(abc) + BigInt(1)
    console.log("!!!!!", bigIntNum)
    let numSplit = String(bigIntNum).split('')
    for(let i = numSplit.length; i > 0; i--){
        if(numSplit[i] === '9'){
            numSplit[i - 1]++
        } else {
            break
        }
    }
    return numSplit
};