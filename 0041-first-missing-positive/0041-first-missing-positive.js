/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(nums.length === 1 && nums[0] !== 1) return 1
    if(nums.length === 1 && nums[0] === 1) return nums[0] + 1
    
    const seen = {}
    let max = 0
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            seen[nums[i]] = true
            max = Math.max(max, nums[i])
        }
    }
    
    for(let i = 1; i <= max+1; i++){
        if(!seen[i]){
            return i
        }
    }
};