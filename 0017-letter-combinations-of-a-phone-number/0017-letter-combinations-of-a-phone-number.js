/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const numToLetter = {
    "2" : ['a', 'b', 'c'],
    "3" : ['d', 'e', 'f'],
    "4" : ['g', 'h', 'i'],
    "5" : ['j', 'k', 'l'],
    "6" : ['m', 'n', 'o'],
    "7" : ['p', 'q', 'r', 's'],
    "8" : ['t', 'u', 'v'],
    "9" : ['w', 'x', 'y', 'z'],
    }
    
    if(!digits) return []
    
    let array = []
    
    for(let i = 0; i < digits.length; i++){
        const number = digits[i]
        
        if(array.length === 0){
            array = [...numToLetter[number]]
        } else {
            let newArray = []
            
            for(let j of numToLetter[number]){
                for(let k of array){
                    newArray.push(k + j)
                }
            }
            array = newArray
        }
        
    }
    
    return array
};