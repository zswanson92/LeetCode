/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 1) return nums
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1] && nums[i] !== '_'){
            nums.push('_')
            nums.splice(i, 1)
            i--
        }
    }
    
    if(nums.includes('_') === false){
       return nums.length
    } 
    return nums.slice(0, nums.indexOf('_')).length 
};