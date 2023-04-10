/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0
    let total = 0
    let min_sub = Infinity
    
    for(let right = 0; right < nums.length; right++){
        total += nums[right]
        
        while(total >= target){
            min_sub = Math.min(min_sub, right-left+1)
            total -= nums[left]
            left += 1
        }
    }
    
    return min_sub === Infinity ? 0 : min_sub
};

