/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let sorted = nums.sort((a, b) => a - b)
    let smallest = sorted[0]
    let largest = sorted[sorted.length - 1]
    for(let i = largest; i >= 0; i--){
        if(largest % i === 0 && smallest % i === 0){
            return i
        }
    }
    
    return 1
};