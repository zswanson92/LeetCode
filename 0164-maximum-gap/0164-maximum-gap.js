/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length < 2) return 0
    let max = 0
    let sorted = nums.sort((a, b) => a - b)
    console.log(sorted)
    for(let i = 0; i < nums.length ; i++){
        if(Math.abs(sorted[i] - sorted[i+1]) > max){
            max = Math.abs(sorted[i] - sorted[i+1])
            console.log(max)
        }
    }
    return max
};