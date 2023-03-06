/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let sorted = nums.sort((a, b) => a - b)
    console.log(sorted)
    let smallest = sorted[0]
    let largest = sorted[sorted.length - 1]
    console.log(smallest)
    console.log(largest)
    
    
    for(let i = largest; i >= 0; i--){
        if(largest % i === 0 && smallest % i === 0){
            return i
        }
    }
    
    
    return 1
};