/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length < 2) return 0
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i - 1] < nums[i] && nums[i + 1] < nums[i]){
            return i
        } else if(nums[i + 1] < nums[i] && nums[i - 1] === undefined){
            return i
        } else if(nums[i - 1] < nums[i] && nums[i + 1] === undefined){
            return i
        }
    }
    
    
};