/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hold = new Set()
    let left = 0
    for(let i = 0; i < nums.length; i++){
        if(i - left > k){
            hold.delete(nums[left])
            left += 1
        }
        
        if(hold.has(nums[i])){
            return true
        }
        hold.add(nums[i])
    }
    
    return false
};

