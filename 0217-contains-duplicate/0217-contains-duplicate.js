/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {}
    
    for(let i = 0; i < nums.length ; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
        }
    }
    
    let abc = Object.values(hash)
    
    for(let k = 0; k < abc.length ; k++){
        if(abc[k] >= 2) return true
    }
    
    return false
};